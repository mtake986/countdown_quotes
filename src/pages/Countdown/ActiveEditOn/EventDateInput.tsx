import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import TextField from "@mui/material/TextField";

const EventTitleInput: React.FC = () => {
  const { eventDate, handleEventDate } = useCountdownContext();

  return (
    <div>
      <DesktopDatePicker
        label="Event Date"
        inputFormat="MM/DD/YYYY"
        value={eventDate}
        onChange={(date) => handleEventDate(date)}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
};

export default EventTitleInput;
