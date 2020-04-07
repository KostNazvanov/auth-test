import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
} from 'antd';

import actions from '../../actions';
import { mapLoggedToProps } from '../../helpers/utils';

interface ILoginProps {
  isLoggedIn: boolean;
}

const Login = (props: ILoginProps) => {
  if (props.isLoggedIn) {
    return <Redirect to="/dashboard"/>
  }

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
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(mapLoggedToProps)(Login);
