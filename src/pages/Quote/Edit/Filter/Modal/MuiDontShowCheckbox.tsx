// import { Checkbox, FormControlLabel } from "@mui/material";
// import React from "react";
// import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

// const MuiDontShowCheckbox = () => {
//   const { handleFilterMyQuotesProperties, filterMyQuotesProperties } = useQuoteContext();

//   return (
//     <>
//       <FormControlLabel
//         control={
//           <Checkbox
//             onChange={() => handleFilterMyQuotesProperties("dontShow")}
//             defaultChecked={filterMyQuotesProperties.dontShow}
//             inputProps={{ "aria-label": "controlled" }}
//           />
//         }
//         label="Don't show"
//       />
//     </>
//   );
// };

// export default MuiDontShowCheckbox;

import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const MuiDontShowCheckbox = () => {
  const { handleFilterMyQuotesProperties, filterMyQuotesProperties } =
    useQuoteContext();
  const handleChange = (event: SelectChangeEvent) => {
    handleFilterMyQuotesProperties("dontShow", event.target.value as string);
  };
  return (
    <Box className="w-full">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Don't Show</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterMyQuotesProperties.dontShow}
          label="Don't Show"
          onChange={handleChange}
        >
          <MenuItem value="Both">Both</MenuItem>
          <MenuItem value="Off">Off</MenuItem>
          <MenuItem value="On">On</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default MuiDontShowCheckbox;
