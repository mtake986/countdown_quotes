import { TextField } from "@mui/material";
import React from "react";
import { IQuote } from "../../../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const MuiQuoteTextField = () => {
  const { filterMyQuotesProperties, handleFilterMyQuotesProperties } =
    useQuoteContext();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Your Favorite Quote"
        variant="outlined"
        className="w-full"
        defaultValue={filterMyQuotesProperties.quoteText}
        onChange={(e) =>
          handleFilterMyQuotesProperties("quoteText", e.target.value)
        }
      />
    </>
  );
};

export default MuiQuoteTextField;
