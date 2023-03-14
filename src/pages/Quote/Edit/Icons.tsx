import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import { BiEdit, BiTrash } from "react-icons/bi";
import { IQuote } from "../../../contexts/Quote/interface";
import MuiModal from "./Modal/MuiModal";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";

interface Props {
  q: IQuote;
  i: number;
}

const Icons = ({ q, i }: Props) => {
  const { handleDelete, handleInputDontShow } =
    useQuoteContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex gap-1 sm:text-xl text-md">
      {/* {q.dontShow ? <VscEyeClosed /> : <VscEye />} */}
      <BiEdit
        onClick={() => {
          handleOpen();
          handleInputDontShow('whenOpenModal', q.dontShow);
        }}
        className="ease-in-out duration-200 hover:opacity-50 cursor-pointer"
      />
      <BiTrash
        onClick={() => handleDelete(q.id)}
        className="text-red-500 ease-in-out duration-200 hover:opacity-50 cursor-pointer"
      />
      <MuiModal q={q} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Icons;
