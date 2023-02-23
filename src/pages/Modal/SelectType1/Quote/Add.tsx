import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";

const Add = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return <div onClick={() => handleSelectTypeAndAct("q", "add")}>Add</div>;
};

export default Add;
