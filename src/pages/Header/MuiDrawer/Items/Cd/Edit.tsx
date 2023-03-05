import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiEditAlt } from "react-icons/bi";

const Edit = () => {
  return (
    <ListItem key="Edit" disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <BiEditAlt />
        </ListItemIcon>
        <ListItemText primary="Edit" />
      </ListItemButton>
    </ListItem>
  );
};

export default Edit;
