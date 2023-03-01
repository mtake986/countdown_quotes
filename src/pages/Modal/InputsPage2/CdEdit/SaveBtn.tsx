import { useAuthContext } from "../../../../contexts/AuthContext";
import { useCountdownContext } from "../../../../contexts/CountdownContext";
import { useModalContext } from "../../../../contexts/ModalContext";

const SaveBtn = () => {
  const { handleSaveBtnClick } = useCountdownContext();
  const { handleToggleModal, handleCurrPageNum } = useModalContext();
  const { loginUser } = useAuthContext();
  return (
    <button
      onClick={() => {
        handleSaveBtnClick('edit', loginUser.uid)
        handleCurrPageNum('done')
        handleToggleModal();
      }}
      className="w-48 hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
