import { TextField } from '@mui/material';
import { IQuote } from '../../../../contexts/Quote/interface';
import { useQuoteContext } from '../../../../contexts/Quote/QuoteContext';

interface Props {
  speakerName: string;
}
const MuiSpeakerNameTextField = ({ speakerName } : Props) => {
  // todo: default alue isnt working,
  const { handleSpeakerNameInputText, myQuotes, currentQuoteIndex } =
    useQuoteContext();
  return (
    <TextField
      id="outlined-basic"
      label="Who said this?"
      variant="outlined"
      className="w-full"
      defaultValue={speakerName}
      onChange={(e) => handleSpeakerNameInputText(e)}
    />
  );
};

export default MuiSpeakerNameTextField