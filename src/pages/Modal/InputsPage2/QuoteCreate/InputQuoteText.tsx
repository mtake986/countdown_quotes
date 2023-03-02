import React from "react";

import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const InputQuoteText: React.FC = () => {
  const { handleQuoteTextInputText, quoteTextInputText } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-48"
        id="standard-basic"
        label="Quote"
        value={quoteTextInputText}
        variant="standard"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleQuoteTextInputText(e)}
      />
    </div>
  );
};

export default InputQuoteText;
