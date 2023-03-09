import { useNavigate } from "react-router-dom";
import { IQuote } from "../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

interface Props {
  q: IQuote;
}
const SaveBtn = () => {
  const { handleUpdateQuotes } = useQuoteContext();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        handleUpdateQuotes();
        navigate("/");
      }}
      className="w-full hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
