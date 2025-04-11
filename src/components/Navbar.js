import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";

function NavBar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/* Logo */}
          <IconButton
            edge="start"
            color="inherit"
            component={Link}
            to="/"
            sx={{ mr: 2 }}
          >
            <img
              src={require("../MovieAssets/play.png")}
              alt="Logo"
              style={{ width: 40, height: 40 }}
            />
          </IconButton>

          {/* Navigation */}
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/movies">
              Movies
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Box>

          {/* Login or User Info */}
          {user ? (
            <>
              <Typography sx={{ color: "white", mr: 2 }}>
                Welcome, {user.firstName}
              </Typography>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setIsLoginOpen(true)}
            >
              Sign in
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <LoginPopup
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        setUser={setUser} 
      />
    </>
  );
}

export default NavBar;
