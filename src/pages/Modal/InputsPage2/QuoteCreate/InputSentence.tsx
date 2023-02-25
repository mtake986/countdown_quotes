import React from "react";

import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/QuoteContext";

const InputSentence: React.FC = () => {
  const {  } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-40"
        id="standard-basic"
        defaultValue=""
        label="Type in your favorite quote."
        variant="standard"
        // onChange={(
        //   event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        // ) => handleEventTitleInputText(event)}
      />
    </div>
  );
};

export default InputSentence;
