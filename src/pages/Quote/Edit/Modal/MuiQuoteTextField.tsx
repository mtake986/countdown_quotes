import { TextField } from '@mui/material';
import React from 'react'
import { useQuoteContext } from '../../../../contexts/Quote/QuoteContext';

const MuiQuoteTextField = () => {
  const { quoteTextInputText, handleQuoteTextInputText } = useQuoteContext();
  return (
    <TextField
      id="outlined-basic"
      label="Your Favorite Quote"
      variant="outlined"
      className="w-full"
      value={quoteTextInputText}
      onChange={(e) => handleQuoteTextInputText(e)}
    />
  );
}

export default MuiQuoteTextField