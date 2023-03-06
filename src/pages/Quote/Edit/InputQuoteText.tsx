import React from "react";

import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

import { IQuote } from "../../../contexts/Quote/interface";

interface Props {
  quote: IQuote
}
const InputQuoteText: React.FC<Props> = ({quote}) => {
  const { currentQuoteIndex, myQuotes, handleQuoteTextInputText, quoteTextInputText } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-full"
        id="standard-basic"
        label="Quote"
        defaultValue={quote?.quoteText}
        variant="standard"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleQuoteTextInputText(e, "edit")}
      />
    </div>
  );
};

export default InputQuoteText;
