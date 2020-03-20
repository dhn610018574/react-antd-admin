import React from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message } from 'antd';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

export default () => {
  let history = useHistory()
  const onFinish = values => {
    console.log('Success:', values);
    localStorage.setItem('token', values.username)
    setTimeout(() => {
      history.replace('/home')
    }, 1000)
  };

  const onFinishFailed = errorInfo => {
    const { username, password } = errorInfo.values
    if (!username || !password) {
      return
    }
    message.error('登录失败！')
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              登录
        </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
