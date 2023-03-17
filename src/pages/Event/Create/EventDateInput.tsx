import React from "react";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";
import { DatePicker } from "@mui/x-date-pickers";

import TextField from "@mui/material/TextField";

const EventDateInput: React.FC = () => {
  const { myEvents, eventDateInputText, handleEventDateInputText } =
    useCountdownContext();

  return (
    <DatePicker
      label="Event Date"
      value={
        eventDateInputText
          ? eventDateInputText
          : myEvents[0]?.eventDate
          ? myEvents[0]?.eventDate
          : new Date()
      }
      onChange={(date) => handleEventDateInputText(date)}
      renderInput={(params) => <TextField {...params} />}
    />
  );
};

export default EventDateInput;
