import { Box, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = (prop) => {
  const { setSearchTerm, searchTerm } = prop;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#white",
        borderRadius: "8px",
        padding: "4px 8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <SearchIcon sx={{ color: "gray", mr: 1 }} />
      <TextField
        placeholder="Search"
        variant="standard"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          flex: 1,
          "& .MuiInputBase-input": {
            padding: 0,
            fontSize: "14px",
          },
        }}
      />
    </Box>
  );
};

export default Search;
