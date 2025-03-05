import React from "react";
import { Box, Typography, Link, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: "primary.main", color: "white", py: 2, mt: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} RevasWatch. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link href="/privacy" color="inherit">Privacy Policy</Link> | 
          <Link href="/terms" color="inherit" sx={{ ml: 1 }}>Terms & Conditions</Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
