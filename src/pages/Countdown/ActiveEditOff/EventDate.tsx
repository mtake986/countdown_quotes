import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventDate: React.FC = () => {
  const { eventDate } = useCountdownContext();

  return (
    <div>
      <span>{eventDate["$d"].getMonth() + 1}/</span>
      <span>{eventDate["$d"].getDate()}, </span>
      <span>{eventDate["$d"].getFullYear()}</span>
    </div>
  );
};

export default EventDate;
