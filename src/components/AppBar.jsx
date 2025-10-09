import { Avatar, Box, Button, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

const AppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isUser, setIsUser] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
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
      {(isUser && (
        <Avatar sx={{ cursor: "pointer" }} onClick={handleClick} />
      )) || (
        <Link
          to={"/login"}
          style={{ textDecoration: "none", color: "currentcolor" }}
        >
          <Button
            sx={{
              background: "white",
              border: "1px solid #EF2A39",
              color: "#EF2A39",
              boxShadow: "0px 0px 10px rgba(239, 42, 58, 0.27)",
            }}
          >
            Login <LoginIcon />
          </Button>
        </Link>
      )}
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
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "10px",
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/profile"
          >
            <Button>Profile</Button>
          </Link>
          <Button>Log Out</Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default AppBar;
