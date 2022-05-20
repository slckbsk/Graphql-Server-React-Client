import React from "react";
import { Badge, Avatar } from "antd";
import styles from "./styles.module.css";
import { POST_COUNT_SUBSCRIPTION } from "./queries";
import { useSubscription } from "@apollo/client";

function Counter() {
  const { loading, data } = useSubscription(POST_COUNT_SUBSCRIPTION);

  return (
    <div className={styles.state}>
      <Badge count={loading ? "?" : data.postCount}>
        <Avatar shape="square" size="large">
          <span className={styles.counterTitle}>posts </span>
        </Avatar>
      </Badge>
    </div>
  );
}

export default Counter;
