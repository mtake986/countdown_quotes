import React from "react";

import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const MuiQuoteTextField: React.FC = () => {
  const { handleQuoteTextInputText, quoteTextInputText } = useQuoteContext();

  return (
    <TextField
      className="w-full"
      id="outlined-basic"
      label="Your Favorite Quote"
      value={quoteTextInputText}
      variant="outlined"
      onChange={(
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => handleQuoteTextInputText(e)}
    />
  );
};

export default MuiQuoteTextField;
