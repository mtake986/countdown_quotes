import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

interface Props {
  handleClose: () => void;
  qid: string;
}

const SaveBtn = ({ handleClose, qid }: Props) => {
  const {
    handleUpdateQuotes,
    excludeByPropertiesMyQuotes,
    myQuotes,
  } = useQuoteContext();
  return (
    <button
      onClick={() => {
        handleUpdateQuotes(qid);
        handleClose();
        excludeByPropertiesMyQuotes(myQuotes);
      }}
      className="w-full hover:bg-sky-50 text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
