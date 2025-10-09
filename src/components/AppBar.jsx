import { Avatar, Box, Button, Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { supabase } from "../supabase/supaClient";

const AppBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
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

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "user-popover" : undefined;

  async function handleLogout() {
    await supabase.auth.signOut();
    setUser(null);
    handleClose();
  }

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
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ color: "#e53935", fontWeight: "600" }}>
          ABC
        </Typography>
        <Typography sx={{ color: "gray", fontSize: "14px" }}>
          Order your favourite food!
        </Typography>
      </Box>
      {user ? (
        <>
          <Avatar
            sx={{ cursor: "pointer", bgcolor: "#EF2A39" }}
            onClick={handleClick}
            alt={user.user_metadata?.userName || user.email}
          >
            {user.user_metadata?.userName?.[0]?.toUpperCase() ||
              user.email?.[0]?.toUpperCase()}
          </Avatar>

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
                gap: "8px",
                padding: "10px",
                minWidth: "150px",
              }}
            >
              <Typography sx={{ px: "10px", color: "gray" }}>
                {user.email}
              </Typography>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/profile"
              >
                <Button fullWidth>Profile</Button>
              </Link>
              <Button color="error" fullWidth onClick={handleLogout}>
                Log Out
              </Button>
            </Box>
          </Popover>
        </>
      ) : (
        <Link
          to="/login"
          style={{ textDecoration: "none", color: "currentcolor" }}
        >
          <Button
            sx={{
              background: "white",
              border: "1px solid #EF2A39",
              color: "#EF2A39",
              boxShadow: "0px 0px 10px rgba(239, 42, 58, 0.27)",
              "&:hover": { background: "#EF2A39", color: "white" },
            }}
          >
            Login <LoginIcon sx={{ ml: 1 }} />
          </Button>
        </Link>
      )}
    </Box>
  );
};

export default AppBar;
