import React from "react";
import { Home } from "./Home";
import { BriefImage1 } from "./BriefImage1";
import { Box, CssBaseline, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";
import "./../pages/Home.css";

export function ChartPage() {
  let arr = [
    { first: "Name", second: "AI GEN" },
    { first: "Token Name", second: "$AIGEN" },
    { first: "Total Supply", second: "1B" },
    { first: "Circulating Supply", second: "1B" },
    { first: "Contract", second: "loreum ipsum dolor sit a.." },

    { first: "Chain", second: "Ethereum" },
  ];
  let arr1 = [
    { color: "#BE2C2C", tag: "Partnership : 5% Tokens" },
    { color: "#FF8F34", tag: "LP Pool : 35% Tokens" },
    { color: "#9934FF", tag: "Burned : 30% Tokens" },
    { color: "#028DFD", tag: "BNB LP Pool : 30% Tokens" },
  ];
  return (
    <React.Fragment>
      <CssBaseline />
      <Box style={{ width: "100%", paddingTop: "100px" }}>
        <Box sx={{ textAlign: "center", paddingTop: "40px" }}>
          <Typography variant="h4">Tokenomics</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingLeft: "250px",
            paddingTop: "50px",
            flexWrap: "wrap",
            rowGap: "30px",
            justifyContent: "space-between",
          }}
        >
          {arr.map((val) => (
            <Typography variant="h5" sx={{ width: "50%" }}>
              {val.first} : {val.second}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            marginLeft: "-300px",
            display: "flex",
          }}
        >
          <PieChart
            series={[
              {
                data: [
                  { value: 5, color: "#BE2C2C" },
                  { value: 35, color: "#FF8F34" },
                  { value: 30, color: "#9934FF" },
                  { value: 30, color: "#028DFD" },
                ],
                paddingAngle: 3,
                cornerRadius: 10,
                innerRadius: 100,
                outerRadius: 150,
              },
            ]}
            width={500}
            height={500}
          />
          <Box
            sx={{
              marginTop: "150px",
            }}
          >
            {arr1.map((val) => (
              <Typography
                sx={{
                  marginTop: "10px",
                  fontWeight: "bold",
                  border: "1px solid white",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "350px",
                  marginLeft: "-700px",
                  borderLeft: `22px solid ${val.color}`,
                }}
              >
                {val.tag}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
