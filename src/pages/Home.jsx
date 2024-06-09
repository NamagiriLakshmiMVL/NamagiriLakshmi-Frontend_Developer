import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, ImageList, ImageListItem, Typography } from "@mui/material";
import "./Home.css";

export function Home() {
  const HeaderImageContainer = (style) => {
    for (let i = 0; i < 3; i++) {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", rowGap: "25px" }}>
          <Box
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 250, xl: 200 },
              maxWidth: { xs: 70, md: 250, xl: 350 },
              borderRadius: "20px",
              objectFit: "cover",
            }}
            style={style}
            src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
            alt="Bill Gates"
          />

          <Box
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 150, xl: 200 },
              maxWidth: { xs: 70, md: 250, xl: 350 },
              borderRadius: "20px",
              objectFit: "cover",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
            alt="Elon Musk"
          />

          <Box
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 150, xl: 200 },
              maxWidth: { xs: 70, md: 250, xl: 350 },
              borderRadius: "20px",
              objectFit: "cover",
            }}
            src="https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg"
            alt="Albert einstein"
          />
        </Box>
      );
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <CssBaseline />
      {/* Navbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
          borderBottom: "1px solid grey",
          padding: "10px 60px",
          backdropFilter: "blur(10px)",
          position: "fixed",
          width: "100vw",
          zIndex: 9999999,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ letterSpacing: "10px", marginRight: "40px" }}
            variant="h5"
          >
            AI.GEN
          </Typography>
          <Typography variant="h7">Features</Typography>
          <Typography variant="h7">Roadmap</Typography>
          <Typography variant="h7">Tokenomics</Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Button variant="contained" sx={{ backgroundColor: "#4d4d4d" }}>
            Whitepaper
          </Button>
          <Button variant="contained" color="secondary">
            Get Started
          </Button>
        </Box>
      </Box>
      <div sx={{ margin: "40px", width: "100%" }}>
        {/* Text Section */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box //Parent Text
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              paddingLeft: "150px",
            }}
          >
            {/* Text1 Box*/}
            <Box>
              <div className="headerContainerText">
                🎉New in AI.GEN: Real Time Interaction
              </div>
            </Box>
            {/* Text2 Box */}
            <Box sx={{ marginTop: "40px" }}>
              <Typography variant="h3">IOTA polygon serum ipsum</Typography>
              <Typography variant="h3" sx={{ color: "grey" }}>
                WAX terraUSD gala THETA
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginTop: "35px", color: "grey" }}
              >
                Chiliz serum TRON dash aave cardano crypto celo. Golem
              </Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                ankr bancor horizen ethereum quant bitcoin.
              </Typography>
            </Box>
            {/* Button Box */}
            <Box sx={{ marginTop: "35px" }}>
              <Button variant="contained" color="secondary" size="large">
                Get Started
              </Button>
            </Box>
          </Box>
          {/* End of Left Text */}

          {/* Image Right */}
          <Box sx={{ display: "flex", gap: "50px", padding: "120px 0 40px 0" }}>
            {HeaderImageContainer()}
            {HeaderImageContainer({ marginTop: "-70px" })}
            {HeaderImageContainer()}
          </Box>
        </Box>
      </div>
    </Box>
  );
}
