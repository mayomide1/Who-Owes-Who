import React, { useState } from "react";
import { user } from "./server";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErroMsg] = useState("");
  const navigate = useNavigate();

  function login() {
    const foundUser = user.find(
      (u) => u.email === email && u.password === password,
    );

    if (email === "" || password === "") {
      setErroMsg("Enter your email address and password");
    } else if (foundUser) {
      localStorage.setItem("active_user", JSON.stringify(foundUser));
      navigate("/dashboard");
      return foundUser;
    } else {
      setErroMsg("Invalid login credentials");
      return null;
    }
  }

  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <h3 className="welcome">Welcome back</h3>
        <p className="continue">Login to continue to your account.</p>
        <p className="error-msg">{errorMsg}</p>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          required
        />

        <p className="forgotten-password">Forgotten Password?</p>

        <button onClick={login}>Login</button>
        <p className="sign-up">
          Don't have an account? <span>Sign up</span>
        </p>
      </div>
    </>
  );
};

export default Login;
