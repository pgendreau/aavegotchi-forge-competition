import { graphql } from "../__generated__";

export const gotchisByIdQueryDocument = graphql(/* GraphQl */ `
  query gotchisById($ids: [ID!]) {
    aavegotchis(where: { id_in: $ids }) {
      id
      name
      owner {
        id
      }
      originalOwner {
        id
      }
    }
  }
`);

export const gotchisByIdAndBlockQueryDocument = graphql(/* GraphQl */ `
  query gotchisByIdAndBlock($ids: [ID!], $block: Int) {
    aavegotchis(where: { id_in: $ids }, block: { number: $block }) {
      id
      name
      owner {
        id
      }
      originalOwner {
        id
      }
    }
  }
`);
