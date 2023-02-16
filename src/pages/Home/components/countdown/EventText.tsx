import React, { useState } from "react";

type Props = {
  activeEdit: boolean;
};

const EventText: React.FC<Props> = ({ activeEdit }) => {
  const [eventText, setEventText] = useState<string>("event");

  return (
    <div>
      {activeEdit ? (
        <input
          type="text"
          placeholder="Enter an event name..."
          onChange={(e) => setEventText(e.target.value)}
        />
      ) : (
        <div>{eventText}</div>
      )}
    </div>
  );
};

export default EventText;
