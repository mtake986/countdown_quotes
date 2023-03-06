
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiHome } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Link to="/">
      <ListItem key="Home" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BiHome />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export default Home