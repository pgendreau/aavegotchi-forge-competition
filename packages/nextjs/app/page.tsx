"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { NextPage } from "next";
import { GotchisByIdQuery } from "~~/graphql/aavegotchis/__generated__/graphql";
import { gotchisByIdQueryDocument } from "~~/graphql/aavegotchis/queries/gotchis";
import { LeaderboardQuery } from "~~/graphql/forge/__generated__/graphql";
import { leaderboardQueryDocument } from "~~/graphql/forge/queries/smithoors";
import { GotchiEntry } from "~~/types/gotchiEntry";

const Home: NextPage = () => {
  const [skip, setSkip] = useState<number>(0);
  const [gotchiEntries, setGotchiEntries] = useState<GotchiEntry[]>([]);

  const leaderboardEntries = useQuery<LeaderboardQuery>({
    queryKey: ['leaderboard', skip],
    queryFn: async (): Promise<LeaderboardQuery> => {
      const smithoors = await request(process.env.NEXT_PUBLIC_FORGE_SUBGRAPH, leaderboardQueryDocument, {
        first: 50,
        skip: skip,
      });
      return smithoors as LeaderboardQuery;
    },
  });

  const ids = leaderboardEntries.data?.gotchis.map(gotchi => gotchi.id);
  const gotchis = useQuery<GotchisByIdQuery>({
    queryKey: ['gotchisById', ids],
    queryFn: async (): Promise<GotchisByIdQuery> => {
      const gotchis = await request(process.env.NEXT_PUBLIC_AAVEGOTCHI_SUBGRAPH, gotchisByIdQueryDocument, {
        ids: ids,
      });
      return gotchis as GotchisByIdQuery;
    },
  });

  useEffect(() => {
    // We consolidate data here after each change in the queriies results
    const data = leaderboardEntries.data?.gotchis.map(gotchi => {
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
      <h1>Smithoors Leaderboard</h1>
      <h3>Hello Smithoors</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Gotchi ID</th>
            <th>Name</th>
            <th>Level</th>
            <th>Points</th>
            <th>Owner</th>
          </tr>
        </thead>
        <tbody>
          {gotchiEntries.map(gotchi => (
            <tr key={gotchi.id}>
              <td>{gotchi.id}</td>
              <td>{gotchi.name}</td>
              <td>{gotchi.smithingLevel}</td>
              <td>{gotchi.skillPoints}</td>
              <td>{gotchi.owner}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {gotchiEntries.length === 50 && <button onClick={() => setSkip(skip + 50)}>Next</button>}
      {skip >= 50 && <button onClick={() => setSkip(skip - 50)}>Previous</button>}
    </>
  );
};

export default Home;
