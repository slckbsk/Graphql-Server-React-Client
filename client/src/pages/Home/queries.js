import { gql } from "@apollo/client";

const postFragment = gql`
  fragment PostFragment on Post {
    id
    title
    description
    user {
      id
      profile_photo
    }
  }
`;

export const GET_POSTS = gql`
  query getAllPost {
    posts {
      ...PostFragment
    }
  }
  ${postFragment}
`;

export const POSTS_SUBSCRIPTION = gql`
  subscription {
    postCreated {
      ...PostFragment
    }
  }
  ${postFragment}
`;

