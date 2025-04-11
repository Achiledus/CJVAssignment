import React from "react";
import axios from "axios";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";




function LoginPopup({ isOpen, onClose, setUser }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    axios
    .post("https://cjvbackend.onrender.com/api/users/login", {
      email,
      password,
    })
    .then((response) => {
      alert(`Welcome, ${response.data.firstName}!`);
      setUser(response.data); 
      localStorage.setItem("user", JSON.stringify(response.data)); 
      onClose();
    })
    .catch((error) => {
      console.error("Login failed:", error);
      alert("Invalid email or password.");
    });
  
  };
  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="login-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          bgcolor: "#ded7cb", // Same background as original
          boxShadow: 24,
          borderRadius: 2,
          p: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Close Button (Same Position) */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Log In
        </Typography>

        {/* Subtitle */}
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Sign in to your account
        </Typography>

        {/* Email Input */}
        <TextField
            fullWidth
            margin="normal"
            label="Username or Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
        />

    <TextField
            fullWidth
            margin="normal"
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: "5px" }}
    />


        {/* Reset Password Link (Same as Before) */}
        <Link href="#" variant="body2" sx={{ mt: 1, mb: 2 }}>
          Reset Password
        </Link>

        {/* Login Button (Same Red Color) */}
        <Button
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              backgroundColor: "red",
              color: "white",
              "&:hover": { backgroundColor: "darkred" },
            }}
          >
            Log In
          </Button>


        {/* Register Link (Same as Before) */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Don't have an account?{" "}
          <Link href="/register" underline="hover" sx={{ color: "blue" }}>
            Register here
          </Link>
        </Typography>
      </Box>
    </Modal>
  );
}

export default LoginPopup;
