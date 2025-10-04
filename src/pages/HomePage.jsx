import React from "react";
import Navbar from "../components/Navbar";
import { Box, Typography, Button } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        background: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "70px 0px",
      }}
    >
      <Box>
        <Box component={"img"} src="/logo.png" sx={{ width: "300px" }}></Box>
        <Box>
          <Typography variant="h5" sx={{ width: "300px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            molestiae?
          </Typography>
        </Box>
      </Box>
      <Button>Get Started</Button>
    </Box>
  );
};

export default HomePage;
