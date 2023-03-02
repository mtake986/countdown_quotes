import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const InputSpeakerName: React.FC = () => {
  const { quoteInput, handleQuoteInputs } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-48"
        id="standard-basic"
        value={quoteInput?.speakerName}
        label="Speaker Name"
        variant="standard"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleQuoteInputs(e, "name")}
      />
    </div>
  );
};

export default InputSpeakerName;
