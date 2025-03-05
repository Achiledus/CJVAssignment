import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Grid,
} from "@mui/material";
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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Background})`, // ✅ Set Background Image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "12px",
          width: "100%",
          maxWidth: 420,
          textAlign: "center",
          backgroundColor: "#ded7cb", // ✅ Beige Background for Form
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          REGISTRATION
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: "5px" }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="filled"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
                required
                sx={{ bgcolor: "white", borderRadius: "5px" }}
              />
            </Grid>
          </Grid>

          {/* Email Field */}
          <TextField
            fullWidth
            variant="filled"
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            required
            sx={{ mt: 2, bgcolor: "white", borderRadius: "5px" }}
          />

          {/* Password Fields */}
          <TextField
            fullWidth
            variant="filled"
            placeholder="Enter Password"
            type="password"
            name="password"
            onChange={handleChange}
            required
            sx={{ mt: 2, bgcolor: "white", borderRadius: "5px" }}
          />
          <TextField
            fullWidth
            variant="filled"
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            required
            sx={{ mt: 2, bgcolor: "white", borderRadius: "5px" }}
          />

          {/* Register Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "red",
              color: "white",
              fontWeight: "bold",
              borderRadius: "5px",
              "&:hover": { bgcolor: "darkred" },
            }}
          >
            Register
          </Button>

          {/* Agree to Terms Checkbox */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
            <Checkbox name="agreedToTerms" onChange={handleChange} required color="default" />
            <Typography variant="body2">
              By clicking the checkbox, you agree to Sensei’s{" "}
              <a href="#" style={{ color: "red" }}>Terms of Service Agreement</a> and{" "}
              <a href="#" style={{ color: "red" }}>Privacy Policy</a>.
            </Typography>
          </Box>

          {/* Social Media Buttons */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "white",
                color: "black",
                border: "1px solid gray",
                fontWeight: "bold",
                borderRadius: "5px",
                mr: 1,
              }}
            >
              Google
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                bgcolor: "#3b5998",
                color: "white",
                fontWeight: "bold",
                borderRadius: "5px",
                ml: 1,
              }}
            >
              Facebook
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

export default Register;
