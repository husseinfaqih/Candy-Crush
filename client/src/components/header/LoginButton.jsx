import React from "react";
import { Link } from "react-router-dom";

function LoginButton() {
  return (
    <Link to="login" className="header-login-button">
      <div className="header-login-button-text">Login</div>
    </Link>
  );
}

export default LoginButton;
