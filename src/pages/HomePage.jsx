import React, { useEffect, useMemo, useState } from "react";
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
import { ThreeDot } from "react-loading-indicators";
import { supabase } from "../supabase/supaClient";

function debounce(func, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const HomePage = () => {
  const [product, setProduct] = useState(products);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isCardView, setIsCardView] = useState("card");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        if (!query) {
          setProduct(products);
          return;
        }
        const result = products.filter((item) =>
          item.name.toLowerCase().includes(query.toLowerCase())
        );
        setProduct(result);
      }, 600),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm]);

  async function getUser() {
    const { data, error } = await supabase.auth.getUser();

    const getTime = setTimeout(() => {
      if (!data.user) {
        alert("Ro'yxatdan o'ting iltimos");
      }
    }, 2000);

    getTime();
  }

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setProduct(products);
      setLoading(false);
      getUser();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const handleClickCategory = (category) => {
    if (category == "All") {
      setProduct(products);
    } else {
      const filterProduct = products.filter(
        (item) => item.category == category
      );
      setProduct(filterProduct);
    }
  };

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

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <ThreeDot color={["#a60d18", "#d6101f", "#ef2a39", "#f35965"]} />
      </Box>
    );
  }

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
          <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
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
        <CategorySlide handleClickCategory={handleClickCategory} />

        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {product.length > 0 ? (
            isCardView === "list" ? (
              product.map((item) => <ProductList key={item.id} item={item} />)
            ) : (
              product.map((item) => <ProductCard key={item.id} item={item} />)
            )
          ) : (
            <Typography color="error">Hech narsa topilmadi</Typography>
          )}
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
