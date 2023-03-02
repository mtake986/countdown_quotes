import { useAuthContext } from "../../../../contexts/Auth/AuthContext";
import { useCountdownContext } from "../../../../contexts/Countdown/CountdownContext";
import { useModalContext } from "../../../../contexts/Modal/ModalContext";

const SaveBtn = () => {
  const { handleSaveBtnClick } = useCountdownContext();
  const { handleToggleModal, handleCurrPageNum } = useModalContext();
  const { loginUser } = useAuthContext();

  return (
    <button
      onClick={() => {
        handleSaveBtnClick("create", loginUser.uid);
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
