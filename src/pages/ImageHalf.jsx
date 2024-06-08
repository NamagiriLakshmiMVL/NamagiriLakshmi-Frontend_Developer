import { CssBaseline } from "@mui/material";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

export function ImageHalf(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" sx={{ margin: "20px 40px" }}>
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

        {/* Image Parent */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Box //Image1
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 500 },
              maxWidth: { xs: 70, md: 500 },

              borderRadius: "20px",
            }}
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
            alt="Shoe"
          ></Box>

          <Box //Image2
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 500 },
              maxWidth: { xs: 70, md: 500 },

              borderRadius: "20px",
            }}
            src="https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg"
            alt="AI"
          ></Box>

          <Box //Image3
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 500 },
              maxWidth: { xs: 70, md: 500 },

              borderRadius: "20px",
            }}
            src="https://www.shutterstock.com/image-vector/modern-computer-keyboard-isolated-on-260nw-1846769518.jpg"
            alt="Keyboard"
          ></Box>

          <Box //Image4
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 1000 },
              maxWidth: { xs: 70, md: "2000px" },

              borderRadius: "20px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm18noq8sBvW0qWmPLf2hQYErOOGth0OaY-Q&s"
            alt="AI Voice"
          ></Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
