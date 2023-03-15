import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const MuiDontShowCheckbox = () => {
  const { handleInputDontShow, inputDontShow } = useQuoteContext();
  return (
    <FormControlLabel
      control={
        <Checkbox
          onChange={() => handleInputDontShow()}
          defaultChecked={false}
          inputProps={{ "aria-label": "controlled" }}
        />
      }
      label="Don't show"
    />
  );
};

export default MuiDontShowCheckbox;
