import { useNavigate } from "react-router-dom";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const SaveBtn = () => {
  const { handleUpdateQuotes } = useQuoteContext();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        handleUpdateQuotes();
        navigate("/");
      }}
      className="w-40 hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
