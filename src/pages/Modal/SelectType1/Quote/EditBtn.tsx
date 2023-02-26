import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";

const EditBtn = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return (
    <div
      className="py-2 px-3 text-center bg-emerald-100 rounded-md hover:opacity-70 cursor-pointer"
      onClick={() => handleSelectTypeAndAct("q", "edit")}
    >
      Edit
    </div>
  );
};

export default EditBtn;
