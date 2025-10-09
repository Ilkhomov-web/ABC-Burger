import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/back.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "-100px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backdropFilter: "blur(5px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FormControl
          sx={{
            background: "rgba(255, 255, 255, 0.27)",
            padding: "20px",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", color: "white" }}
            variant="h4"
            marginBottom={"20px"}
          >
            Login
          </Typography>
          <TextField label="Email" />
          <TextField label="Password" />
          <Button>Login</Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
