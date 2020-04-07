import React from 'react';
import { Form, Input, Button } from 'antd';

import actions from '../../actions';

interface ILoginState {
  email: string;
  password: string;
}

class Login extends React.Component<{}, ILoginState> {
  render = () => {
    return (
      <Form
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;
