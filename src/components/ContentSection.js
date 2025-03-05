import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Avatar, Grid } from "@mui/material";
import actor1 from "../MovieAssets/actors/actor1.png";
import actor2 from "../MovieAssets/actors/actor2.png";
import actor3 from "../MovieAssets/actors/actor3.png";
import actor4 from "../MovieAssets/actors/actor4.png";
import actor5 from "../MovieAssets/actors/actor5.png";
import actor6 from "../MovieAssets/actors/actor6.png";

const actors = [
  { name: "Cillian Murphy", img: actor1 },
  { name: "Kira Noir", img: actor2 },
  { name: "Denzel Washington", img: actor3 },
  { name: "Chloë Grace Moretz", img: actor4 },
  { name: "Uzoamaka Onouha", img: actor5 },
  { name: "Damson Isreal", img: actor6 },
];

const ContentSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #ded7cb, #444)",
        padding: "15px 20px",
        borderRadius: "12px",
        width: "90%",
        maxWidth: "900px",
        margin: "40px auto",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Actor Spotlight Title */}
      <Typography
        variant="h6"
        fontWeight="bold"
        color="#002b44"
        sx={{ textAlign: "left", pr: 3 }}
      >
        ACTOR'S <br /> SPOTLIGHT
      </Typography>

      {/* Actor Images */}
      <Grid container spacing={2} justifyContent="center">
        {actors.map((actor, index) => (
          <Grid item key={index}>
            <Link
              to={`/movies?actor=${encodeURIComponent(actor.name)}`}
              style={{ textDecoration: "none" }}
            >
              <Avatar
                src= {actor.img}
                alt={actor.name}
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: "25%",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "scale(1.3)" },
                }}
                title={`View movies of ${actor.name}`}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContentSection;
