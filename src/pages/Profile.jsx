import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import React, { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { supabase } from "../supabase/supaClient";

const Profile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    }
    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  console.log(user);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "130px",
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px",
          background: "#EF2A39  ",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
            <Button>
              <ArrowBackIcon sx={{ color: "white" }} />
            </Button>
          </Link>
          <Typography paddingRight={"20px"} variant="h5" color="white">
            Profile
          </Typography>
        </Box>
        <Box
          component={"img"}
          src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
          sx={{
            width: "115px",
            height: "115px",
            borderRadius: "50%",
            position: "absolute",
            top: "75px",
            border: "4px solid #EF2A39",
            outline: "4px solid rgb(240, 240, 240)",
            boxShadow: "0px 0px 20px rgba(248, 3, 3, 0.81)",
          }}
        ></Box>
      </Box>
      <FormControl sx={{ width: "90%", margin: "80px auto", gap: "20px" }}>
        <TextField label={"UserName"} />
        <TextField label={"Email"} />
        <TextField label={"Password"} />
        <TextField label={"Delivery address"} />
      </FormControl>

      <hr style={{ width: "90%", margin: "0 auto" }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <Button
          sx={{
            width: "90%",
            margin: "0px auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
            color: "#808080",
          }}
        >
          Payment Details <ChevronRightIcon />
        </Button>
        <Button
          sx={{
            width: "90%",
            margin: "20px auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px 20px",
            color: "#808080",
          }}
        >
          Order history <ChevronRightIcon />
        </Button>
      </Box>
      <Button
        sx={{
          width: "90%",
          margin: "50px auto",
          background: "#EF2A39",
          color: "white",
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default Profile;
