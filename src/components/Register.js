import React from 'react';
import ReCAPTCHA from 'react-grecaptcha';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Modal } from 'antd';
import * as callApi from '../utils/apiCaller';
import bg01 from '../image/bg01.jpg';

const callback = function() {};
const expiredCallback = function() {};
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  registerRequest = e => {
    const user = {
      username: e.username,
      password: e.password,
      email: e.email,
      fullName: e.fullName,
      phoneNumber: e.phoneNumber
    };
    if (user.username && user.password && user.email) {
      return callApi
        .callApiRegister(user)
        .then((res) => {
            console.log(res)
          this.success();
        })
        .catch(err => {
          document.getElementById('msg').innerHTML = err.response.data.message;
        });
    }
    document.getElementById('msg').innerHTML = 'Xin hãy điền đầy đủ thông tin';
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };


  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  changeDirect() {
    console.log(this.props);
    this.props.history.push('/login');
  }

  success() {
    Modal.success({
      title: 'Tạo tài khoản thành công',
      content: 'Nhấn OK để đăng nhập',
      onOk: () => {
        this.changeDirect();
      }
    });
  }

  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 17 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <div
        className="container-login100"
        style={{ backgroundImage: `url(${bg01})` }}
      >
        <Modal
          title="Notification"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <div className="wrap-register100">
          <h1 className="login100-form-title">ĐĂNG KÝ</h1>
          <div className="register100-form">
            <Form  {...formItemLayout} onFinish={this.registerRequest}>
              <p id="msg" style={{ color: 'red' }} />
              <Form.Item name="username" label="Tên đăng nhập" rules={[
                    { required: true, message: 'Xin hãy nhập tên đăng nhập!' }
                  ]}>
                      <Input id="username" />
              </Form.Item>
              <Form.Item name="password" label="Mật khẩu" hasFeedback rules={[
                    {
                      required: true,
                      message: 'Xin hãy nhập mật khẩu!'
                    }
                  ]}>
                <Input.Password id="password" />
              </Form.Item>
              <Form.Item name="confirm" label="Xác nhận mật khẩu" dependencies={['password']} hasFeedback rules={[
                    {
                      required: true,
                      message: 'Xin hãy xác nhận mật khẩu!'
                    },
                    ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
            
                          return Promise.reject('Hai mật khẩu bạn nhập không khớp!');
                        },
                      })
                  ]}>
               <Input.Password onBlur={this.handleConfirmBlur} />
              </Form.Item>
              <Form.Item name="email" label="E-mail" rules={[
                    {
                      type: 'email',
                      message: 'Email không hợp lệ!'
                    },
                    {
                      required: true,
                      message: 'Xin hãy nhập email!'
                    }
                  ]}>
                <Input id="email" />
              </Form.Item>
              <Form.Item label="Họ tên" name="fullName" rules={[
                    {
                      required: true,
                      message: 'Xin hãy nhập họ tên!'
                    }
                  ]}>
               <Input id="fullName" />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="phoneNumber" rules={[
                    {
                      required: true,
                      message: 'Xin hãy nhập số điện thoại!'
                    }
                  ]}>
                <Input id="phoneNumber" />
              </Form.Item>
              <Form.Item
                label="Captcha"
                extra="We must make sure that your are a human."
              >
                <ReCAPTCHA
                  sitekey="6LfTGb8UAAAAAILweMXMF6yf4GmBzeP9j-omzJh5"
                  callback={callback}
                  expiredCallback={expiredCallback}
                  locale="en"
                />
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register