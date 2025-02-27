import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles.css"; 

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/movies/${id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="movie-details" style={{ 
      width: "100vw",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${require(`../MovieAssets/MoviePosters/${movie.img2}`)})`,
            backgroundSize: "cover",  
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
       }}>
    
      <div className="movie-info">
        <img src={require(`../MovieAssets/MoviePosters/${movie.img1}`)} alt={movie.title} className="movie-poster" />
        <div className="movie-content">
          <h1>{movie.title}</h1>
          <p className="movie-meta">{movie.genre} | {movie.year}</p>
          <div className="tab-menu">
            <span>Episodes</span>
            <span className="active-tab">Details</span>
          </div>
          <p className="movie-description">{movie.description}</p>
          <div className="buttons">
            <button className="play-button">▶ Rent</button>
            <button className="buy-button">$ Buy</button>
            <button className="trailer-button"> Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
