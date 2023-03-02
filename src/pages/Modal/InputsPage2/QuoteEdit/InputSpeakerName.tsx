import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const InputSpeakerName: React.FC = () => {
  const { handleSpeakerNameInputText, speakerNameInputText, myQuotes } =
    useQuoteContext();

  return (
    <div>
      <TextField
        className="w-48"
        id="standard-basic"
        defaultValue={myQuotes[0]?.speakerName}
        label="Speaker Name"
        variant="standard"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleSpeakerNameInputText(e)}
      />
    </div>
  );
};

export default InputSpeakerName;
