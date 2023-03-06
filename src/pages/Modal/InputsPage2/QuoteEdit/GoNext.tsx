import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IconButton } from "@mui/material";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const GoNext = () => {
  const { handleChangeCurrentQuoteIndex } =
    useQuoteContext();

  return (
    <IconButton onClick={() => handleChangeCurrentQuoteIndex("next")}>
      <IoIosArrowForward className="text-sm cursor-pointer" />
    </IconButton>
  );
};

export default GoNext;
