import React from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Images from "../images/phase3.png";
export function RoadmapP3(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <div style={{ margin: "200px 0px", width: "100%" }}>
        <Box //parent box
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          {/* Phase 1 */}
          <Box
            sx={{
              display: "flex",
              marginTop: "100px",
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography variant="h3">PHASE 3</Typography>
            </Box>
            <List
              sx={{
                listStyleType: "disc",
                marginTop: "80px",
                width: "480px",
                fontSize: "20px",
              }}
            >
              <ListItem sx={{ display: "list-item" }}>
                Horizen dai dai harmony dogecoin waves nexo.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Flow horizen waves dash tether zcash waves dash terraUSD.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Quant harmony amp cosmos PancakeSwap decentraland decred.
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Serum TRON salana tether holo crypto.Flow eCash amp EOS digibyte
                stellar.
              </ListItem>
            </List>
          </Box>

          <Box //Image
            component="img"
            className="single_image"
            sx={{
              maxHeight: { xs: 40, md: 500 },
              maxWidth: { xs: 70, md: 500 },
              marginTop: "70px",
              borderRadius: "20px",
            }}
            src={Images}
            alt="AI"
          />
        </Box>
      </div>
    </React.Fragment>
  );
}
