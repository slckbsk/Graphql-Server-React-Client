import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_USERS, NEW_COMMENT_MUTATION } from "../queries";
import { Select, Form, Input, Button, message } from "antd";
import Style from "./styles.module.css";

const { Option } = Select;

function NewCommentForm({ post_id }) {
  const [form] = Form.useForm();

  const [saveComment, { loading }] = useMutation(NEW_COMMENT_MUTATION);

  const { loading: users_loding, data: users_data } = useQuery(GET_ALL_USERS);

  const handleSubmit = async (values) => {
    try {
      await saveComment({
        variables: { data: { ...values, post: post_id } },
      });
      success();
    } catch (error) {
      error_ant();
    }
  };

  const success = () => {
    message.success("Comment Saved", 6);
    form.resetFields();
  };

  const error_ant = () => {
    message.error("Something Wrong", 10);
  };

  return (
    <div>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="on"
      >
        <Form.Item
          name="text"
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input disabled={loading} size="medium" placeholder="Message" />
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
            Add Comment
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewCommentForm;
