import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ProductCard = (prop) => {
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
          width: "150px",
          boxShadow: 3,
          padding: "10px",
          borderRadius: "10px",
          display: "flex",
          gap: "5px",
          flexDirection: "column",
          cursor: "pointer",
          "@media (max-width: 350px)": {
            width: "120px",
          },
        }}
      >
        <LazyLoadImage
          alt={item.image_url}
          height={"100px"}
          src={item.image_url}
          width={"100%"}
        />
        {/* <Box
          component={"img"}
          width={"100%"}
          height={"100px"}
          src={item.img}
        ></Box> */}
        <Typography fontWeight={"600"}>{item.name.slice(0, 12)}...</Typography>
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
    </Link>
  );
};

export default ProductCard;
