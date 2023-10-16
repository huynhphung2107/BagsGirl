import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";

function LoginForm(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 className="title">Đăng nhập</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="Password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="link-btn" onClick={() => props.onFormSwitch('forgotPassword')}>Quên mật khẩu?</button>
                <button type="submit" className="nut">Đăng nhập</button>
                <div>
                    <button className="iconButton" onClick={() => props.onFormSwitch('login')}><GooglePlusOutlined style={{ fontSize: '40px' }} /></button>
                    <button className="iconButton" onClick={() => props.onFormSwitch('login')} style={{ marginLeft: 20 + 'px' }}><FacebookOutlined style={{ fontSize: '40px' }} /></button>
                </div>

            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Bạn không có tài khoản? Đăng ký ở đây!!!</button>
        </div>
    )
};
export default LoginForm;