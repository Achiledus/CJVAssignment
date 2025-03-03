import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles.css";
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
    axios.get("https://json-server-ikn8.onrender.com/movies")
      .then(response => {
        setMovies(response.data);
        setSpotlightMovies(shuffleArray(response.data).slice(0, 5)); // Pick 5 movies for spotlight
      })
      .catch(error => console.error("Error fetching movies:", error));
  }, []);

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  const filteredMovies = movies.filter(movie => {
    if (selectedActor) {
      return movie.actors && movie.actors.includes(selectedActor);
    }
    if (activeTab === "All") return true;
    if (activeTab === "Animation" || activeTab === "Live-action") {
      return movie.category1 === activeTab;
    }
    if (activeTab === "TV" || activeTab === "Movies") {
      return movie.category2 === activeTab;
    }
    return true;
  });

  return (
    <div className="movies-page" style={{ backgroundImage: `url(${Background})` }}>
      
      {/*Spotlight Section Styled Like Content Section */}
      <section className="spotlight-section">
        <div className="spotlight-header">
          <h2>MOVIE SPOTLIGHT</h2>
        </div>
        <div className="spotlight-container">
          {spotlightMovies.map(movie => (
            <div key={movie.id} className="spotlight-card">
              <Link to={`/movies/${movie.id}`}>
                <img src={require(`../MovieAssets/MoviePosters/${movie.img1}`)} alt={movie.title} className="spotlight-poster"/>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Show actor's name if filtering by actor */}
      {selectedActor && <h3>Movies starring: {selectedActor}</h3>}

      {/* Tab Navigation */}
      {!selectedActor && (
        <div className="tab-container">
          <div className="tabs">
            {["All", "Animation", "Live-action", "TV", "Movies"].map((tab) => (
              <div 
                key={tab} 
                className={`tab ${activeTab === tab ? "active" : ""}`} 
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </div>
            ))}
            <div className="tab-indicator" style={{ left: `${["All", "Animation", "Live-action", "TV", "Movies"].indexOf(activeTab) * 20}%` }} />
          </div>
        </div>
      )}

      {/* Movies Grid */}
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <Link to={`/movies/${movie.id}`}>
                <img src={require(`../MovieAssets/MoviePosters/${movie.img1}`)} alt={movie.title} className="movie-poster"/>
                <p>{movie.title}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No movies found for this selection.</p>
        )}
      </div>
    </div>
  );
}

export default Movies;
