import React from 'react';
import { Form, Input, Button } from 'antd';
import actions from "../../actions";

interface ILoginState {
  email: string,
  password: string,
}

// interface ValidateErrorEntity {
//   code: string,
//   message: string,
// }

class Login extends React.Component<{}, ILoginState> {
  private layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 18 },
  };

  private tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  render = () => {
    return (
      <Form
        {...this.layout}
        onFinish={(values) => actions.login(values)}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item {...this.tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;
