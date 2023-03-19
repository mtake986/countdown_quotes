import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import {
  BiEdit,
  BiHeart,
  BiInfoCircle,
  BiInfoSquare,
  BiTrash,
} from "react-icons/bi";
import { IQuote } from "../../../contexts/Quote/interface";
import MuiModal from "./Modal/MuiModal";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";

interface Props {
  q: IQuote;
  i: number;
}

const Icons = ({ q, i }: Props) => {
  const { handleLike, handleInputDontShow } = useQuoteContext();

  const { loginUser } = useAuthContext();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex gap-1 text-md">
      <BiHeart
        onClick={() => {
          console.log({q}, q.docId, loginUser.uid);
          handleLike(q.docId, loginUser.uid);
        }}
        className="text-red-500 ease-in-out duration-200 hover:opacity-50 cursor-pointer"
      />
      <BiInfoCircle
        onClick={() => {
          handleOpen();
          handleInputDontShow("whenOpenModal", q.dontShow);
        }}
        className="text-gray-900 ease-in-out duration-200 hover:opacity-50 cursor-pointer"
      />
      <MuiModal q={q} open={open} handleClose={handleClose} />
    </div>
  );
};

export default Icons;
