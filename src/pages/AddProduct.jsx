import React, { useState } from "react";
import { supabase } from "../supabase/supaClient";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Paper,
  Stack,
} from "@mui/material";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    image_url: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const categories = ["Combos", "Pizza", "Burgers", "Lavash"];

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    if (
      !product.name ||
      !product.price ||
      !product.category ||
      !product.image_url ||
      !product.description
    ) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    setLoading(true);
    setSuccess("");

    const { error } = await supabase.from("products").insert([
      {
        name: product.name,
        price: Number(product.price),
        category: product.category,
        image_url: product.image_url,
        description: product.description,
        created_at: new Date(),
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Error:", error);
      alert("❌ Xatolik yuz berdi: " + error.message);
    } else {
      setSuccess("✅ Mahsulot muvaffaqiyatli qo‘shildi!");
      setProduct({
        name: "",
        price: "",
        category: "",
        image_url: "",
        description: "",
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f5f5f5"
    >
      <Paper elevation={4} sx={{ p: 4, width: 400, borderRadius: 3 }}>
        <Typography variant="h5" textAlign="center" mb={3} fontWeight="bold">
          🛒 Yangi Mahsulot Qo‘shish
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="Mahsulot nomi"
            name="name"
            value={product.name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Tavsif (Description)"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={product.description}
            onChange={handleChange}
          />

          <TextField
            label="Narxi"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            select
            label="Kategoriya"
            name="category"
            value={product.category}
            onChange={handleChange}
            fullWidth
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Rasm URL manzili"
            name="image_url"
            value={product.image_url}
            onChange={handleChange}
            fullWidth
          />

          <Button
            variant="contained"
            onClick={handleAddProduct}
            disabled={loading}
            sx={{
              bgcolor: "#e53935",
              "&:hover": { bgcolor: "#b71c1c" },
              color: "white",
              mt: 1,
            }}
          >
            {loading ? "⏳ Yuklanmoqda..." : "Qo‘shish"}
          </Button>

          {success && (
            <Typography color="green" textAlign="center">
              {success}
            </Typography>
          )}
        </Stack>
      </Paper>
    </Box>
  );
};

export default AddProduct;
