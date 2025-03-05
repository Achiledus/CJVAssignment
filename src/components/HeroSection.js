import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import HeroBackground from "../MovieAssets/Herosection.png";
import MoviesHighlight from "./MoviesHighlight";
import ContentSection from "./ContentSection";

const HeroSection = ({ children }) => {
  const navigate = useNavigate();

 
  return (
    <div
    style={{backgroundImage: `url(${HeroBackground})`,
      width: "100%",
      height: "120%",
      backgroundSize: "cover",
      justifyContent: "center",
     }}>


    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        px: 3,
      }}
    >
      
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

     
      <Box sx={{ position: "relative", zIndex: 2, mt: 4 }}>
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

      
      <Box sx={{ position: "relative", zIndex: 2, mt: 3 }}>
        <MoviesHighlight />
      </Box>
              <ContentSection />  
    </Box>
    </div>
  );
};


export default HeroSection;
