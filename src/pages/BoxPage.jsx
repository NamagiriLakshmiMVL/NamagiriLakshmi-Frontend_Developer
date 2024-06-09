import {
  Box,
  Button,
  Chip,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";
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
      <div sx={{ margin: "20px 0px", width: "100vw" }}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "250px",
            width: "100vw",
            overflow: "scroll",
          }}
        >
          {arr.map((val) => (
            <Chip
              style={{
                width: "300px",
                fontSize: 25,
                textTransform: "capitalize",
                padding: "30px 35px",
                border: "1px solid white",
                borderRadius: "10px",
                overflow: "unset",
                color: "white",
              }}
              label={val}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            width: "100vw",
            overflow: "scroll",
          }}
        >
          {arr.reverse().map((val) => (
            <Chip
              style={{
                width: "300px",
                fontSize: 25,
                textTransform: "capitalize",
                padding: "30px 35px",
                border: "1px solid white",
                borderRadius: "10px",
                overflow: "unset",
                color: "white",
              }}
              label={val}
            />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}
