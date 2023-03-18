// import { Checkbox, FormControlLabel } from "@mui/material";
// import React from "react";
// import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

// const MuiDontShowCheckbox = () => {
//   const { handleFilterProperties, filterProperties } = useQuoteContext();

//   return (
//     <>
//       <FormControlLabel
//         control={
//           <Checkbox
//             onChange={() => handleFilterProperties("dontShow")}
//             defaultChecked={filterProperties.dontShow}
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
  const { handleFilterProperties, filterProperties } =
    useQuoteContext();
  const handleChange = (event: SelectChangeEvent) => {
    handleFilterProperties('dontShow', event.target.value as string);
  };
  return (
    <Box className="w-full">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Don't Show</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterProperties.dontShow}
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
