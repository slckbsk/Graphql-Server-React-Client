import { gql } from "@apollo/client";

export const GET_POST = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      description
      cover
    }
  }
`;

const commentFragment = gql`
  fragment CommentFragment on Comment {
    id
    text
    user {
      fullName
      profile_photo
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getComments($id: ID!) {
    post(id: $id) {
      comments {
        ...CommentFragment
      }
    }
  }
  ${commentFragment}
`;

export const COMMENTS_SUBSCRIPTIONS = gql`
  subscription CommentCreated($post_id: ID) {
    commentCreated(post_id: $post_id) {
      ...CommentFragment
    }
  }
  ${commentFragment}
`;

export const GET_ALL_USERS = gql`
  query getAllUser {
    users {
      id
      fullName
    }
  }
`;

export const NEW_COMMENT_MUTATION = gql`
  mutation addNewComment($data: CreateCommentInput!) {
    createComment(data: $data) {
      id
    }
  }
`;
