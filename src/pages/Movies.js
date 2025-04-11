import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CircularProgress,
  Tabs,
  Tab,
} from "@mui/material";
import Background from "../MovieAssets/Drawn_Background.png";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Movies() {
  const [movies, setMovies] = useState([]);
  const [spotlightMovies, setSpotlightMovies] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const query = useQuery();
  const selectedActor = query.get("actor");

  useEffect(() => {
    axios
      .get("https://cjvbackend.onrender.com/api/movies/all")
      .then((response) => {
        setMovies(response.data);
        setSpotlightMovies(shuffleArray(response.data).slice(0, 5));
      })
      .catch((error) =>
        console.error("Error fetching movies:", error)
      );
  }, []);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Filter Movies
  const filteredMovies = movies.filter((movie) => {
    if (selectedActor) {
      return movie.actors && movie.actors.includes(selectedActor);
    }
    if (activeTab === "All") return true;
    if (activeTab === "Animation" || activeTab === "Live-action") {
      return movie.type && movie.type.includes(activeTab);
    }
    if (activeTab === "TV" || activeTab === "Movies") {
      return movie.type === activeTab;
    }
    return true;
  });

  if (movies.length === 0) {
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
        backgroundImage: `url(${Background})`,
        minHeight: "100vh",
        paddingBottom: 4,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Spotlight Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 1,
          background: "linear-gradient(to right, #ded7cb, #444)",
          borderRadius: "25%",
        }}
      >
        <Typography variant="h4" color="white" fontWeight="bold">
          MOVIE SPOTLIGHT
        </Typography>
        <Grid container spacing={2} justifyContent="center" mt={2}>
          {spotlightMovies.map((movie) => (
            <Grid item key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  sx={{
                    width: 150,
                    bgcolor: "rgba(255,255,255,0.2)",
                    borderRadius: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={
                      movie.smallPoster
                        ? require(`../MovieAssets/MoviePosters/${movie.smallPoster}`)
                        : require(`../MovieAssets/MoviePosters/${movie.largePoster}`)
                    }
                    alt={movie.title}
                  />
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Actor Filter */}
      {selectedActor && (
        <Typography variant="h5" color="white" textAlign="center" mt={3}>
          Movies starring: {selectedActor}
        </Typography>
      )}

      {/* Category Tabs */}
      {!selectedActor && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: 2,
          }}
        >
          <Tabs
            value={activeTab}
            onChange={(event, newValue) => setActiveTab(newValue)}
            textColor="secondary"
            indicatorColor="secondary"
            sx={{
              "& .MuiTab-root": {
                color: "white",
                fontWeight: "bold",
              },
              "& .Mui-selected": {
                color: "#ff9e80",
              },
            }}
          >
            {["All", "Animation", "Live-action", "TV", "Movies"].map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>
        </Box>
      )}

      {/* Movies Grid */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          mt: 3,
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
        <Grid container spacing={2} justifyContent="center" mt={4}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                <Link
                  to={`/movies/${movie.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card
                    sx={{
                      bgcolor: "rgba(255,255,255,0.2)",
                      borderRadius: 2,
                      textAlign: "center",
                    }}
                  >
                    {movie.smallPoster && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={require(`../MovieAssets/MoviePosters/${movie.smallPoster}`)}
                        alt={movie.title}
                      />
                    )}
                    <CardContent>
                      <Typography variant="h6" color="white">
                        {movie.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))
          ) : (
            <Typography variant="h6" color="white" textAlign="center">
              No movies found for this selection.
            </Typography>
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default Movies;
