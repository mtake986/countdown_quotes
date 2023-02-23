import TextField from "@mui/material/TextField";
import { useCountdownContext } from "../../../../contexts/CountdownContext";

const EventTitleInput: React.FC = () => {
  const { currEventTitle, handleEventTitleInputText } = useCountdownContext();

  return (
    <div>
      <TextField
        className="w-56"
        id="standard-basic"
        value={currEventTitle}
        label="Event Title"
        variant="standard"
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleEventTitleInputText(event)}
      />
    </div>
  );
};

export default EventTitleInput;
