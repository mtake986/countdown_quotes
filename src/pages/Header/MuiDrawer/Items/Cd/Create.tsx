import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../../contexts/Auth/AuthContext";
import { useCountdownContext } from "../../../../../contexts/Countdown/CountdownContext";

const Create = () => {
  const { clearInputs } = useCountdownContext();
  return (
    <Link to="/event/create" onClick={clearInputs} >
      <ListItem key="Create" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AiOutlinePlus />
          </ListItemIcon>
          <ListItemText primary="Create" />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default Create;
