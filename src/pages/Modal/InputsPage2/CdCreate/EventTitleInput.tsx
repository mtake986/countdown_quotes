import TextField from "@mui/material/TextField";
import { useCountdownContext } from "../../../../contexts/CountdownContext";

const EventTitleInput: React.FC = () => {
  const { handleEventTitleInputText } = useCountdownContext();

  return (
    <div>
      <TextField
        className="w-48"
        id="standard-basic"
        defaultValue=""
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
