import React from 'react'
import LoginForm from './child/LoginForm'
import styles from './login.module.scss'

function Login () {
  return (
    <div className={styles.container}>
      <div className={styles.title}>登录页</div>
      <LoginForm></LoginForm>
    </div>
  )
}

export default Login;