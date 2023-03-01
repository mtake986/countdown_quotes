import { useAuthContext } from "../../../../contexts/AuthContext";
import { useModalContext } from "../../../../contexts/ModalContext";
import { useQuoteContext } from "../../../../contexts/QuoteContext";

const SaveBtn = () => {
  const { handleCreateQuote } = useQuoteContext();
  const { handleCurrPageNum, handleToggleModal } = useModalContext();
  const { loginUser } = useAuthContext();

  return (
    <button
      onClick={() => {
        handleCreateQuote(loginUser.uid);
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
