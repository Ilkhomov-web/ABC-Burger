import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { supabase } from "../supabase/supaClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSignUp() {
    try {
      setLoading(true);
      setErrorMsg("");
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { userName },
        },
      });

      if (error) throw error;
      console.log("✅ User created:", data.user);
      alert("Emailingizga tasdiqlash xati yuborildi ✅");
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }

    navigate("/home");
  }

  async function handleLogin() {
    try {
      setLoading(true);
      setErrorMsg("");
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      alert("Kirish muvaffaqiyatli ✅");
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }

    navigate("/home");
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: "url(/back.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            width: "320px",
          }}
        >
          <Typography
            sx={{ textAlign: "center", color: "white" }}
            variant="h4"
            marginBottom={"20px"}
          >
            {signUp ? "Sign Up" : "Login"}
          </Typography>

          {signUp && (
            <TextField
              label="UserName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              InputProps={{ style: { color: "white" } }}
            />
          )}

          <TextField
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{ style: { color: "white" } }}
          />
          <TextField
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{ style: { color: "white" } }}
          />

          {errorMsg && (
            <Typography sx={{ color: "red", fontSize: "14px" }}>
              ⚠️ {errorMsg}
            </Typography>
          )}

          <Button
            sx={{ background: "#EF2A39", color: "white" }}
            onClick={signUp ? handleSignUp : handleLogin}
            disabled={loading}
          >
            {loading ? "Loading..." : signUp ? "Sign Up" : "Login"}
          </Button>

          <Box sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <Typography sx={{ color: "gray" }}>
              {signUp ? "Already have an account?" : "Not a member?"}
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
