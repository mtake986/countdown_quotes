import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

interface Props {
  dontShow: boolean;
}
const MuiDontShowCheckbox = ({ dontShow } : Props) => {
  const { handleInputDontShow, inputDontShow, myQuotes, currentQuoteIndex } =
    useQuoteContext();
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => handleInputDontShow()}
            defaultChecked={dontShow ? true : false}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Don't show"
      />
    </>
  );
};

export default MuiDontShowCheckbox;
