import { CssBaseline } from "@mui/material";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

export function ImageHalf(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ paddingTop: "150px" }}>
        {/* Image Parent */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <Box
            sx={{
              flexBasis: "30%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#353535",
              borderRadius: "20px",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "150px",
                width: "100%",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              AI Outfits
            </Box>
            <Box //Image1
              component="img"
              className="single_image"
              sx={{
                maxHeight: { xs: 40, md: 300 },
                maxWidth: { xs: 70, md: 500 },
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                objectFit: "cover",
              }}
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
              alt="Shoe"
            ></Box>
          </Box>

          <Box
            sx={{
              flexBasis: "45%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#353535",
              borderRadius: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "150px",
                width: "100%",
                justifyContent: "center",
                fontSize: "30px",
              }}
            >
              Realistic AI Avatar
            </Box>
            <Box //Image1
              component="img"
              className="single_image"
              sx={{
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
                objectFit: "contain",
              }}
              src="https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg"
              alt="Shoe"
            ></Box>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  );
}
