import { Box, Button, Container, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import "./Home.css";

export function SecondPage(props) {
  return (
    <div style={{ height: "100vh", padding: "50px 0" }}>
      <CssBaseline />
      <div
        style={{
          padding: "0 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "inherit",
          backdropFilter: "10px",
          opacity: 0.6,
        }}
        className="backgroundImg"
      >
        <Box sx={{ backgroundColor: "#ccc" }}>
          <Box
            sx={{
              fontWeight: "bolder",
              opacity: 1,
              padding: "20px",
              border: "2px solid black",
            }}
          >
            <Typography
              variant="h2"
              sx={{ color: "lightsalmon", fontWeight: 900 }}
            >
              Create,customize,and publish your
            </Typography>
            <Typography variant="h2">
              digital persona to life effortlessly.
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}
