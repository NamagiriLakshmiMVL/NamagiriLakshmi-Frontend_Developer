import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export function BriefImage1(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ padding: "20px 0px", marginTop: "250px" }}>
        {/* parent box */}
        <Box>
          {/* Image Box */}
          <Box
            sx={{
              display: "flex",
              gap: "70px",
            }}
          >
            <Box //Image
              component="img"
              className="single_image"
              sx={{
                height: { xs: 50, md: 500 },
                maxWidth: { xs: 100, md: 700 },

                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
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
              <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                How it works
              </Typography>
              <div style={{ lineHeight: "10px" }}>
                <Typography
                  variant="h3"
                  sx={{ marginTop: "10px", color: "lightblue" }}
                >
                  Select an Avatar
                </Typography>
                <Typography variant="h3" sx={{ color: "grey" }}>
                  Create or Generate Script
                </Typography>
                <Typography variant="h3" sx={{ color: "grey" }}>
                  Select AI Voices
                </Typography>
                <Typography variant="h3" sx={{ color: "grey" }}>
                  Publish
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
