import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const InputSpeakerName: React.FC = () => {
  const { handleSpeakerNameInputText, speakerNameInputText } =
    useQuoteContext();

  return (
    <div>
      <TextField
        className="w-48"
        id="standard-basic"
        value={speakerNameInputText}
        label="Speaker Name"
        variant="standard"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        ) => handleSpeakerNameInputText(e, "create")}
      />
    </div>
  );
};

export default InputSpeakerName;
