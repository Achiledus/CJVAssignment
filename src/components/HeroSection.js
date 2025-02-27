import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; 
import HeroBackground from "../MovieAssets/Herosection.png";


const HeroSection = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${HeroBackground})` }}
    >
      <div className="hero-content">
      {children} 
      <div className="stressed">
      <h2 >Welcome to Your Movie Universe</h2>
      <p>Discover your favorite movies, TV shows, and more.</p>
      <button onClick={() => navigate("/movies")} className="hero-button">
            Explore Now
          </button>
      </div>
      
      </div>
    </div>
  );
}

export default HeroSection;
