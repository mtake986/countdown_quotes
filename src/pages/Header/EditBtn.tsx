import { useCountdownContext } from "../../contexts/CountdownContext";
import { AiOutlineEdit } from "react-icons/ai";

const EditBtn = () => {
  const { handleToggleModal } = useCountdownContext();
  return (
    <AiOutlineEdit
      onClick={handleToggleModal}
      className="md:text-4xl text-3xl cursor-pointer"
    />
  );
};
export default EditBtn;
