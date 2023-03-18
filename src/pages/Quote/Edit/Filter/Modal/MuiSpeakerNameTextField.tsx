import { TextField } from "@mui/material";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const MuiSpeakerNameTextField = () => {
  // todo: default alue isnt working,
  const { filterMyQuotesProperties, handleFilterMyQuotesProperties } =
    useQuoteContext();
  return (
    <TextField
      id="outlined-basic"
      label="Who said this?"
      variant="outlined"
      className="w-full"
      defaultValue={filterMyQuotesProperties.speakerName}
      onChange={(e) =>
        handleFilterMyQuotesProperties("speakerName", e.target.value)
      }
    />
  );
};

export default MuiSpeakerNameTextField;
