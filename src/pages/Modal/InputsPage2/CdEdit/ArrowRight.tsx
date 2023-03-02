import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useCountdownContext } from "../../../../contexts/Countdown/CountdownContext";

const ArrowRight = () => {
  const { handleDisplayEvent } = useCountdownContext();

  return (
    <IoIosArrowForward
      className="text-2xl cursor-pointer"
      onClick={() => handleDisplayEvent("next")}
    />
  );
};

export default ArrowRight;
