import React, { useState } from "react";

function ForgotPassword(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [sdt, setSdt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2 className="title">Quên mật khẩu</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="name">Số điện thoại</label>
                <input value={sdt} name="soDienThoai" onChange={(e) => setSdt(e.target.value)} id="soDienThoai" placeholder="(+84):)" />
                <br></br>
                <br></br>
                <button type="submit" className="nut">Quên mật khẩu</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Bạn đã có tài khoản? Đăng nhập ở đây!!!</button>
        </div>
    )
};
export default ForgotPassword;