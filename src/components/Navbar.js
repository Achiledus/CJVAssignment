import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from "@mui/material";
import { Link } from "react-router-dom";
import LoginPopup from "./LoginPopup";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
         
          <IconButton edge="start" color="inherit" component={Link} to="/" sx={{ mr: 2 }}>
            <img src={require("../MovieAssets/play.png")} alt="Logo" style={{ width: 40, height: 40 }} />
          </IconButton>

          
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

          
          <Button variant="contained" color="secondary" onClick={() => setIsLoginOpen(true)}>
            Sign in
          </Button>
        </Toolbar>
      </AppBar>

      <LoginPopup isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}

export default NavBar;
