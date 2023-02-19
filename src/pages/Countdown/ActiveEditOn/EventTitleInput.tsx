
import TextField from "@mui/material/TextField";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventTitleInput: React.FC = () => {
  const { eventTitle, handleEventTitle } = useCountdownContext();

  return (
    <div>
      <TextField
        id="standard-basic"
        placeholder={eventTitle}
        label="Event Title"
        variant="standard"
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleEventTitle(event)}
      />
    </div>
  );
};

export default EventTitleInput;
