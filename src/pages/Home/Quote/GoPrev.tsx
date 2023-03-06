import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IconButton } from "@mui/material";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const GoPrev = () => {
  const { handleChangeCurrentQuoteIndex } = useQuoteContext();

  return (
    <IconButton
      className="w-8 h-8 duration-300"
      onClick={() => handleChangeCurrentQuoteIndex("prev")}
    >
      <IoIosArrowBack className="text-sm cursor-pointer" />
    </IconButton>
  );
};

export default GoPrev;
