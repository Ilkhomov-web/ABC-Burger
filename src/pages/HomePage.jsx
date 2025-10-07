import React, { useState } from "react";
import { Box, Typography, Button, Container, Popover } from "@mui/material";
import MenuAppBar from "../components/AppBar";
import Search from "../components/Search";
import Filter from "../components/Filter";
import AdsSlider from "../components/AdsSlider";
import BottomBar from "../components/BottomBar";
import CategorySlide from "../components/CategorySlide";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import ProductList from "../components/ProductList";

const HomePage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isCardView, setIsCardView] = useState("card");

  const handleCardView = (view) => {
    setIsCardView(view);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box sx={{ paddingBottom: "100px" }}>
      <MenuAppBar />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Search />
          <Filter id={id} handleClick={handleClick} />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box
              sx={{
                width: "200px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Typography
                onClick={() => handleCardView("card")}
                sx={{
                  border: "1px solid #EF2A39",
                  padding: "5px 25px",
                  color: "#EF2A39",
                  cursor: "pointer",
                }}
              >
                Card
              </Typography>
              <Typography
                onClick={() => handleCardView("list")}
                sx={{
                  border: "1px solid #EF2A39",
                  padding: "5px 25px",
                  color: "#EF2A39",
                  cursor: "pointer",
                }}
              >
                List
              </Typography>
            </Box>
          </Popover>
        </Box>
        <AdsSlider />
        <CategorySlide />

        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {isCardView === "list" &&
            products.map((item) => <ProductList key={item.id} item={item} />)}
          {isCardView === "card" &&
            products.map((item) => <ProductCard key={item.id} item={item} />)}
        </Box>
      </Container>

      <Box
        sx={{
          width: "390px",
          position: "fixed",
          bottom: "0px",
          borderBottomLeftRadius: "20px",
          borderBottomRightRadius: "20px",
          background: "#e53935",
          zIndex: "1000",
        }}
      >
        <BottomBar />
      </Box>
    </Box>
  );
};

export default HomePage;
