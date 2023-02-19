import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventTitle: React.FC = () => {
  const { eventTitle } = useCountdownContext();

  return <div>{eventTitle}</div>;
};

export default EventTitle;
