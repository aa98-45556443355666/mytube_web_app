import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { color } from "@mui/system";
const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
        <input
        className="search-bar"
        placeholder="Search...."
        value=""
        onChange={()=>{}}
        />
        <IconButton
         type="submit"
         sx={{
            p:'12px',
            color:'black'
         }}
        >
         <SearchIcon/>
        </IconButton>
    </Paper>
  );
};

export default SearchBar;
