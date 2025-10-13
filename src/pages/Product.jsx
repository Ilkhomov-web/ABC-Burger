import React, { useEffect, useState } from "react";
import { Box, Button, Container, Slider, Typography } from "@mui/material";
import MenuAppBar from "../components/AppBar";
import StarIcon from "@mui/icons-material/Star";
import BottomBar from "../components/BottomBar";
import { useParams } from "react-router-dom";
import { supabase } from "../supabase/supaClient";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [price, setPrice] = useState(0);
  const [add, setAdd] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Xatolik:", error.message);
      } else {
        setProduct(data);
        setPrice(data.price); // 🔹 product kelgach price yangilanadi
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography color="gray" variant="h6">
          Mahsulot yuklanmoqda...
        </Typography>
      </Box>
    );
  }

  const handleAddBasket = () => setAdd((prev) => prev + 1);
  const handleRemoveBasket = () => setAdd((prev) => prev - 1);

  return (
    <Box>
      <MenuAppBar />
      <Container maxWidth="lg">
        <hr style={{ border: "1px solid #e53935", marginBottom: "20px" }} />

        <Box
          component={"img"}
          width={"100%"}
          height={"300px"}
          src={product.image_url}
          alt={product.name}
          sx={{ borderRadius: "12px", objectFit: "cover" }}
        />

        <Typography variant="h5" fontWeight={600} mt={1}>
          {product.name}
        </Typography>

        {product.rating && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              my: "10px",
            }}
          >
            <StarIcon sx={{ color: "gold" }} />
            <Typography color="gray">{product.rating}</Typography>
          </Box>
        )}

        <Typography color="gray" mt={1}>
          {product.description || "Bu mahsulot uchun tavsif mavjud emas."}
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 3,
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
              <Typography sx={{ color: "#EF2A39" }}>Hot</Typography>
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
              <Button
                sx={{
                  background: "#EF2A39",
                  color: "white",
                  "&:disabled": { background: "#ccc", color: "#666" },
                }}
                onClick={handleRemoveBasket}
                disabled={add < 2}
              >
                -
              </Button>
              <Typography>{add}</Typography>
              <Button
                sx={{ background: "#EF2A39", color: "white" }}
                onClick={handleAddBasket}
              >
                +
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
            mt: 3,
          }}
        >
          <Button
            sx={{ background: "#EF2A39", color: "white", padding: "5px 20px" }}
          >
            {price * add} so'm
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
