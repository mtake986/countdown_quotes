import React from "react";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import TextField from "@mui/material/TextField";

const EventDateInput: React.FC = () => {
  const { eventDateInputText, handleEventDateInputText } =
    useCountdownContext();

  return (
    <div>
      <DesktopDatePicker
        className="w-48"
        label="Event Date"
        inputFormat="MM/DD/YYYY"
        value={eventDateInputText}
        onChange={(date) => handleEventDateInputText(date)}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
};

export default EventDateInput;
