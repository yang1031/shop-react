import React, { useCallback } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import styles from '../login.module.scss'

const NormalLoginForm = ({ form }) => {
  const { getFieldDecorator } = form;

  const validateMobile = (rule, value, callback) => {
    let mobileRegex = /^[1]([3-9])[0-9]{9}$/;
    const mobile = +value;
    if (!value||mobileRegex.test(mobile)) {
      callback()
    } else {
      callback('请输入正确的手机号');
    }
  };

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      console.log(err)
      if (!err) {
        console.log('Received values of form: ', values);
      }
    })
  }, [form]);
  return (
    <Form onSubmit={(e) => handleSubmit(e)} className="login-form">
      <Form.Item>
        {getFieldDecorator('Username', {
          rules: [{ required: true, message: '请输入用户名!' },
            {validator: validateMobile}],
        })(
          <Input
            prefix={<Icon type="user" className="icon" />}
            placeholder="用户名"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('Password', {
          rules: [{ required: true, message: '请输入验证码!' }],
        })(
          <Input
            prefix={<Icon type="lock" className="icon" />}
            type="number"
            placeholder="填写6位短信验证码"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(<Checkbox>记住密码</Checkbox>)}
        <div>
          <Button type="primary" htmlType="submit" size="large" block>登录</Button>
        </div>
        <div className={styles.loginFormOperate}>
          <a>忘记密码</a> | <Link to="/register">注册</Link>
        </div>
      </Form.Item>
    </Form>
  )
}

const WrappedNormalLoginForm = Form.create({name: 'normal_login'})(NormalLoginForm);
export default WrappedNormalLoginForm;
