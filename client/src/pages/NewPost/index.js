import React from "react";
import { Typography } from "antd";
import NewPostForm from "./newPostForm";
const { Title } = Typography;

function NewPost() {
  return (
    <div>
      <Typography>
        <Title level={3}>NEW POST</Title>
        <NewPostForm />
      </Typography>
    </div>
  );
}

export default NewPost;
