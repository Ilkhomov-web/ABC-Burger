import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

const ProductList = (prop) => {
  const { item } = prop;
  const [liked, setLiked] = useState(item.like || false);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/product/${item.id}`}
    >
      <Box
        sx={{
          width: "340px",
          boxShadow: 3,
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          gap: "5px",
          flexDirection: "row",
          cursor: "pointer",
        }}
      >
        <Box
          component={"img"}
          width={"150px"}
          height={"100px"}
          src={item.img}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            paddingLeft: "10px",
            justifyContent: "center",
          }}
        >
          <Typography fontWeight={"600"}>
            {item.name.slice(0, 12)}...
          </Typography>
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
            {liked ? (
              <FavoriteIcon
                onClick={handleLike}
                sx={{ color: "red", cursor: "pointer" }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={handleLike}
                sx={{ color: "red", cursor: "pointer" }}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductList;
