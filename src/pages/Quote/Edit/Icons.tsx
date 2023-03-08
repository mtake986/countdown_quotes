import React from 'react'
import { useQuoteContext } from '../../../contexts/Quote/QuoteContext';
import { BiEdit, BiTrash } from "react-icons/bi";
import { IQuote } from '../../../contexts/Quote/interface';
import MuiModal from './Modal/MuiModal';

interface Props {
  q: IQuote
  i: number;
}

const Icons = ({q}) => {
  const { handleDelete } = useQuoteContext();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex gap-1">
      <BiEdit onClick={handleOpen} className="ease-in-out duration-200 hover:opacity-50 cursor-pointer" />
      <BiTrash
        onClick={() => handleDelete(q.id)}
        className="text-red-500 ease-in-out duration-200 hover:opacity-50 cursor-pointer"
      />
      <MuiModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default Icons