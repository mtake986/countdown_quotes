import React from "react";
import CdBtns from "./Cd/CdBtns";
import QuoteBtns from "./Quote/QuoteBtns";

const SelectType = () => {
  return (
    <div className="gap-6 flex flex-col">
      <CdBtns />
      <QuoteBtns />
    </div>
  );
};

export default SelectType;
