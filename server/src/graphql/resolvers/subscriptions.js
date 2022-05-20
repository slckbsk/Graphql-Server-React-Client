import pubSub from "../../pubsub";
import { withFilter } from "graphql-subscriptions";

export const Subscription = {
  userCreated: {
    subscribe: () => pubSub.asyncIterator("userCreated"),
  },
  userUpdated: {
    subscribe: () => pubSub.asyncIterator("userUpdated"),
  },
  userDeleted: {
    subscribe: () => pubSub.asyncIterator("userDeleted"),
  },

  postCreated: {
    subscribe: withFilter(
      () => pubSub.asyncIterator("postCreated"),
      (payload, variables) => {
        return variables.user_id
          ? payload.postCreated.user === variables.user_id
          : true;
      }
    ),
  },

  postUpdated: {
    subscribe: () => pubSub.asyncIterator("postUpdated"),
  },
  postDeleted: {
    subscribe: () => pubSub.asyncIterator("postDeleted"),
  },

  postCount: {
    subscribe: async (_, __, { _db }) => {
      const postCount = await _db.Post.countDocuments();

      setTimeout(() => {
        pubSub.publish("postCount", { postCount: postCount });
      });

      return pubSub.asyncIterator("postCount");
    },
  },

  commentCreated: {
    subscribe: withFilter(
      () => pubSub.asyncIterator("commentCreated"),
      (payload, variables) => {
        return variables.post_id
          ? payload.commentCreated.post === variables.post_id
          : true;
      }
    ),
  },
  commentUpdated: {
    subscribe: () => pubSub.asyncIterator("commentUpdated"),
  },
  commentDeleted: {
    subscribe: () => pubSub.asyncIterator("commentDeleted"),
  },
};
