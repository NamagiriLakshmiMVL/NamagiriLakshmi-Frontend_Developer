import { Box, Button, Container, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

export function SecondPage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ margin: "20px 20px" }}>
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

        <Box>
          <Typography variant="h4" sx={{ color: "lightsalmon" }}>
            Create,customize,and publish your
          </Typography>
          <Typography variant="h4">
            digital persona to life effortlessly.
          </Typography>
        </Box>
      </Container>
      ;
    </React.Fragment>
  );
}
