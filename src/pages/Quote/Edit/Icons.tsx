import React from 'react'
import { useQuoteContext } from '../../../contexts/Quote/QuoteContext';
import { BiEdit, BiTrash } from "react-icons/bi";
import { IQuote } from '../../../contexts/Quote/interface';
import MuiModal from './Modal/MuiModal';
import { AiOutlineEye } from 'react-icons/ai';
import { VscEye, VscEyeClosed } from "react-icons/vsc";

interface Props {
  q: IQuote;
  i: number;
}

const Icons = ({q, i}: Props) => {
  const {
    handleChangeCurrentQuoteIndex, handleDelete,
    toggleEditModalOpen,
    editModalOpen,
  } = useQuoteContext();



  return (
    <div className="flex gap-1 sm:text-xl text-md">
      {/* {q.isPublic ? <VscEye /> : <VscEyeClosed />} */}
      <BiEdit
        onClick={() => {
          handleChangeCurrentQuoteIndex("select", i);
          toggleEditModalOpen();
        }}
        className="ease-in-out duration-200 hover:opacity-50 cursor-pointer"
      />
      <BiTrash
        onClick={() => handleDelete(q.id)}
        className="text-red-500 ease-in-out duration-200 hover:opacity-50 cursor-pointer"
      />
      <MuiModal q={q} />
    </div>
  );
}

export default Icons