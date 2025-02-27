import React from "react";

function LoginPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

 
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Log In</h2>
        <p>Sign in to your account</p>
        <input type="email" placeholder="Enter your username or email" />
        <input type="password" placeholder="Enter your password" />
        <p><a href="#">Reset Password</a></p>
        <button>Log In</button>
        <p>Don't have an account? <a href="/register">Register here</a></p>
        <button className="close-btn" onClick={onClose}>✖</button>
      </div>
    </div>
  );
}

export default LoginPopup;
