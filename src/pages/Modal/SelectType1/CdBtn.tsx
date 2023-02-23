import React from "react";
import { useModalContext } from '../../../contexts/ModalContext'

const CdBtn = () => {
  const { handleEditType} = useModalContext();

  return (
    <div
      onClick={() => handleEditType('cd')}
      className="hover:bg-sky-50 p-3 rounded-lg cursor-pointer w-full text-center"
    >
      Countdown
    </div>
  );
};

export default CdBtn;
