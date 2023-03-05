import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlinePlus } from "react-icons/ai";
import { useAuthContext } from "../../../../../contexts/Auth/AuthContext";

const Create = () => {
  return (
    <ListItem key="Create" disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <AiOutlinePlus />
        </ListItemIcon>
        <ListItemText primary="Create" />
      </ListItemButton>
    </ListItem>
  );
};

export default Create;
