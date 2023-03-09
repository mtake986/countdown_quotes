import { TextField } from '@mui/material';
import React from 'react'
import { useQuoteContext } from '../../../../contexts/Quote/QuoteContext';

const MuiSpeakerNameTextField = () => {
  const { handleSpeakerNameInputText, speakerNameInputText } = useQuoteContext();
  return (
    <TextField
      id="outlined-basic"
      label="Who said this?"
      variant="outlined"
      className="w-full"
      value={speakerNameInputText}
      onChange={(e) => handleSpeakerNameInputText(e)}
    />
  );
}

export default MuiSpeakerNameTextField