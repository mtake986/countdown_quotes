import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";

const Add = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return <div onClick={() => handleSelectTypeAndAct("cd", "add")}>Add</div>;
};

export default Add;
