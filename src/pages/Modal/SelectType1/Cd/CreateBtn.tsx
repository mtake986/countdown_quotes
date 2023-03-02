import React from "react";
import { useModalContext } from "../../../../contexts/Modal/ModalContext";

const CreateBtn = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return (
    <div
      className="py-2 px-3 text-center bg-red-100 rounded-md hover:opacity-70 cursor-pointer"
      onClick={() => handleSelectTypeAndAct("cd", "create")}
    >
      Create
    </div>
  );
};

export default CreateBtn;
