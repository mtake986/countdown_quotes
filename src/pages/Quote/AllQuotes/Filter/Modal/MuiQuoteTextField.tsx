import { TextField } from "@mui/material";
import React from "react";
import { IQuote } from "../../../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const MuiQuoteTextField = () => {
  const { filterAllQuotesProperties, handleFilterAllQuotesProperties } =
    useQuoteContext();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Your Favorite Quote"
        variant="outlined"
        className="w-full"
        defaultValue={filterAllQuotesProperties.quoteText}
        onChange={(e) =>
          handleFilterAllQuotesProperties("quoteText", e.target.value)
        }
      />
    </>
  );
};

export default MuiQuoteTextField;
