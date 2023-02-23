import React from "react";
import { useModalContext } from "../../../contexts/ModalContext";

const QuoteBtn = () => {
  const { handleEditType } = useModalContext();

  return (
    <div
      onClick={() => handleEditType("q")}
      className="hover:bg-sky-50 p-3 rounded-lg cursor-pointer w-full text-center"
    >
      Quote
    </div>
  );
};

export default QuoteBtn;
