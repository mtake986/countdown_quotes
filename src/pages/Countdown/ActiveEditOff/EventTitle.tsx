import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventTitle: React.FC = () => {
  const { currEventTitle } = useCountdownContext();
  return <div className="text-lg sm:text-2xl">{currEventTitle}</div>;
};

export default EventTitle;
