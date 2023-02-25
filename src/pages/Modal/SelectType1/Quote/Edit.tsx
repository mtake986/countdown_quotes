import React from "react";
import { useModalContext } from "../../../../contexts/ModalContext";

const Edit = () => {
  const { handleSelectTypeAndAct } = useModalContext();
  return (
    <div
      className="w-full py-2 px-3 mb-2 text-center bg-red-100 rounded-md hover:opacity-70 cursor-pointer"
      onClick={() => handleSelectTypeAndAct("q", "edit")}
    >
      Edit
    </div>
  );
};

export default Edit;
