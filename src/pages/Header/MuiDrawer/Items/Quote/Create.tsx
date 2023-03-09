import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

const Create = () => {
  // todo: 
  const { clearInputs } = useQuoteContext();

  return (
    <Link to="/quote/create" onClick={clearInputs}>
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
