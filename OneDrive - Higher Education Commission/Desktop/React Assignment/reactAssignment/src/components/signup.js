import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import "./signup.css"; // Import styling

const SignUp = ({ setUser, setIsLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Signup successful!");
      setUser(userCredential.user); // Update the state in App.js
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
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
        <button onClick={handleSignUp} className="form-button">
          Sign Up
        </button>
        {message && <p className="form-message">{message}</p>}
        <p className="login-option">
          Already have an account?{" "}
          <span onClick={() => setIsLogin(true)} className="login-link">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;


