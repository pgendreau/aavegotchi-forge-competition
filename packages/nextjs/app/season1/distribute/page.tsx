"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { useWriteContract } from "wagmi";
import { getS1RewardsMatrix } from "~~/consts/rewards";
import { forgeAbi } from "~~/contracts/abis/forge";
import deployedContracts from "~~/contracts/deployedContracts";
import { GotchisByIdAndBlockQuery } from "~~/graphql/aavegotchis/__generated__/graphql";
import { gotchisByIdAndBlockQueryDocument } from "~~/graphql/aavegotchis/queries/gotchis";
import { LeaderboardByBlockQuery } from "~~/graphql/forge/__generated__/graphql";
import { leaderboardQueryByBlockDocument } from "~~/graphql/forge/queries/smithoors";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract";
import { GotchiEntry } from "~~/types/gotchiEntry";

const Distribute = () => {
  const [blockNumber, setBlockNumber] = useState<number>(0);
  useQuery<{ jsonrpc: string; id: number; result: string }>({
    queryKey: ["polygon_block"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.polygonscan.com/api?module=proxy&action=eth_blockNumber&apikey=${process.env.NEXT_PUBLIC_POLYGONSCAN_API}`,
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      if (json.result && json.result.startsWith("0x")) {
        const block = parseInt(json.result, 16);
        if (block > parseInt(process.env.NEXT_PUBLIC_SNAPSHOT_BLOCK_NUMBER)) {
          setBlockNumber(parseInt(process.env.NEXT_PUBLIC_SNAPSHOT_BLOCK_NUMBER));
        } else {
          setBlockNumber(block);
        }
      }
      return json;
    },
  });

  const [gotchiEntries, setGotchiEntries] = useState<GotchiEntry[][]>([]);
  const leaderboardEntries = useQuery<LeaderboardByBlockQuery>({
    queryKey: ["leaderboard", blockNumber],
    queryFn: async (): Promise<LeaderboardByBlockQuery> => {
      const smithoors = await request(process.env.NEXT_PUBLIC_FORGE_SUBGRAPH, leaderboardQueryByBlockDocument, {
        first: 100,
        skip: 0,
        block: blockNumber,
      });
      return smithoors as LeaderboardByBlockQuery;
    },
  });

  const ids = leaderboardEntries.data?.gotchis.map(gotchi => gotchi.id);
  const gotchis = useQuery<GotchisByIdAndBlockQuery>({
    queryKey: ["gotchisById", ids, blockNumber],
    queryFn: async (): Promise<GotchisByIdAndBlockQuery> => {
      const gotchis = await request(process.env.NEXT_PUBLIC_AAVEGOTCHI_SUBGRAPH, gotchisByIdAndBlockQueryDocument, {
        ids: ids,
        block: blockNumber,
      });
      return gotchis as GotchisByIdAndBlockQuery;
    },
  });

  useEffect(() => {
    // We consolidate data here after each change in the queries results
    const rewardsMatrix = getS1RewardsMatrix();
    const data = leaderboardEntries.data?.gotchis.map((gotchi, index) => {
      const gotchiData = gotchis.data?.aavegotchis.find(aavegotchi => aavegotchi.id === gotchi.id);
      return {
        id: gotchi.id,
        smithingLevel: gotchi.smithingLevel,
        skillPoints: gotchi.skillPoints,
        name: gotchiData?.name ?? "",
        owner: gotchiData?.owner?.id ?? "",
        totalItemsForged: gotchi.totalItemsForged as number,
        totalItemsSmelted: gotchi.totalItemsSmelted as number,
        lastForged: gotchi?.itemsForged && (gotchi?.itemsForged[0]?.timestamp as number),
        rewardsMatrix: rewardsMatrix[index],
      } as GotchiEntry;
    });
    // Sort the data by skillPoints and lastForged.
    // If skillPoints are the same, we sort by lastForged
    data?.sort((a, b) => {
      if (b.skillPoints === a.skillPoints) {
        return (b.lastForged ?? 999999999) - (a.lastForged ?? 999999999);
      }
      return b.skillPoints - a.skillPoints;
    });
    // Split data in 5 arrays of 20
    // As we can't do all in one tx.
    data &&
      setGotchiEntries([
        data.slice(0, 20),
        data.slice(20, 40),
        data.slice(40, 60),
        data.slice(60, 80),
        data.slice(80, 100),
      ]);
  }, [leaderboardEntries.data, gotchis.data]);

  const { writeContractAsync: writeYourContractAsync } = useScaffoldWriteContract("DistributePrizes");
  const { writeContractAsync: writeForgeContractAsync } = useWriteContract();

  const forgeIds = [
    BigInt(1),
    BigInt(2),
    BigInt(3),
    BigInt(4),
    BigInt(5),
    BigInt(6),
    BigInt(7),
    BigInt(8),
    BigInt(9),
    BigInt(10),
    BigInt(11),
    BigInt(12),
    BigInt(13),
    BigInt(14),
  ];
  return (
    <div>
      <h2 className="text-4xl">Season 1 rewards distribution</h2>
      <p>Block used for snapshot: {process.env.NEXT_PUBLIC_SNAPSHOT_BLOCK_NUMBER}</p>
      <ConnectButton />
      <div className="pt-4">
        <button
          className="mybtn mybtn-border"
          onClick={async () => {
            const response = await writeForgeContractAsync({
              address: process.env.NEXT_PUBLIC_FORGE_ADDRESS,
              abi: forgeAbi,
              functionName: "setApprovalForAll",
              args: [deployedContracts[31337].DistributePrizes.address, true],
            });
            console.log(response);
          }}
        >
          Approve all transfers
        </button>
      </div>
      <div className="flex flex-col gap-y-2">
        {gotchiEntries.map((entries, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between gap-x-1 py-1">
              <span className="text-4xl">Tx {index + 1}</span>
              <button
                className="mybtn mybtn-border"
                onClick={async () => {
                  const response = await writeYourContractAsync({
                    functionName: "distribute",
                    args: [
                      process.env.NEXT_PUBLIC_FORGE_ADDRESS,
                      entries.map(e => e.owner),
                      forgeIds,
                      entries.map(e => (e.rewardsMatrix ? e.rewardsMatrix?.map(i => (i ? BigInt(1) : BigInt(0))) : [])),
                      "0x",
                    ],
                  });
                  console.log(response);
                }}
              >
                Distribute Batch {index + 1}
              </button>
            </div>
            <ul>
              {entries.map(entry => (
                <li key={entry.id}>
                  {entry.owner}, {entry.rewardsMatrix?.map(i => (i ? "1" : "0")).join(", ")}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distribute;
