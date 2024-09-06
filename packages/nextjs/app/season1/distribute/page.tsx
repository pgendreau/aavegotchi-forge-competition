"use client";

import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getS1RewardsMatrix } from "~~/consts/rewards";
import { GotchisByIdAndBlockQuery } from "~~/graphql/aavegotchis/__generated__/graphql";
import { gotchisByIdAndBlockQueryDocument } from "~~/graphql/aavegotchis/queries/gotchis";
import { LeaderboardByBlockQuery } from "~~/graphql/forge/__generated__/graphql";
import { leaderboardQueryByBlockDocument } from "~~/graphql/forge/queries/smithoors";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth/useScaffoldWriteContract";
import { GotchiEntry } from "~~/types/gotchiEntry";
import { useWriteContract } from "wagmi";
import deployedContracts from "~~/contracts/deployedContracts";

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
      <button
        className="mybtn mybtn-border"
        onClick={async () => {
          const response = await writeForgeContractAsync({
            address: process.env.NEXT_PUBLIC_FORGE_ADDRESS,
            abi: [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOfOwner","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"}],"internalType":"struct ItemBalancesIO[]","name":"output_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155BatchReceived","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC1155Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_value","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],
            functionName: "setApprovalForAll",
            args: [
              deployedContracts[31337].DistributePrizes.address,
              true
            ],
          });
          console.log(response);
        }}
      >
        Approve all transfers
      </button>
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
