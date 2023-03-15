import * as React from "react";
import Button from "@mui/material/Button";
import MuiModal from "./Modal/MuiModal";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {filterProperties} = useQuoteContext();
  return (
    <div>
      {filterProperties.quoteText === "" &&
      filterProperties.speakerName === "" &&
      filterProperties.dontShow === "Both" ? (
        <Button
          variant="outlined"
          className="w-full cursor-pointer hover:bg-sky-300 duration-200"
          onClick={handleOpen}
        >
          Filter: OFF
        </Button>
      ) : (
        <Button
          variant="outlined"
          className="w-full cursor-pointer hover:bg-sky-300 duration-200"
          onClick={handleOpen}
        >
          Filter: ON
        </Button>
      )}

      <MuiModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Filter;
