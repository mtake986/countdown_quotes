import { IconButton, Tooltip } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";

const HamburgerWhenMobile = () => {

  return (
    <Tooltip title="Menu">
      <IconButton>
        <AiOutlineMenu
          className="text-2xl cursor-pointer"
          onClick={() => console.log("hamburger")}
        />
      </IconButton>
    </Tooltip>
  );
};
export default HamburgerWhenMobile;
