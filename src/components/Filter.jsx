import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { Box } from "@mui/material";

const Filter = () => {
  return (
    <Box
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
    </Box>
  );
};

export default Filter;
