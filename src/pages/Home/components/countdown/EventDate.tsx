import React, { useState } from "react";
import { useCountdownContext } from "../../../../contexts/CountdownContext";
type Props = {
  activeEdit: boolean;
};

const EventDate: React.FC<Props> = ({ activeEdit }) => {

  const { eventDate, handleEventDate } = useCountdownContext()
  return (
    <div>
      {activeEdit ? (
        <input
          type="date"
          onChange={(e) => handleEventDate(e)}
        />
      ) : (
        <div>{eventDate}</div>
      )}
    </div>
  );
};

export default EventDate;
