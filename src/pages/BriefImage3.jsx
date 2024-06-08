import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export function BriefImage3(props) {
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

        {/* parent box */}
        <Box>
          {/* Image Box */}
          <Box
            sx={{
              marginTop: "100px",
              display: "flex",
              gap: "20px",
              //   justifyContent: "space-around",
            }}
          >
            <Box //Image
              component="img"
              className="single_image"
              sx={{
                maxHeight: { xs: 40, md: 700 },
                maxWidth: { xs: 70, md: 700 },

                borderRadius: "20px",
              }}
              src="https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg"
              alt="AI"
            />

            <Box //Text parent
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "50px",
              }}
            >
              <Typography variant="h2">How it works</Typography>
              <Typography variant="h4" sx={{ marginTop: "10px" }}>
                Select an Avatar
              </Typography>
              <Typography variant="h4" sx={{ color: "grey" }}>
                Create or Generate Script
              </Typography>
              <Typography
                variant="h4"
                sx={{ color: "grey", color: "lightblue" }}
              >
                Select AI Voices
              </Typography>
              <Typography variant="h4" sx={{ color: "grey" }}>
                Publish
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      ;
    </React.Fragment>
  );
}
