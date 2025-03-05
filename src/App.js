import React from "react";
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
    primary: { main: "#002b44" },  // Dark blue
    secondary: { main: "#ff4500" }, // Orange-Red
    background: { default: "#f4f4f4" }, // Light gray
    text: { primary: "#333" },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalizes CSS */}
      <Router>
        <NavBar /> {/* Material UI Navbar */}

        <Container maxWidth="lg"> {/* Centers content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/register" element={<Register />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </Container>

        
      </Router>
      <Footer /> {/* Material UI Footer */}
    </ThemeProvider>
  );
}

export default App;
