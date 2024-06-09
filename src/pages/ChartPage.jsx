import React from "react";
import { Home } from "./Home";
import { BriefImage1 } from "./BriefImage1";
import { Box, Typography } from "@mui/material";

export function AllComponents(props) {
  let arr = [
    { Name: "AI GEN" },
    { "Total Supply": "1B" },
    { Contract: "loreum ipsum dolor sit...." },
    { "Token Name": "$AIGEN" },
    { "Circulating Supply": "1B" },
    { Chain: "Ethereum" },
  ];
  console.log(arr);
  return (
    <div>
      <Box>
        <Typography variant="h3">Tokenomics</Typography>
      </Box>
      <Box>
        {arr.map((val) => {
          <Typography variant="h3" sx={{ color: "white" }}>
            {val}
          </Typography>;
        })}
      </Box>
    </div>
  );
}
