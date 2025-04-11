import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  Paper,
  Grid,
} from "@mui/material";
import Background from "../MovieAssets/Drawn_Background.png";

function Register({ setUser }) {
  const navigate = useNavigate();
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

    axios
      .post("https://cjvbackend.onrender.com/api/users/register", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      })
      .then((response) => {
        alert(`Welcome, ${response.data.firstName}!`);
        setUser(response.data); 
        localStorage.setItem("user", JSON.stringify(response.data)); 
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Registration failed:", error);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "12px",
          maxWidth: 420,
          width: "100%",
          backgroundColor: "#ded7cb",
        }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          REGISTRATION
        </Typography>

        <form onSubmit={handleSubmit}>
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

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Checkbox
              name="agreedToTerms"
              onChange={handleChange}
              required
              color="default"
            />
            <Typography variant="body2">
              I agree to the{" "}
              <a href="#" style={{ color: "red" }}>
                Terms
              </a>{" "}
              and{" "}
              <a href="#" style={{ color: "red" }}>
                Privacy Policy
              </a>
              .
            </Typography>
          </Box>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "red",
              color: "white",
              fontWeight: "bold",
              "&:hover": { bgcolor: "darkred" },
            }}
          >
            Register
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default Register;
