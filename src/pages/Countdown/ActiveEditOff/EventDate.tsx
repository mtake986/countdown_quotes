import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventDate: React.FC = () => {
  const { events, displayEventIndex } = useCountdownContext();

  return (
    <div className="absolute bottom-5 right-5 text-xs">
      {events[0].eventDate
        .toLocaleString()
        .substring(0, events[0].eventDate.toLocaleString().indexOf(","))}
    </div>
  );
};

export default EventDate;
