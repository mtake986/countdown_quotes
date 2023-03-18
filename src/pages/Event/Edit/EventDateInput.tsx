import React, { useState } from "react";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";

const EventDateInput: React.FC = () => {
  const { myEvents, eventDateInputText, handleEventDateInputText } =
    useCountdownContext();

  return (
    <div>
      <DatePicker
        className="w-full"
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
    </div>
  );
};

export default EventDateInput;
