import React from "react";
import { useCountdownContext } from "../../../../contexts/CountdownContext";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import TextField from "@mui/material/TextField";

const EventDateInput: React.FC = () => {
  const { currEventDate, eventDateInputText, handleEventDateInputText } =
    useCountdownContext();

  return (
    <div>
      <DesktopDatePicker
        label="Event Date"
        inputFormat="MM/DD/YYYY"
        value={currEventDate}
        onChange={(date) => handleEventDateInputText(date)}
        renderInput={(params) => <TextField {...params} />}
      />
    </div>
  );
};

export default EventDateInput;
