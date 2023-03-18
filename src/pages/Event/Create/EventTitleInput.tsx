import TextField from "@mui/material/TextField";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

const EventTitleInput: React.FC = () => {
  const { handleEventTitleInputText } = useCountdownContext();

  return (
    <TextField
      className="w-full"
      id="standard-basic"
      defaultValue=""
      label="Event Title"
      variant="standard"
      onChange={(
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
      ) => handleEventTitleInputText(event)}
    />
  );
};

export default EventTitleInput;
