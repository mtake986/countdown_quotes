import { useNavigate } from "react-router-dom";
import { IQuote } from "../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

interface Props {
  q: IQuote;
}
const SaveBtn = ({q}: Props) => {
  const { handleUpdateQuotes, toggleEditModalOpen, clearInputs } = useQuoteContext();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        handleUpdateQuotes(q.id);
        toggleEditModalOpen();
        clearInputs();
        navigate("/");
      }}
      className="w-full hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
