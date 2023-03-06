import React from "react";
import { useCountdownContext } from "../../../../contexts/Countdown/CountdownContext";

const EventDate: React.FC = () => {
  const { events, displayEventIndex } = useCountdownContext();

  return (
    <div className="w-full text-right text-xs">
      {events[0].eventDate
        .toLocaleString()
        .substring(0, events[0].eventDate.toLocaleString().indexOf(","))}
    </div>
  );
};

export default EventDate;
