import { TextField } from "@mui/material";
import React from "react";
import { IQuote } from "../../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const MuiQuoteTextField = () => {

  const { myQuotes, currentQuoteIndex, handleQuoteTextInputText } =
    useQuoteContext();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Your Favorite Quote"
        variant="outlined"
        className="w-full"
        defaultValue={myQuotes[currentQuoteIndex].quoteText}
        onChange={(e) => handleQuoteTextInputText(e)}
      />
    </>
  );
};

export default MuiQuoteTextField;
