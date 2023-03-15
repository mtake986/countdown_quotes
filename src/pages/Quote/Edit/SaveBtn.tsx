
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

interface Props {
  handleClose: () => void;
  qid: string
}

const SaveBtn = ({handleClose, qid}: Props) => {
  const { handleUpdateQuotes, excludeQuotes } = useQuoteContext();
  const {loginUser } = useAuthContext();

  return (
    <button
      onClick={() => {
        handleUpdateQuotes(qid);
        handleClose();
        excludeQuotes(loginUser.uid)
      }}
      className="w-full hover:bg-sky-50 text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
