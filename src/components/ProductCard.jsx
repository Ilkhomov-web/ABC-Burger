import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = () => {
  return (
    <Box
      sx={{
        width: "150px",
        boxShadow: 3,
        padding: "10px",
        borderRadius: "10px",
        display: "flex",
        gap: "5px",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <Box component={"img"} width={"100%"} src="/burger.png"></Box>
      <Typography fontWeight={"600"}>CheesBurger</Typography>
      <Typography>12.000</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <StarIcon sx={{ color: "gold" }} />
          <Typography>4.5</Typography>
        </Box>
        <FavoriteBorderIcon sx={{ color: "red" }} />
      </Box>
    </Box>
  );
};

export default ProductCard;
