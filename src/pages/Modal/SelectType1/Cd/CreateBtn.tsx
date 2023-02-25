import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";

const CreateBtn = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return (
    <div
      className="w-full py-2 px-3 text-center bg-emerald-100 rounded-md hover:opacity-70 cursor-pointer"
      onClick={() => handleSelectTypeAndAct("cd", "create")}
    >
      Create
    </div>
  );
};

export default CreateBtn;
