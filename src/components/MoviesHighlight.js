import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  Grid,
  Typography
} from "@mui/material";
import axios from "axios";

const MoviesHighlight = () => {
  const [highlightedMovies, setHighlightedMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://cjvbackend.onrender.com/api/movies/featured?type=movie")
      .then((response) => {
        setHighlightedMovies(response.data);
      })
      .catch((error) => console.error("Error fetching featured movies:", error));
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #ded7cb, #444)",
        padding: "10px 2px",
        borderRadius: "12px",
        width: "100%",
        maxWidth: "1000px",
        margin: "40px auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      {highlightedMovies.map((movie) => (
        <Grid item key={movie.id}>
          <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
            <Card
              sx={{
                width: 160,
                bgcolor: "rgba(255,255,255,0.2)",
                borderRadius: 2,
                transition: "transform 0.3s ease-in-out",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={require(`../MovieAssets/MoviePosters/${movie.largePoster}`)}
                alt={movie.title}
              />
              <Typography
                color="white"
                fontSize="0.9rem"
                fontWeight="bold"
                textAlign="center"
                sx={{ backgroundColor: "rgba(0,0,0,0.5)", py: 0.5 }}
              >
                {movie.title}
              </Typography>
            </Card>
          </Link>
        </Grid>
      ))}
    </Box>
  );
};

export default MoviesHighlight;
