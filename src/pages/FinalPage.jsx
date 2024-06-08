import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import YouTubeIcon from "@mui/icons-material/YouTube";

export function FinalPage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ margin: "20px 20px" }}>
        <Button
          variant="contained"
          sx={{ width: "100%", fontSize: "30px" }}
          size="large"
        >
          Get Started
        </Button>
        {/* Parent Box */}
        <Box
          sx={{
            marginTop: "150px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Left Box */}
          <Typography sx={{ fontSize: "40px", width: "40%" }}>
            Dash dash terralUSD neo uniswap kodena helium avalanche polymath
            bancor.
          </Typography>
          {/* Right Box*/}
          <Box>
            <Typography varient="h4">Looking for help?</Typography>
            <Box sx={{ display: "flex" }}>
              <TextField label="Filled" variant="filled" />{" "}
              <Button variant="contained">Submit</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ margin: "80px" }}>
          <hr />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" sx={{ letterSpacing: "10px" }}>
            AI.GEN
          </Typography>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <TwitterIcon />
            <LinkedInIcon />
            <AudiotrackIcon />
            <YouTubeIcon />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
