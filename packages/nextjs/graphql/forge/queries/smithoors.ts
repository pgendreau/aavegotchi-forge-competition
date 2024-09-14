import { graphql } from "../__generated__";

// We need to remove gotchi id 18760 by hand because it's kinda burn gotchi address, owner is 0x000000000000000000 and it has no name....

export const leaderboardQueryDocument = graphql(/* GraphQl */ `
  query leaderboard($first: Int, $skip: Int) {
    gotchis(first: $first, skip: $skip, orderBy: skillPoints, orderDirection: desc, where: { id_not_in: [18760, 15099, 11339] }) {
      id
      __typename
      totalItemsForged
      totalItemsSmelted
      skillPoints
      smithingLevel
      itemsForged(first: 1, orderBy: timestamp, orderDirection: desc) {
        timestamp
      }
    }
  }
`);

export const leaderboardQueryByBlockDocument = graphql(/* GraphQl */ `
  query leaderboardByBlock($first: Int, $skip: Int, $block: Int) {
    gotchis(
      first: $first
      skip: $skip
      orderBy: skillPoints
      orderDirection: desc
      block: { number: $block }
      where: { id_not_in: [18760, 15099, 11339] }
    ) {
      id
      __typename
      totalItemsForged
      totalItemsSmelted
      skillPoints
      smithingLevel
      itemsForged(first: 1, orderBy: timestamp, orderDirection: desc) {
        timestamp
      }
    }
  }
`);
