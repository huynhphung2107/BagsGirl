import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from '../../indexLogin.module.scss';

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className={styles.authFormContainer}>
            <h2 className={styles.title}>Đăng nhập</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="Email">Email</label>
                <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className={styles.label} htmlFor="Password">Password</label>
                <input className={styles.input} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className={styles.linkBtn} onClick={() => props.onFormSwitch('forgotPassword')}>Quên mật khẩu?</button>
                <button className={styles.button} type="submit">Đăng nhập</button>
                <div>
                    <button className={styles.iconButton} onClick={() => props.onFormSwitch('login')}><GooglePlusOutlined style={{ fontSize: '40px' }} /></button>
                    <button className={styles.iconButton} onClick={() => props.onFormSwitch('login')} style={{ marginLeft: 20 + 'px' }}><FacebookOutlined style={{ fontSize: '40px' }} /></button>
                </div>

            </form>
            <button className={styles.linkBtn} onClick={() => props.onFormSwitch('register')}>Bạn không có tài khoản? Đăng ký ở đây!!!</button>
        </div>
    )
};
export default LoginForm;