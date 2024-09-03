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

export const leaderboardQueryByBlockDocument = graphql(/* GraphQl */ `
  query leaderboardByBlock($first: Int, $skip: Int, $block: Int) {
    gotchis(first: $first, skip: $skip, orderBy: skillPoints, orderDirection: desc, block: { number: $block }) {
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