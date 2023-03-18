import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

const SaveBtn = () => {
  const { handleUpdateEvent } = useCountdownContext();
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        handleUpdateEvent(loginUser.uid);
        navigate('/');
      }}
      className="w-full hover:bg-sky-50 text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
