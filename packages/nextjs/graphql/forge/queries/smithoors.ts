import { graphql } from "../__generated__";

export const leaderboardQueryDocument = graphql(/* GraphQl */ `
  query leaderboard($first: Int, $skip: Int) {
    gotchis(first: $first, skip: $skip, orderBy: skillPoints, orderDirection: desc) {
      id
      __typename
      totalItemsForged
      totalItemsSmelted
      skillPoints
      smithingLevel
      itemsForged(first: 1, orderBy: timestamp, orderDirection: desc) { timestamp }
    }
  }
`);
