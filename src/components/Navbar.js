import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup"; 
import "../styles.css"; 

function NavBar() {
  const [showActors, setShowActors] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={require("../MovieAssets/play.png")} alt="Logo" />
        </Link>
      </div>
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li 
          className="dropdown"
          onMouseEnter={() => setShowActors(true)}
          onMouseLeave={() => setShowActors(false)}
        >
          <span>Actor Spotlight ▼</span>
          {showActors && (
            <div className="dropdown-menu">
              <div className="actor-images">
                <img src={require("../MovieAssets/actors/actor1.png")} alt="Actor 1" />
                <img src={require("../MovieAssets/actors/actor2.png")} alt="Actor 2" />
                <img src={require("../MovieAssets/actors/actor3.png")} alt="Actor 3" />
                <img src={require("../MovieAssets/actors/actor4.png")} alt="Actor 4" />
                <img src={require("../MovieAssets/actors/actor5.png")} alt="Actor 5" />
                <img src={require("../MovieAssets/actors/actor6.png")} alt="Actor 6" />
              </div>
              <Link to="/movies" className="view-all">View All Movies</Link>
            </div>
          )}
        </li>
        <li><button onClick={() => setIsLoginOpen(true)} className="sign-in-btn">Sign in</button></li>
        </ul>
      </nav>

      {/* Login Popup */}
      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default NavBar;
