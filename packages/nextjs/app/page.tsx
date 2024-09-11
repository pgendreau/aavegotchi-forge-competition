"use client";

import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { NextPage } from "next";
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { Loader } from "~~/components/layout/Loader";
import { Ttable } from "~~/components/layout/table/Ttable";
import { Ttd } from "~~/components/layout/table/Ttd";
import { Tth } from "~~/components/layout/table/Tth";
import { Address } from "~~/components/scaffold-eth";
import { GotchisByIdQuery } from "~~/graphql/aavegotchis/__generated__/graphql";
import { gotchisByIdQueryDocument } from "~~/graphql/aavegotchis/queries/gotchis";
import { LeaderboardQuery } from "~~/graphql/forge/__generated__/graphql";
import { leaderboardQueryDocument } from "~~/graphql/forge/queries/smithoors";
import { GotchiEntry } from "~~/types/gotchiEntry";

const Home: NextPage = () => {
  const [skip, setSkip] = useState<number>(0);
  const [gotchiEntries, setGotchiEntries] = useState<GotchiEntry[]>([]);

  const leaderboardEntries = useQuery<LeaderboardQuery>({
    queryKey: ["leaderboard", skip],
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
    queryKey: ["gotchisById", ids],
    queryFn: async (): Promise<GotchisByIdQuery> => {
      const gotchis = await request(process.env.NEXT_PUBLIC_AAVEGOTCHI_SUBGRAPH, gotchisByIdQueryDocument, {
        ids: ids,
      });
      return gotchis as GotchisByIdQuery;
    },
  });

  useEffect(() => {
    // We consolidate data here after each change in the queries resultsq
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
      {leaderboardEntries.isLoading || gotchis.isLoading ? (
        <div className="flex flex-row justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <Ttable>
            <thead className="border-2 border-frame">
              <tr>
                <Tth>Rank</Tth>
                <Tth>Id</Tth>
                <Tth>Name</Tth>
                <Tth className="hidden md:block">Level</Tth>
                <Tth>Points</Tth>
                <Tth className="hidden md:block">Owner</Tth>
              </tr>
            </thead>
            <tbody className="border-2 border-b-0 border-frame">
              {gotchiEntries.map((gotchi, index) => (
                <tr key={gotchi.id} className="border-y border-y-slate-700">
                  <Ttd>{skip + index + 1}</Ttd>
                  <Ttd>{gotchi.id}</Ttd>
                  <Ttd>{gotchi.name}</Ttd>
                  <Ttd className="hidden md:block">{gotchi.smithingLevel}</Ttd>
                  <Ttd>{gotchi.skillPoints}</Ttd>
                  <Ttd className="hidden md:block">
                    <Address address={gotchi.owner} format="short" size="xl"></Address>
                  </Ttd>
                </tr>
              ))}
            </tbody>
          </Ttable>
          <div className="grid grid-cols-12">
            <div className="border-t-2 border-frame" />
            <div className="col-span-10 border-2 border-t-0 border-frame">
              <div className="flex flex-row py-4 justify-center">
                {skip >= 50 && (
                  <button onClick={() => setSkip(0)} className="mybtn mybtn-border">
                    <div className="flex flex-row items-center gap-x-1">
                      <ChevronDoubleLeftIcon className="h-5 w-5" />
                      <span>First</span>
                    </div>
                  </button>
                )}
                {skip >= 50 && (
                  <button onClick={() => setSkip(skip - 50)} className="mybtn mybtn-border">
                    <div className="flex flex-row items-center gap-x-1">
                      <ChevronLeftIcon className="h-5 w-5" />
                      <span>Previous</span>
                    </div>
                  </button>
                )}
                {gotchiEntries.length === 50 && (
                  <button onClick={() => setSkip(skip + 50)} className="mybtn mybtn-border">
                    <div className="flex flex-row items-center gap-x-1">
                      <span>Next</span>
                      <ChevronRightIcon className="h-5 w-5" />
                    </div>
                  </button>
                )}
              </div>
            </div>
            <div className="border-t-2 border-frame" />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
