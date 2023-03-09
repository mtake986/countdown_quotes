import { TextField } from '@mui/material';
import { IQuote } from '../../../../contexts/Quote/interface';
import { useQuoteContext } from '../../../../contexts/Quote/QuoteContext';

const MuiSpeakerNameTextField = () => {

  // todo: default alue isnt working,  
  const { handleSpeakerNameInputText, myQuotes, currentQuoteIndex } =
    useQuoteContext();
  return (
    <TextField
      id="outlined-basic"
      label="Who said this?"
      variant="outlined"
      className="w-full"
      defaultValue={myQuotes[currentQuoteIndex].speakerName}
      onChange={(e) => handleSpeakerNameInputText(e)}
    />
  );
}

export default MuiSpeakerNameTextField