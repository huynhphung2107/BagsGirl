import { FacebookOutlined, GooglePlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import styles from '../../indexLogin.module.scss';
import { Link } from 'react-router-dom';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.authFormContainer}>
      <h2 className={styles.title}>Đăng nhập</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="Email">
          Email
        </label>
        <input
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label className={styles.label} htmlFor="Password">
          Password
        </label>
        <input
          className={styles.input}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button className={styles.linkBtn} onClick={() => props.onFormSwitch('forgotPassword')}>
          Quên mật khẩu?
        </button>
        <button className={styles.button} type="submit">
          Đăng nhập
        </button>
        <div>
          <a className={styles.iconButton} onClick={() => props.onFormSwitch('login')}>
            {/* <GooglePlusOutlined style={{ fontSize: '40px', background: 'red' }} /> */}
            <Link to={'/'}>
              <img
                src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
                style={{ width: '40px', margin: '10px' }}
              ></img>
            </Link>
          </a>
          <a
            href="https://facebook.com/huynhphung2107"
            className={styles.iconButton}
            onClick={() => props.onFormSwitch('login')}
            style={{ marginLeft: 20 + 'px' }}
          >
            <Link to={'/'}>
              <img
                src="https://i.pinimg.com/236x/25/ea/59/25ea5941311b06c6cec08f99bf5d72a5.jpg"
                style={{ width: '40px', margin: '10px' }}
              ></img>
            </Link>
          </a>
        </div>
      </form>
      <button className={styles.linkBtn} onClick={() => props.onFormSwitch('register')}>
        Bạn không có tài khoản? Đăng ký ở đây!!!
      </button>
    </div>
  );
}
export default LoginForm;
