import { TextField } from "@mui/material";
import React from "react";
import { IQuote } from "../../../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const MuiQuoteTextField = () => {

  const { filterProperties, handleFilterProperties } = useQuoteContext();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Your Favorite Quote"
        variant="outlined"
        className="w-full"
        defaultValue={filterProperties.quoteText}
        onChange={(e) => handleFilterProperties("quoteText", e.target.value)}
      />
    </>
  );
};

export default MuiQuoteTextField;
