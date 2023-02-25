import TextField from "@mui/material/TextField";
import { useCountdownContext } from "../../../../contexts/CountdownContext";

const EventTitleInput: React.FC = () => {
  const { currEventTitle, handleEventTitleInputText } = useCountdownContext();

  return (
    <div>
      <TextField
        className="w-40"
        id="standard-basic"
        defaultValue=""
        label="Type in an event"
        variant="standard"
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleEventTitleInputText(event)}
      />
    </div>
  );
};

export default EventTitleInput;
