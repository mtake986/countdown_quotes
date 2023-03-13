
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

interface Props {
  handleClose: () => void;
}

const SaveBtn = ({handleClose}: Props) => {
  const { handleUpdateQuotes } = useQuoteContext();

  return (
    <button
      onClick={() => {
        handleUpdateQuotes();
        handleClose();
      }}
      className="w-full hover:bg-sky-50 text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
