import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";

const Edit = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return <div onClick={() => handleSelectTypeAndAct("q", "edit")}>Edit</div>;
};

export default Edit;
