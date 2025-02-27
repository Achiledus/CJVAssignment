import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; 

function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <p>Copyright 2025. Logo</p>
        <div>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
