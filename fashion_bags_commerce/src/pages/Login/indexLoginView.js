import React, { useState } from "react";
import './indexLogin.css';
import FormLogin from "./FormLogin/FormLogin/LoginForm";
import FormRegister from "./FormLogin/FormRegister/RegisterForm";
import ForgotPassword from "./FormLogin/FormForgotPassword/FormForgotPassword";


function Login() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };

    if (currentForm === 'login') {
        return (
            <div className="formLoginne" >
                <FormLogin onFormSwitch={toggleForm} />
            </div>
        );
    } else if (currentForm === "register") {
        return (
            <div className="formLoginne">
                <FormRegister onFormSwitch={toggleForm} />
            </div>
        );
    } else if (currentForm === "forgotPassword") {
        return (
            <div className="formLoginne">
                <ForgotPassword onFormSwitch={toggleForm} />
            </div>
        );
    } else {
        return (
            <div className="formLoginne">
                <FormLogin onFormSwitch={toggleForm} />
            </div>
        );
    }
}
export default Login;