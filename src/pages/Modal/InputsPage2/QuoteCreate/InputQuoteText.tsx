import React from "react";

import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/QuoteContext";

const InputQuoteText: React.FC = () => {
  const { quoteInput, handleQuoteInputs } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-48"
        id="standard-basic"
        label="Quote"
        value={quoteInput?.quoteText}
        variant="standard"
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleQuoteInputs(event, "quoteText")}
      />
    </div>
  );
};

export default InputQuoteText;
