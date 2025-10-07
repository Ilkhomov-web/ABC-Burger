import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const AppBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 22px",
        position: "sticky",
        top: "0",
        background: "white",
        zIndex: "100",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ color: "#e53935", fontWeight: "600" }}>
          ABC
        </Typography>
        <Typography sx={{ color: "gray" }}>
          Order your favourite food!
        </Typography>
      </Box>
      <Avatar />
    </Box>
  );
};

export default AppBar;
