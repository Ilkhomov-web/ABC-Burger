import { Box, Button, Container, Slider, Typography } from "@mui/material";
import MenuAppBar from "../components/AppBar";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import BottomBar from "../components/BottomBar";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const Product = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);
  return (
    <Box>
      <Container maxWidth="lg">
        <MenuAppBar />
        <hr style={{ border: "1px solid #e53935", marginBottom: "20px" }} />
        <Box
          component={"img"}
          width={"100%"}
          height={"300px"}
          src={product.img}
          sx={{ borderRadius: "12px" }}
        ></Box>
        <Typography variant="h5" fontWeight={"600"} margin={"10px 0px"}>
          {product.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            gap: "3px",
            margin: "10px 0px",
          }}
        >
          <StarIcon sx={{ color: "gold" }} />
          <Typography color="gray">{product.rating}</Typography>
        </Box>
        <Typography color="gray">{product.desc}</Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <label htmlFor="">Spicy</label>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              sx={{ color: "#EF2A39" }}
            />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ color: "#1CC019" }}>Mild</Typography>
              <Typography sx={{ color: "#EF2A39" }}>Hold</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography>Portion</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Button sx={{ background: "#EF2A39", color: "white" }}>-</Button>
              <Typography>1</Typography>
              <Button sx={{ background: "#EF2A39", color: "white" }}>+</Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            marginTop: "30px",
          }}
        >
          <Button
            sx={{ background: "#EF2A39", color: "white", padding: "5px 20px" }}
          >
            12055 so'm
          </Button>
          <Button
            sx={{ background: "#3C2F2F", color: "white", padding: "5px 20px" }}
          >
            Order Basket
          </Button>
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

export default Product;
