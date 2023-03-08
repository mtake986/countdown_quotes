import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { IQuote } from "../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";


interface Props {
  quote: IQuote;
}

const InputSpeakerName: React.FC<Props> = ({quote}) => {
  const {
    handleSpeakerNameInputText,
  } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-full"
        id="standard-basic"
        defaultValue={quote?.speakerName}
        label="Speaker Name"
        variant="standard"
        onChange={(
          e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleSpeakerNameInputText(e, "edit")}
      />
    </div>
  );
};

export default InputSpeakerName;