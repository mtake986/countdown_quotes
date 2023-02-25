import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";
const EditBtn = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return (
    <div
      className="w-full py-2 px-3 mb-2 text-center bg-red-100 rounded-md hover:opacity-70 cursor-pointer"
      onClick={() => handleSelectTypeAndAct("cd", "edit")}
    >
      Edit
    </div>
  );
};

export default EditBtn;
