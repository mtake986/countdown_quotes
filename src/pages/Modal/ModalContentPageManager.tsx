import React from "react";
import { useQuoteContext } from "../../contexts/QuoteContext";
import { SelectType, CdEdit, CdCreate } from "./index";
import GoPrev from "./GoPrev";

import { useModalContext } from "../../contexts/ModalContext";
import QuoteCreate from "./InputsPage2/QuoteCreate/QuoteCreate";
import QuoteEdit from "./InputsPage2/QuoteEdit/QuoteEdit";
const ModalContentPageManager = () => {
  const { selectedTypeAndAct, currPageNum } = useModalContext();

  return (
    <div className="w-72">
      <div className="relative rounded-xl flex flex-col gap-4 items-center p-8">
        {currPageNum === 1 ? (
          <SelectType />
        ) : currPageNum === 2 ? (
          selectedTypeAndAct?.type === "cd" &&
          selectedTypeAndAct?.act === "edit" ? (
            <CdEdit />
          ) : selectedTypeAndAct?.type === "cd" &&
            selectedTypeAndAct?.act === "create" ? (
            <CdCreate />
          ) : selectedTypeAndAct?.type === "q" &&
            selectedTypeAndAct?.act === "edit" ? (
            <QuoteEdit />
          ) : selectedTypeAndAct?.type === "q" &&
            selectedTypeAndAct?.act === "create" ? (
            <QuoteCreate />
          ) : <div>Page 2 not found</div>
        ) : <div>Page 1 not found</div>}
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

export default ModalContentPageManager;
