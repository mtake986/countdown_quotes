
import { AiOutlineEdit } from "react-icons/ai";
import { useModalContext } from "../../contexts/ModalContext";

const EditBtn = () => {
  const { handleToggleModal } = useModalContext();
  return (
    <AiOutlineEdit
      onClick={handleToggleModal}
      className="md:text-4xl text-3xl cursor-pointer"
    />
  );
};
export default EditBtn;
