import React from "react";
import LoginForm from "../forms/LoginForm";

const Login = ({ setUser }) => {
  return (
    <div className="login-page">
      <LoginForm setUser={setUser} />
    </div>
  );
};

export default Login;
