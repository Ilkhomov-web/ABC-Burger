import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Splash = () => {
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
          <Typography variant="h6" sx={{ width: "300px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
            molestiae?
          </Typography>
        </Box>
      </Box>
      <Link to={"/home"}>
        <Button>Get Started</Button>
      </Link>
    </Box>
  );
};

export default Splash;
