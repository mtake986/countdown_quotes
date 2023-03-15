import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const SaveBtn = () => {
  const { handleCreateQuote } = useQuoteContext();
  const { loginUser } = useAuthContext();

  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        handleCreateQuote(loginUser.uid);
        navigate('/')
      }}
      className="w-full hover:bg-sky-50 text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Save
    </button>
  );
};
export default SaveBtn;
