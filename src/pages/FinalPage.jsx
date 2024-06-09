import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export function FinalPage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ padding: "20px 50px", width: "100%" }}>
        <Button
          variant="contained"
          sx={{ width: "100%", fontSize: "50px" }}
          size="large"
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "inherit",
            }}
          >
            Get Started
            <ArrowForwardIcon style={{ fontSize: "65px" }} />
          </Box>
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
          <Typography sx={{ fontSize: "40px", width: "40%", fontSize: "30px" }}>
            Dash dash terralUSD neo uniswap kodena helium avalanche polymath
            bancor.
          </Typography>
          {/* Right Box*/}
          <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            <span style={{ alignSelf: "flex-end" }}>Looking for help?</span>
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                id="outlined-search"
                placeholder="Search field"
                type="search"
                style={{
                  backgroundColor: "white",
                  borderRadius: "5px",
                  width: "250px",
                }}
              />
              <Button variant="contained">Submit</Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ paddingTop: "150px" }}>
          <hr />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "40px 0",
          }}
        >
          <Typography variant="h5" sx={{ letterSpacing: "10px" }}>
            AI.GEN
          </Typography>
          <Box sx={{ display: "flex", gap: "40px" }}>
            <TwitterIcon style={{ cursor: "pointer" }} />
            <LinkedInIcon style={{ cursor: "pointer" }} />
            <AudiotrackIcon style={{ cursor: "pointer" }} />
            <YouTubeIcon style={{ cursor: "pointer" }} />
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
