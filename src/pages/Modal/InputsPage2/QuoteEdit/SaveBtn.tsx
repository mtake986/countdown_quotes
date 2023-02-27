import { useModalContext } from "../../../../contexts/ModalContext";
import { useQuoteContext } from "../../../../contexts/QuoteContext";

const SaveBtn = () => {
  const { handleUpdateQuote } = useQuoteContext();
  const { handleToggleModal, handleCurrPageNum } = useModalContext();

  return (
    <button
      onClick={() => {
        handleUpdateQuote();
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
