import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventDate: React.FC = () => {
  const { events, displayEventIndex } = useCountdownContext();

  return (
    <div className="absolute bottom-0 right-0 p-5 text-xs">
      <span>{events[displayEventIndex]?.eventDate["$d"]?.getMonth() + 1}/</span>
      <span>{events[displayEventIndex]?.eventDate["$d"]?.getDate()}, </span>
      <span>{events[displayEventIndex]?.eventDate["$d"]?.getFullYear()}</span>
    </div>
  );
};

export default EventDate;
