import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

const DeleteBtn = () => {
  const { handleDelete } = useCountdownContext();
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        handleDelete();
      }}
      className="w-full text-center hover:bg-red-50 text-red-600 rounded-md p-2 ease-in-out duration-200 "
    >
      delete
    </div>
  );
};
export default DeleteBtn;
