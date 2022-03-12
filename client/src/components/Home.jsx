import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Login() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome back!</h1>
      <form action="">
        <input placeholder="Email" type="email" /*required*/ />
        <input placeholder="Password" type="password" /*required*/ />
        <button>Login</button>
      </form>

      <button
        className="link-tag"
        onClick={() => {
          navigate("/create");
        }}
      >
        {"Create an Account"}
      </button>
    </div>
  );
}

export default Login;
