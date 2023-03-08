import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

const SaveBtn = () => {
  const { handleCreateEvent } = useCountdownContext();
  const { loginUser } = useAuthContext();

  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        handleCreateEvent(loginUser.uid);
        navigate("/");
      }}
      className="w-48 hover:bg-sky-50 hover:text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
