import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
import { useModalContext } from "../../../../contexts/Modal/ModalContext";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const SaveBtn = () => {
  const { handleUpdateQuotes } = useQuoteContext();
  const { handleToggleModal, handleCurrPageNum } = useModalContext();
  const { loginUser } = useAuthContext();

  return (
    <button
      onClick={() => {
      handleUpdateQuotes();
        handleCurrPageNum("done");
        handleToggleModal();
      }}
      className="w-48 hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
