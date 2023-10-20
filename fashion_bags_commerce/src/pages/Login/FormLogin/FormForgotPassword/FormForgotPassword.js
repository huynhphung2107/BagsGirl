import React, { useState } from "react";
import styles from '../../indexLogin.module.scss';

function ForgotPassword(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [sdt, setSdt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className={styles.authFormContainer}>
            <h2 className={styles.title}>Quên mật khẩu</h2>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label className={styles.label} htmlFor="password">Password</label>
                <input className={styles.input} value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label className={styles.label} htmlFor="name">Số điện thoại</label>
                <input className={styles.input} value={sdt} name="soDienThoai" onChange={(e) => setSdt(e.target.value)} id="soDienThoai" placeholder="(+84):)" />
                <br></br>
                <br></br>
                <button className={styles.button} type="submit">Quên mật khẩu</button>
            </form>
            <button className={styles.linkBtn} onClick={() => props.onFormSwitch('login')}>Bạn đã có tài khoản? Đăng nhập ở đây!!!</button>
        </div>
    )
};
export default ForgotPassword;