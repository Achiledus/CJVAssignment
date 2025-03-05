import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";

const MovieSlider = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const moviesPerPage = 5; // ✅ Show 5 posters at a time

  useEffect(() => {
    axios
      .get("https://json-server-ikn8.onrender.com/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // **Next Slide**
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + moviesPerPage >= movies.length ? 0 : prevIndex + moviesPerPage
    );
  };

  // **Previous Slide**
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - moviesPerPage : prevIndex - moviesPerPage
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        
      }}
    >
      {/* ✅ Left Arrow */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: 10,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* ✅ Movie Container (Shows 5 Posters at a Time) */}
      <Box
        sx={{
          display: "flex",
          width: "80%",
          maxWidth: "1000px",
          overflow: "hidden",
          color: "rgba(0,0,0,0.8)",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${(currentIndex / moviesPerPage) * 100}%)`,
            justifyContent: "center",
            width: "100%",
          }}
        >
          {movies.slice(currentIndex, currentIndex + moviesPerPage).map((movie) => (
            <Box
              key={movie.id}
              sx={{
                flex: "0 0 20%", // ✅ Ensures 5 images fit in a row
                textAlign: "center",
                position: "relative",
              }}
            >

              <img
                src={require(`../MovieAssets/MoviePosters/${movie.img1}`)}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover"
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ✅ Right Arrow */}
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: 10,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.5)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default MovieSlider;
