import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined} from '@ant-design/icons';
import bg01 from '../image/bg01.jpg';

class Login extends React.Component {
  loginRequest = e => {
    const { login} = this.props;
    
    login({
      username: e.username,
      password: e.password
    });
  };

  componentDidUpdate(prevProps) {
    if (this.props.username != prevProps.username)
      this.props.history.push('/');
  }
  render() {
    const { loginErr, getUser } = this.props;
    console.log(localStorage.getItem("usertoken"))
    if (localStorage.getItem("usertoken")!= null) getUser();
    return (
      <div
        className="container-login100"
        style={{ backgroundImage: `url(${bg01})` }}
      >
        <div className="wrap-login100">
          <h1 className="login100-form-title">ĐĂNG NHẬP</h1>

          <Form onFinish={this.loginRequest} className="login100-form">
            <p style={{ color: '#fff' }}>{loginErr}</p>
            <Form.Item name="username"  rules= {[{ required: true, message: 'Xin hãy nhập tên đăng nhập!' }]}>
                <Input
                  prefix={
                    <UserOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>
                  }
                  placeholder="Username"
                  id="username"
                />
            </Form.Item>
            <Form.Item name="password" rules={[
                  { required: true, message: 'Xin hãy nhập mật khẩu!' }
                ]}>
                <Input
                  prefix={
                    <LockOutlined style={{ color: 'rgba(0,0,0,.25)' }}/>
                  }
                  type="password"
                  placeholder="Password"
                  id="password"
                />
            </Form.Item>
            <Form.Item name="remember">
                <Checkbox style={{ color: '#fff' }}>Nhớ mật khẩu</Checkbox>
             <Link to="/forgotpassword"><a className="login-form-forgot" href="">
                Quên mật khẩu
              </a></Link>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng nhập
              </Button>
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay!</Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login