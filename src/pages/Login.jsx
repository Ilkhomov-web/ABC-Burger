import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const [signUp, setSignUp] = useState(false);

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
            gap: "20px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", color: "white" }}
            variant="h4"
            marginBottom={"20px"}
          >
            {signUp ? "Sign Up" : "Login"}
          </Typography>

          {signUp ? (
            <>
              <TextField label="UserName" type="text" />
              <TextField type="email" label="Email" />
              <TextField type="password" label="Password" />
            </>
          ) : (
            <>
              <TextField type="email" label="Email" />
              <TextField type="password" label="Password" />
            </>
          )}

          <Button sx={{ background: "#EF2A39", color: "white" }}>
            {signUp ? "Sign Up" : "Login"}
          </Button>

          <Box sx={{ display: "flex", justifyContent: "left", gap: "10px" }}>
            <Typography sx={{ color: "gray" }}>
              {signUp ? "Already have an account?" : "Not a Member?"}
            </Typography>
            <Typography
              onClick={() => setSignUp(!signUp)}
              sx={{ color: "#EF2A39", fontWeight: "600", cursor: "pointer" }}
            >
              {signUp ? "Login" : "Sign Up"}
            </Typography>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Login;
