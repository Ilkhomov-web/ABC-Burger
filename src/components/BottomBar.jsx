import { Box, Button } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0px 0px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "1000",
        background: "#e53935",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          width: "45%",
          textAlign: "center",
        }}
        to={"/home"}
      >
        <Button sx={{ color: "white", width: "45%", height: "80px" }}>
          <HomeIcon />
        </Button>
      </Link>
      <hr
        style={{
          transform: "rotate(90deg)",
          width: "50px",
          border: "1px solid white",
        }}
      />
      <Button sx={{ color: "white", width: "45%", height: "80px" }}>
        <ShoppingCartIcon />
      </Button>
    </Box>
  );
};

export default BottomBar;
