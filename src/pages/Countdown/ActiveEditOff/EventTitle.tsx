import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventTitle: React.FC = () => {
  const { events, displayEventIndex } = useCountdownContext();
  return <div className="text-lg sm:text-2xl">{events[displayEventIndex]?.eventTitle}</div>;
};

export default EventTitle;
