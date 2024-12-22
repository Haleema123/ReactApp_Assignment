import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./login.css"; // Optional styling

const Login = ({ setUser, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful!");
      setUser(userCredential.user); // Update the state in App.js
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <button onClick={handleLogin} className="form-button">
          Login
        </button>
        {message && <p className="form-message">{message}</p>}
        <p className="signup-option">
          Don't have an account?{" "}
          <span onClick={() => setIsLogin(false)} className="signup-link">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
