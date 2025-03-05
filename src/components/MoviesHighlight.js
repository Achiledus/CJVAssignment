import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Card, CardMedia,  Grid, Typography } from "@mui/material";
import axios from "axios";

const MoviesHighlight = () => {
  const [highlightedMovies, setHighlightedMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://json-server-ikn8.onrender.com/movies")
      .then((response) => {
        setHighlightedMovies(response.data.slice(0, 5)); 
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Box sx={{ display: "flex", 
        gap: 2,
       flexWrap: "wrap", mt: 3, 
       display: "flex",
       alignItems: "center",
       justifyContent: "center",
       background: "linear-gradient(to right, #ded7cb, #444)",
       padding: "10px 2px",
       borderRadius: "12px",
       width: "100%",
       maxWidth: "1000px",
       margin: "40px auto",
       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",}}>
      {highlightedMovies.map((movie) => (
         <Grid item key={movie.id}>
         <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
           <Card
             sx={{
               width: 160,
               bgcolor: "rgba(255,255,255,0.2)",
               borderRadius: 2,
             }}
           >
             <CardMedia
               component="img"
               height="200"
               image={require(`../MovieAssets/MoviePosters/${movie.img2}`)}
               alt={movie.title}
             />
             <Typography
             color="white"
             bgcolor="rgba(0,0,0,0.05)"
             fontStyle={"normal"}>
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
