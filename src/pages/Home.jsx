import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, ImageList, ImageListItem, Typography } from "@mui/material";

export function Home(props) {
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

        {/* Text Section */}
        <Box sx={{ display: "flex", justifyContent: "space-evenly " }}>
          <Box //Parent Text
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* Text1 Box*/}
            <Box>
              <Button variant="teritary">
                🎉New in AI.GEN: Real Time Interaction
              </Button>
            </Box>
            {/* Text2 Box */}
            <Box sx={{ marginTop: "40px" }}>
              <Typography variant="h4">IOTA polygon serum ipsum</Typography>
              <Typography variant="h4" sx={{ color: "grey" }}>
                WAX terraUSD gala THETA
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginTop: "35px", color: "grey" }}
              >
                chiliz serum TRON dash aave cardano crypto celo. Golem
              </Typography>
              <Typography variant="h6" sx={{ color: "grey" }}>
                ankr bancor horizen ethereum quant bitcoin.
              </Typography>
            </Box>
            {/* Button Box */}
            <Box sx={{ marginTop: "35px" }}>
              <Button variant="contained" color="secondary">
                Get Started
              </Button>
            </Box>
          </Box>
          {/* End of Left Text */}

          {/* Image Right */}
          <Box sx={{ display: "flex", gap: "50px" }}>
            <Box //row 1 Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "25px" }}
            >
              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
                alt="Bill Gates"
              />

              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
                alt="Elon Musk"
              />

              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg"
                alt="Albert einstein"
              />
            </Box>
            <Box //row 2 Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "25px",
                marginTop: "-50px",
              }}
            >
              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                  // opacity: 0.5,
                }}
                src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
                alt="Bill Gates"
              />

              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
                alt="Elon Musk"
              />

              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg"
                alt="Albert einstein"
              />
            </Box>
            <Box //row 3 Box
              sx={{ display: "flex", flexDirection: "column", rowGap: "25px" }}
            >
              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
                alt="Bill Gates"
              />

              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
                alt="Elon Musk"
              />

              <Box
                component="img"
                className="single_image"
                sx={{
                  maxHeight: { xs: 40, md: 150 },
                  maxWidth: { xs: 70, md: 200 },
                  borderRadius: "20px",
                }}
                src="https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg"
                alt="Albert einstein"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
