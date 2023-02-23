import React from "react";
import { useQuoteContext } from "../../contexts/QuoteContext";
import { SelectType, Actions } from "./index";
import GoPrev from "./GoPrev";

import { useModalContext } from "../../contexts/ModalContext";
const ModalContent = () => {
  const { selectedType, currPageNum } = useModalContext();

  return (
    <div className="flex flex-col items-center gap-6">
      {currPageNum === 1 ? (
        <SelectType />
      ) : currPageNum === 2 ? (
        <Actions />
      ) : null}
      {currPageNum > 1 ? <GoPrev /> : null}
    </div>
  );
};

export default ModalContent;
