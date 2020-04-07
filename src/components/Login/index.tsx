import React from 'react';
import { Form, Input, Button } from 'antd';
import { signIn, signUp } from "../../helpers/firebase";

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

  onFinish = async (email: string, password: string) => {
    try {
      this.setState({ email, password });
      const user = await signIn(email, password);
      console.log(user);
    } catch (error) {
      console.error(error);
      if (error.code === 'auth/user-not-found') {
        const { email, password } = this.state;
        const user = await signUp(email, password);
        console.log(user);
      }
    }
  };

  render = () => {
    return (
      <Form
        {...this.layout}
        onFinish={(values) => this.onFinish(values.email, values.password)}
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
