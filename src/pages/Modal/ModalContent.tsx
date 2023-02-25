import React from "react";
import { useQuoteContext } from "../../contexts/QuoteContext";
import { SelectType, ActionList } from "./index";
import GoPrev from "./GoPrev";

import { useModalContext } from "../../contexts/ModalContext";
const ModalContent = () => {
  const { selectTypeAndAct, currPageNum } = useModalContext();

  return (
    <div className="w-full">
      <div className="relative rounded-xl flex flex-col gap-4 items-center bg-sky-50 py-12">
        {currPageNum === 1 ? (
          <SelectType />
        ) : currPageNum === 2 ? (
          <div>welcome</div>
        ) : null}
        {currPageNum > 1 ? <GoPrev /> : null}
      </div>
    </div>
    // <div className="flex flex-col items-center justify-center sm:w-64">
    //   {currPageNum === 1 ? (
    //     <SelectType />
    //   ) : currPageNum === 2 ? (
    //     <div>welcome</div>
    //   ) : null}
    //   {currPageNum > 1 ? <GoPrev /> : null}
    // </div>
  );
};

export default ModalContent;
