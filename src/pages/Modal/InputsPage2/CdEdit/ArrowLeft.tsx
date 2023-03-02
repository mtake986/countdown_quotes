import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useCountdownContext } from "../../../../contexts/Countdown/CountdownContext";

const ArrowLeft = () => {
  const { handleDisplayEvent } = useCountdownContext();

  return (
    <IoIosArrowBack
      className="text-2xl cursor-pointer"
      onClick={() => handleDisplayEvent("prev")}
    />
  );
};

export default ArrowLeft;
