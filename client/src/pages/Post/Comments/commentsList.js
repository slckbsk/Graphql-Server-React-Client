import { Divider, Button } from "antd";
import { useLazyQuery } from "@apollo/client";
import { GET_POST_COMMENTS, COMMENTS_SUBSCRIPTIONS } from "../queries";
import { Comment, List } from "antd";
import { useState, useEffect } from "react";
import NewCommentForm from "./newCommentForm";


function CommentsList({ post_id }) {
  const [btnIsVisible, setbtnIsVisible] = useState(true);

  const [loadComments, { called, loading, data, subscribeToMore }] =
    useLazyQuery(GET_POST_COMMENTS, {
      variables: {
        id: post_id,
      },
    });

  useEffect(() => {
    if (!loading && called) {
      subscribeToMore({
        document: COMMENTS_SUBSCRIPTIONS,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          const newCommentItem = subscriptionData.data.commentCreated;
          return {
            post: {
              ...prev.post,
              comments:  [...prev.post.comments, newCommentItem ],
            },
          };
        },
      });
    }
  }, [loading, called, subscribeToMore]);

  useEffect(() => {
    if (!loading && data) {
      setbtnIsVisible(false);
    }
  }, [loading, data]);

  return (
    <div>
      <Divider orientation="center">
        <Button loading={loading} onClick={() => loadComments()}>
          Show Comments
        </Button>
      </Divider>

      {!loading && data && (
        <div>
          <List
            className="comment-list"
            itemLayout="horizontal"
            dataSource={data.post.comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.user.fullName}
                  avatar={item.user.profile_photo}
                  content={item.text}
                />
              </li>
            )}
          />

       <Divider orientation="center">
          New Comments
      </Divider>

         <NewCommentForm  post_id={post_id}/>         
        </div>

      )}
    </div>
  );
}

export default CommentsList;
