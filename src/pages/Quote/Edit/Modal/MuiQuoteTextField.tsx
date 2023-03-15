import { TextField } from "@mui/material";
import React from "react";
import { IQuote } from "../../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

interface Props {
  quoteText: string;
}
const MuiQuoteTextField = ({ quoteText }: Props) => {
  const { myQuotes, currentQuoteIndex, handleQuoteTextInputText } =
    useQuoteContext();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Your Favorite Quote"
        variant="outlined"
        className="w-full"
        defaultValue={quoteText}
        onChange={(e) => handleQuoteTextInputText(e)}
      />
    </>
  );
};

export default MuiQuoteTextField;
