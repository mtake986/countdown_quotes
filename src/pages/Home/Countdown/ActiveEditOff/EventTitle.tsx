import React from "react";
import { useCountdownContext } from "../../../../contexts/Countdown/CountdownContext";

const EventTitle: React.FC = () => {
  const { myEvents, displayEventIndex } = useCountdownContext();
  return (
    <div className="text-lg sm:text-2xl text-center">
      {myEvents[displayEventIndex]?.eventTitle}
    </div>
  );
};

export default EventTitle;
