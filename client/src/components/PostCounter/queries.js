import { gql } from "@apollo/client";


export const POST_COUNT_SUBSCRIPTION = gql`
subscription {
    postCount
  }
`;