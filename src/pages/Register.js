import React, { useState } from "react";
import "../styles.css"; // Import global styles
import Background from "../MovieAssets/Drawn_Background.png"; // Background Image

function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Registration successful!");
  };

  return (
    <div className="register-page" style={{ backgroundImage: `url(${Background})` }}>
      <div className="register-container">
        <h2 className="register-title">REGISTRATION</h2>

        <form onSubmit={handleSubmit} className="register-form">
          <div className="name-fields">
            <input type="text" name="firstName" placeholder="First name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Last name" onChange={handleChange} required />
          </div>
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />

          <button type="submit" className="register-button">Register</button>

          <div className="terms">
            <input type="checkbox" name="agreedToTerms" onChange={handleChange} required />
            <p>
              By clicking the checkbox, you agree to Sensei’s <a href="#">Terms of Service Agreement</a> and <a href="#">Privacy Policy</a>.
            </p>
          </div>

          <div className="social-buttons">
            <button className="google-button">Google</button>
            <button className="facebook-button">Facebook</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
