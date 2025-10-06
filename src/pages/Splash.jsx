import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <Box
      sx={{
        background: "#e53935",
        background: "-webkit-linear-gradient(to right, #e53935, #e35d5b)",
        background: "linear-gradient(to right, #e53935, #e35d5b)",
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "70px 0px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography variant="h3" sx={{ color: "white" }}>
          ABC-Burger
        </Typography>
        <Box>
          <Typography variant="h6" sx={{ width: "300px", color: "white" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            molestiae?
          </Typography>
        </Box>
      </Box>
      <Link to={"/home"}>
        <Button
          sx={{
            background: "white",
            color: "#e53935",
            width: "300px",
            fontWeight: "600",
            padding: "15px 0px",
            fontSize: "17px",
          }}
        >
          Get Started
        </Button>
      </Link>
    </Box>
  );
};

export default Splash;
