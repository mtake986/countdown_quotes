import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineOrderedList } from "react-icons/ai";
import { BiEditAlt, BiListCheck } from "react-icons/bi";
import { Link } from "react-router-dom";

const AllQuotes = () => {

  return (
    <Link to="/quote/all">
      <ListItem key="all-quotes" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <AiOutlineOrderedList />
          </ListItemIcon>
          <ListItemText primary="All Quotes" />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default AllQuotes;
