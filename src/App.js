import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Register from "./pages/Register";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// hosting on: https://cjv-assignment-hqbjnsnd3-achiledus-projects.vercel.app/
// please make sure the localhost/5000 is running. 

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar /> 
       
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </div>

        <Footer /> 
      </div>
    </Router>
  );
}

export default App;
