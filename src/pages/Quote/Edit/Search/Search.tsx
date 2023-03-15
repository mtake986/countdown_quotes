import { TextField, Box, InputAdornment } from "@mui/material";
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <TextField
      id="input-with-icon-textfield"
      label="Search"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <AiOutlineSearch className=""/>
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
}

export default Search