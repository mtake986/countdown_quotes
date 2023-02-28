import { IconButton, Tooltip } from "@mui/material";
import { AiOutlineEdit } from "react-icons/ai";
import { useModalContext } from "../../contexts/ModalContext";
import { BiEditAlt } from "react-icons/bi";

const EditBtn = () => {
  const { handleToggleModal } = useModalContext();
  return (
    <Tooltip title="Create/Edit">
      <IconButton
        onClick={handleToggleModal}
        className="text-2xl cursor-pointer"
      >
        <BiEditAlt />
      </IconButton>
    </Tooltip>
  );
};
export default EditBtn;
