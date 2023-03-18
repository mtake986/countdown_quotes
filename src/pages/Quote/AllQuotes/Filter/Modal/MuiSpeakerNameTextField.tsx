import { TextField } from "@mui/material";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const MuiSpeakerNameTextField = () => {
  // todo: default alue isnt working,
  const { filterAllQuotesProperties, handleFilterAllQuotesProperties } =
    useQuoteContext();
  return (
    <TextField
      id="outlined-basic"
      label="Who said this?"
      variant="outlined"
      className="w-full"
      defaultValue={filterAllQuotesProperties.speakerName}
      onChange={(e) =>
        handleFilterAllQuotesProperties("speakerName", e.target.value)
      }
    />
  );
};

export default MuiSpeakerNameTextField;
