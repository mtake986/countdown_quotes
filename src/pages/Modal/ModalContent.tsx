import React from "react";
import { useQuoteContext } from "../../contexts/QuoteContext";
import { SelectType, ActionList } from "./index";
import GoPrev from "./GoPrev";

import { useModalContext } from "../../contexts/ModalContext";
const ModalContent = () => {
  const { selectTypeAndAct, currPageNum } = useModalContext();

  return (
    <div className="flex flex-col items-center gap-6">
      {currPageNum === 1 ? (
        <SelectType />
      ) : currPageNum === 2 ? (
        <div>welcome</div>
      ) : null}
      {currPageNum > 1 ? <GoPrev /> : null}
    </div>
  );
};

export default ModalContent;
