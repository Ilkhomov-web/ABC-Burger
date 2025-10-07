import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, Button } from "@mui/material";

const Filter = (prop) => {
  const { id, handleClick } = prop;
  return (
    <Button
      aria-describedby={id}
      onClick={handleClick}
      sx={{
        width: "60px",
        height: "40px",
        background: "#e53935",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        cursor: "pointer",
      }}
    >
      <TuneIcon sx={{ color: "white" }} />
    </Button>
  );
};

export default Filter;
