import React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import styles from './register.module.scss';

class Register extends React.Component {
  validateMobile = (rule, value, callback) => {
    let mobileRegex = /^[1]([3-9])[0-9]{9}$/;
    const mobile = +value;
    if (!value||mobileRegex.test(mobile)) {
      callback()
    } else {
      callback('请输入正确的手机号');
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(err)
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.container}>
        <div className={styles.title}>注册页</div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('Username', {
              rules: [{ required: true, message: '请输入用户名!' },
                {validator: this.validateMobile}],
            })(
              <Input
                prefix={<Icon type="user" className="icon" />}
                placeholder="今后使用手机号登录"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('Password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input
                prefix={<Icon type="lock" className="icon" />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <div>
              <Button type="primary" htmlType="submit" size="large" block>注册</Button>
            </div>
            <div>
              <Button size="large" block onClick={()=>{this.props.history.push('/login')}}>返回登录</Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

Register = Form.create()(Register);
export default Register
