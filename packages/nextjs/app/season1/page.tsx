"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { Loader } from "~~/components/layout/Loader";
import { ListItem } from "~~/components/pages/season/ListItem";
import { getRewardsFromMatrix, getS1RewardsMatrix } from "~~/consts/rewards";
import { GotchisByIdAndBlockQuery } from "~~/graphql/aavegotchis/__generated__/graphql";
import { gotchisByIdAndBlockQueryDocument } from "~~/graphql/aavegotchis/queries/gotchis";
import { LeaderboardByBlockQuery } from "~~/graphql/forge/__generated__/graphql";
import { leaderboardQueryByBlockDocument } from "~~/graphql/forge/queries/smithoors";
import { GotchiEntry } from "~~/types/gotchiEntry";

const Season1 = () => {
  const [blockNumber, setBlockNumber] = useState<number>(0);

  useQuery<{ jsonrpc: string; id: number; result: string }>({
    queryKey: ["polygon_block"],
    queryFn: async () => {
      const response = await fetch(
        `https://api.polygonscan.com/api?module=proxy&action=eth_blockNumber&apikey=${process.env.NEXT_PUBLIC_POLYGONSCAN_API_KEY}`,
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

  // useEffect(() => {
  //   // The current block is superior to the snapshot block, so we query on the snapshot block.
  //   // Otherwise we query current block.
  //   if (
  //     blockQuery.data?.result &&
  //     parseInt(blockQuery.data.result) > parseInt(process.env.NEXT_PUBLIC_SNAPSHOT_BLOCK_NUMBER)
  //   ) {
  //     setBlockNumber(parseInt(blockQuery.data.result));
  //   } else {
  //     setBlockNumber(parseInt(process.env.NEXT_PUBLIC_SNAPSHOT_BLOCK_NUMBER));
  //   }
  //   console.log("blockNumber", blockNumber);
  // }, [blockQuery.data]);

  const [gotchiEntries, setGotchiEntries] = useState<GotchiEntry[]>([]);

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
    const s1Rewards = getS1RewardsMatrix();
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
        rewards: getRewardsFromMatrix(s1Rewards[index]),
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
    data && setGotchiEntries(data);
  }, [leaderboardEntries.data, gotchis.data]);

  return (
    <>
      {leaderboardEntries.isLoading || gotchis.isLoading ? (
        <div className="flex flex-row justify-center">
          <Loader />
        </div>
      ) : (
        <ul>
          {gotchiEntries.map((gotchiEntry, index) => (
            <ListItem key={index} item={gotchiEntry} index={index} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Season1;
