import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const ProductCard = (prop) => {
  const { item } = prop;
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/product/${item.id}`}
    >
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
        <Box
          component={"img"}
          width={"100%"}
          height={"100px"}
          src={item.img}
        ></Box>
        <Typography fontWeight={"600"}>{item.name}</Typography>
        <Typography>{item.price} so'm</Typography>
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
            <Typography>{item.rating}</Typography>
          </Box>
          <FavoriteBorderIcon sx={{ color: "red" }} />
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
