import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_USERS, NEW_POST_MUTATION } from "./queries";
import { Select, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import Style from "./styles.module.css";

const { Option } = Select;

function NewPostForm() {
  const navigate = useNavigate();

  const [savePost, { loading }] = useMutation(NEW_POST_MUTATION);

  const { loading: users_loding, data: users_data } = useQuery(GET_ALL_USERS);

  const handleSubmit = (values) => {
    try {
      savePost({
        variables: { data: values },
      });
      success();
    } catch (error) {
      error_ant();
    }
  };

  const success = () => {
    message.success("Data Saved", 6);
    navigate("/");
  };

  const error_ant = () => {
    message.error("Something Wrong", 10);
  };

  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="on"
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input disabled={loading} size="medium" placeholder="Title" />
        </Form.Item>

        <Form.Item
          name="description"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
        >
          <Input.TextArea
            disabled={loading}
            size="medium"
            placeholder="Description"
          />
        </Form.Item>

        <Form.Item
          name="cover"
          rules={[{ required: true, message: "Please input your cover url!" }]}
        >
          <Input
            disabled={loading}
            size="medium"
            placeholder="Cover photo link"
          />
        </Form.Item>

        <Form.Item
          name="user"
          rules={[{ required: true, message: "Please select users!" }]}
        >
          <Select
            disabled={users_loding || loading}
            loading={users_loding}
            placeholder="Select your user"
          >
            {users_data &&
              users_data.users.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.fullName}
                </Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item className={Style.button}>
          <Button loading={loading} type="primary" htmlType="submit">
            Add Post
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewPostForm;
