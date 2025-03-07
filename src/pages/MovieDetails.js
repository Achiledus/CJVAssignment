import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Card,
  CardMedia,
} from "@mui/material";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`https://json-server-ikn8.onrender.com/movies/${id}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${require(`../MovieAssets/MoviePosters/${movie.img2}`)})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark Overlay for Readability */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Movie Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          maxWidth: "1100px",
          width: "90%",
          zIndex: 2,
          flexWrap: "wrap",
        }}
      >
        {/* Movie Poster */}
        <Card sx={{ maxWidth: 250, bgcolor: "rgba(255,255,255,0.2)" }}>
          <CardMedia
            component="img"
            height="350"
            image={require(`../MovieAssets/MoviePosters/${movie.img1}`)}
            alt={movie.title}
          />
        </Card>

        {/* Movie Details */}
        <Box sx={{ maxWidth: 600, color: "white", textAlign: "center" }}>
          <Typography variant="h3" fontWeight="bold">
            {movie.title}
          </Typography>
          <Typography variant="h6" color="gray" sx={{ mt: 1 }}>
            {movie.genre} | {movie.year}
          </Typography>

          {/* Tab Menu */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <Typography variant="body1">Episodes</Typography>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Details
            </Typography>
          </Box>

          {/* Movie Description */}
          <Typography variant="body1" sx={{ mt: 2 }}>
            {movie.description}
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: "flex", gap: 2, justifyContent: "center", mt: 3 }}>
            <Button variant="contained" color="error" size="large">
              ▶ Rent
            </Button>
            <Button variant="contained" color="primary" size="large">
              $ Buy
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Trailer
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MovieDetails;
