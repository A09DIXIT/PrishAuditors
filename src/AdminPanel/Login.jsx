// src/AdminPanel/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // prevent form refresh
    if (password === "admin123") {
      localStorage.setItem("auth", "true");
      navigate("/admin/dashboard");
    } else {
      alert("Wrong Password!");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header items-center">
          <img src="/prish.png" alt="Logo" className="logo" />
          <h2>Welcome Back!</h2>
          <p>Sign in to continue to NLP Admin.</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="remember-me">
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>

          <button type="submit">Log In</button>

          <div className="forgot-password">
            <i className="lock-icon" /> Forgot your password?
          </div>
        </form>
      </div>
    </div>
  );
}
