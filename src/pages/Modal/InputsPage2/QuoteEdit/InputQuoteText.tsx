import React from "react";

import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/QuoteContext";

const InputQuoteText: React.FC = () => {
  const { myQuotes, handleQuoteInputs } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-48"
        id="standard-basic"
        label="Quote"
        defaultValue={myQuotes[0]?.quoteText}
        variant="standard"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleQuoteInputs(e, "quoteText")}
      />
    </div>
  );
};

export default InputQuoteText;
