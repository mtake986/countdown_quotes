import React from "react";
import { useCountdownContext } from "../../../../contexts/Countdown/CountdownContext";

const EventDate: React.FC = () => {
  const { myEvents, displayEventIndex } = useCountdownContext();

  return (
    <div className="w-full text-right text-xs">
      {myEvents[0].eventDate
        .toLocaleString()
        .substring(0, myEvents[0].eventDate.toLocaleString().indexOf(","))}
    </div>
  );
};

export default EventDate;
