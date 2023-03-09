import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BiEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const Edit = () => {
  const { clearInputs } = useQuoteContext();

  return (
    <Link to="/quote/edit" onClick={clearInputs}>
      <ListItem key="Edit" disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BiEditAlt />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default Edit;
