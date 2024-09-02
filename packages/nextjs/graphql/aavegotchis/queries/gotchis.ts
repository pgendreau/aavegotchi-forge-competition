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
