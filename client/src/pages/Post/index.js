import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POST } from "./queries";
import Loading from "components/loading";
import { Typography, Image } from "antd";
import Styles from "./styles.module.css";
import CommentsList from "./Comments/commentsList";

const { Title, Paragraph } = Typography;

function Post() {

  const { id } = useParams();
 

  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      id
    },
  });

  if (loading) return <Loading />;
  if (error) return <div> Error!: {error.message} </div>;

  
  const { post } = data;

  return (
    <div className={Styles.content}>
      <Typography>
        <Title className={Styles.title}>{post.title}</Title>
        <Image width={400} src={post.cover} />
        <Paragraph className={Styles.description}>{post.description}</Paragraph>
      </Typography>
      <CommentsList post_id={id} />
    </div>
  );
}

export default Post;
