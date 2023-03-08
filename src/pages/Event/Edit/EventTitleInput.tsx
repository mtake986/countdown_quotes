import TextField from "@mui/material/TextField";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

const EventTitleInput: React.FC = () => {
  const { displayEventIndex, events, handleChangeEventTitle } =
    useCountdownContext();

  return (
    <div>
      <TextField
        className="w-full"
        id="standard-basic"
        defaultValue={events[displayEventIndex]?.eventTitle}
        label="Event Title"
        variant="standard"
        onChange={(
          event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        ) => handleChangeEventTitle(event, displayEventIndex)}
      />
    </div>
  );
};

export default EventTitleInput;