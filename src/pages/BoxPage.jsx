import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";
import React from "react";

export function BoxPage(props) {
  const arr = [
    "Technology",
    "Design",
    "Artificial Intelligence",
    "AI Chat Bot",
    "Customizable",
    "People",
    "Create Videos",
    "Analyze",
    "Outfits",
    "AI",
    "Outfits",
    "3d Models",
    "Voice Chat",
    "Market",
    "Analyze",
    "Outfits",
    "Outfit",
    "3d Model",
    "Voice Chat",
    "Market",
    "Design",
    "3D",
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ margin: "20px 0px" }}>
        {/* Navbar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
            }}
          >
            <Typography
              sx={{ letterSpacing: "10px", marginRight: "20px" }}
              variant="h5"
            >
              AI.GEN
            </Typography>
            <Typography variant="h7">Features</Typography>
            <Typography variant="h7">Roadmap</Typography>
            <Typography variant="h7">Tokenomics</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button variant="contained" color="inherit">
              Whitepaper
            </Button>
            <Button variant="contained" color="secondary">
              Get Started
            </Button>
          </Box>
        </Box>
        <hr></hr>
        {/* End of Navbar */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginTop: "250px",
          }}
        >
          {arr.map((val) => (
            <Button variant="contained" size="large">
              {val}
            </Button>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
