import { useModalContext } from "../../../../contexts/ModalContext";
import { useQuoteContext } from "../../../../contexts/QuoteContext";

const SaveBtn = () => {
  const { handleCreateQuote } = useQuoteContext();
  const { handleCurrPageNum, handleToggleModal } = useModalContext();
  return (
    <button
      onClick={() => {
        handleCreateQuote();
        handleCurrPageNum("done");
        handleToggleModal();
      }}
      className="w-40 hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
