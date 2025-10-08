import { Avatar, Box, Button, Popover, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
      <Avatar sx={{ cursor: "pointer" }} onClick={handleClick} />
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
