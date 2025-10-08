import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Profile = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default Profile;
