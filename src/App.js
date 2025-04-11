import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import Register from "./pages/Register";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

// Custom MUI Theme
const theme = createTheme({
  palette: {
    primary: { main: "#002b44" },
    secondary: { main: "#ff4500" },
    background: { default: "#f4f4f4" },
    text: { primary: "#333" },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* Pass user state to NavBar */}
        <NavBar user={user} setUser={setUser} />

        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route
              path="/register"
              element={<Register setUser={setUser} />}
            />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
