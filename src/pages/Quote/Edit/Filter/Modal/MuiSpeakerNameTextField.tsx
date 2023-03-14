import { TextField } from '@mui/material';
import { useQuoteContext } from '../../../../../contexts/Quote/QuoteContext';

const MuiSpeakerNameTextField = () => {

  // todo: default alue isnt working,  
  const { filterProperties, handleFilterProperties } = useQuoteContext();
  return (
    <TextField
      id="outlined-basic"
      label="Who said this?"
      variant="outlined"
      className="w-full"
      defaultValue={filterProperties.speakerName}
      onChange={(e) => handleFilterProperties("speakerName", e.target.value)}
    />
  );
}

export default MuiSpeakerNameTextField