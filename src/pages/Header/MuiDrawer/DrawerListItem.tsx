
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaRegUserCircle } from "react-icons/fa";

interface Props {
  text:string;
}
const DrawerListItem = ({text}: Props) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          {text === "Profile" && <FaRegUserCircle /> }
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default DrawerListItem;
