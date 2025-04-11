import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import HeroBackground from "../MovieAssets/Herosection.png";
import MoviesHighlight from "./MoviesHighlight";
import ContentSection from "./ContentSection";

const HeroSection = ({ children }) => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `url(${HeroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Main Hero Area */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          px: 3,
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />

        {/* Hero Text and Button */}
        <Box sx={{ position: "relative", zIndex: 2, mt: -10}}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Welcome to Your Movie Universe
          </Typography>
          {children}
          <Typography variant="h6" gutterBottom>
            Discover your favorite movies, TV shows, and more.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate("/movies")}
            sx={{ mt: 2 }}
          >
            Explore Now
          </Button>
        </Box>
      </Box>

      {/* Highlights and Actor Section */}
      <Box sx={{ position: "relative", zIndex: 2, mt: -10, mb: 6 }}>
        <MoviesHighlight />
      </Box>

      <Box sx={{ position: "relative", zIndex: 2, mb: 4 }}>
        <ContentSection />
      </Box>
    </Box>
  );
};

export default HeroSection;
