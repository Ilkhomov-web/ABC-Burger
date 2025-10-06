import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import MenuAppBar from "../components/AppBar";
import Search from "../components/Search";
import Filter from "../components/Filter";
import AdsSlider from "../components/AdsSlider";
import BottomBar from "../components/BottomBar";
import CategorySlide from "../components/CategorySlide";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <MenuAppBar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Search />
          <Filter />
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
