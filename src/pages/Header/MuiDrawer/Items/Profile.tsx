import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Link to="/profile">
      <ListItem key="Profile" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <FaRegUserCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default Profile;
