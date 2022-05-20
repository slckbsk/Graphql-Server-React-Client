import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query getAllUser {
    users {
      id
      fullName
    }
  }
`;

export const NEW_POST_MUTATION = gql`
  mutation addNewPost($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
      description
      user {
        profile_photo
      }
    }
  }
`;
