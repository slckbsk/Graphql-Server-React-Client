import mongoose from "mongoose";

export const Mutation = {
  createUser: async (_, { data }, { pubSub, _db }) => {
    const newUser = new _db.User({
      ...data,
    });

    const user_Created = await newUser.save();
    pubSub.publish("userCreated", { userCreated: user_Created });
    return user_Created;
  },

  updateUser: async (_, { id, data }, { pubSub, _db }) => {
    const is_user_index = await _db.User.findById(id);

    if (!is_user_index) {
      throw new Error("KULLANICI ID BULUNAMADI !!");
    }

    const user_Updated = await _db.User.findByIdAndUpdate(id, data, {
      new: true,
    });

    pubSub.publish("userUpdated", { userUpdated: user_Updated });
    return user_Updated;
  },

  deleteUser: async (_, { id }, { pubSub, _db }) => {
    const is_user_index = await _db.User.findById(id);

    if (!is_user_index) {
      throw new Error("KULLANICI ID BULUNAMADI !!");
    }

    const user_Deleted = await _db.User.findByIdAndDelete(id);

    pubSub.publish("userDeleted", { userDeleted: user_Deleted });
    return user_Deleted;
  },

  deleteAllUsers: async (_, __, { _db }) => {
    const delete_users = await _db.User.deleteMany({});
    return { count: delete_users.deletedCount };
  },

  createPost: async (_, { data }, { pubSub, _db }) => {
    const newPost = new _db.Post({
      ...data,
    });

    const post_Created = await newPost.save();
    const user = await _db.User.findById(mongoose.Types.ObjectId(data.user));

    user.posts.push(post_Created.id);
    await user.save();

    const postCount = await _db.Post.countDocuments();

    pubSub.publish("postCreated", { postCreated: post_Created });
    pubSub.publish("postCount", { postCount });
    return post_Created;
  },

  updatePost: async (_, { id, data }, { pubSub, _db }) => {
    const is_post_index = await _db.Post.findById(id);

    if (!is_post_index) {
      throw new Error("POST ID BULUNAMADI !!");
    }

    const post_Updated = await _db.Post.findByIdAndUpdate(id, data, {
      new: true,
    });

    pubSub.publish("postUpdated", { postUpdated: post_Updated });
    return post_Updated;
  },

  deletePost: async (_, { id }, { pubSub, _db }) => {
    const is_post_index = await _db.Post.findById(id);

    if (!is_post_index) {
      throw new Error("POST ID BULUNAMADI !!");
    }

    const post_Deleted = await _db.Post.findByIdAndDelete(id);
    const postCount = await _db.Post.countDocuments();

    pubSub.publish("postDeleted", { postDeleted: post_Deleted });
    pubSub.publish("postCount", { postCount });

    return post_Deleted;
  },

  deleteAllPosts: async (_, __, { pubSub, _db }) => {
    const delete_posts = await _db.Post.deleteMany({});
    pubSub.publish("postCount", { postCount: 0});
    return { count: delete_posts.deletedCount };
  },

  createComment: async (_, { data }, { pubSub, _db }) => {
    const newComment = new _db.Comment({
      ...data,
    });

    const comment_Created = await newComment.save();

    const post = await _db.Post.findById(mongoose.Types.ObjectId(data.post));
    const user = await _db.User.findById(mongoose.Types.ObjectId(data.user));

    user.comments.push(comment_Created.id);
    post.comments.push(comment_Created.id);

    await user.save();
    await post.save();

    pubSub.publish("commentCreated", { commentCreated : comment_Created});
    return comment_Created;
  },

  updateComment: async (_, { id, data }, { pubSub, _db }) => {
    const is_comment_index = await _db.Comment.findById(id);

    if (!is_comment_index) {
      throw new Error("COMMENT ID BULUNAMADI !!");
    }

    const comment_Updated = await _db.Comment.findByIdAndUpdate(id, data, {
      new: true,
    });

    pubSub.publish("commentUpdated", { commentUpdated : comment_Updated });
    return comment_Updated;
  },

  deleteComment: async (_, { id }, { pubSub, _db }) => {
    const is_comment_index = await _db.Comment.findById(id);

    if (!is_comment_index) {
      throw new Error("COMMENT ID BULUNAMADI !!");
    }

    const comment_Deleted = await _db.Comment.findByIdAndDelete(id);

    pubSub.publish("commentDeleted", { commentDeleted : comment_Deleted });
    return comment_Deleted;
  },

  deleteAllComments: async (_, __, { _db }) => {
    const delete_comments = await _db.Comment.deleteMany({});
    return { count: delete_comments.deletedCount };
  },
};
