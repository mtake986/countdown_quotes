import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const MuiDontShowCheckbox = () => {
  const { handleFilterProperties, filterProperties } = useQuoteContext();
    
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            onChange={() => handleFilterProperties("dontShow")}
            defaultChecked={filterProperties.dontShow}
            inputProps={{ "aria-label": "controlled" }}
          />
        }
        label="Don't show"
      />
    </>
  );
};

export default MuiDontShowCheckbox;
