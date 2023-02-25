import TextField from "@mui/material/TextField";
import { useQuoteContext } from "../../../../contexts/QuoteContext";

const InputAuthor: React.FC = () => {
  const {  } = useQuoteContext();

  return (
    <div>
      <TextField
        className="w-40"
        id="standard-basic"
        defaultValue=""
        label="Who said the quote?"
        variant="standard"
        // onChange={(
        //   event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        // ) => handleEventTitleInputText(event)}
      />
    </div>
  );
};

export default InputAuthor;
