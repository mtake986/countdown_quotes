import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const MuiSpeakerNameTextField: React.FC = () => {
  const { handleSpeakerNameInputText, speakerNameInputText } =
    useQuoteContext();

  return (
      <TextField
        className="w-full"
        id="outlined-basic"
        value={speakerNameInputText}
        label="Who said this?"
        variant="outlined"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleSpeakerNameInputText(e)}
      />
  );
};

export default MuiSpeakerNameTextField;
