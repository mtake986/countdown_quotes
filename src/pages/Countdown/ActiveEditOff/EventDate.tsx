import React from "react";
import { useCountdownContext } from "../../../contexts/CountdownContext";

const EventDate: React.FC = () => {
  const { currEventDate } = useCountdownContext();

  return (
    <div>
      <span>{currEventDate["$d"].getMonth() + 1}/</span>
      <span>{currEventDate["$d"].getDate()}, </span>
      <span>{currEventDate["$d"].getFullYear()}</span>
    </div>
  );
};

export default EventDate;
