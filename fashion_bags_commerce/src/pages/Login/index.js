import React from 'react';
import '../Login/index.css';
import { Button, Checkbox, Form, Input } from 'antd';
import NoticeHeader from '../Home/Header/NoticeHeader';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => <div></div>;
export default Login;
