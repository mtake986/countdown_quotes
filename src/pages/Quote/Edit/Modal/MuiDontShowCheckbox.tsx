import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const MuiDontShowCheckbox = () => {
  const { handleInputDontShow, inputDontShow, myQuotes, currentQuoteIndex } =
    useQuoteContext();
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => handleInputDontShow()}
            defaultChecked={myQuotes[currentQuoteIndex].dontShow}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Don't show"
      />
    </>
  );
};

export default MuiDontShowCheckbox;
