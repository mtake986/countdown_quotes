import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IconButton } from "@mui/material";
import { useQuoteContext } from "../../contexts/Quote/QuoteContext";


const GoNext = () => {
  const { handleChangeCurrentQuoteIndex } =
    useQuoteContext();

  return (
    <IconButton
      className="w-8 h-8 duration-300"
      onClick={() => handleChangeCurrentQuoteIndex("next")}
    >
      <IoIosArrowForward className="text-sm cursor-pointer" />
    </IconButton>
  );
};

export default GoNext;
