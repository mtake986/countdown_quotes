import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AiOutlineMenu } from "react-icons/ai";
import { IconButton, SwipeableDrawer, Tooltip } from "@mui/material";
import { FaRegUserCircle } from "react-icons/fa";
import DrawerListItem from "./DrawerListItem";
import Profile from "./Items/Profile";
import Create from "./Items/Quote/Create";
import Edit from "./Items/Quote/Edit";
import CdList from "./Items/Cd/CdList";
import QuoteList from "./Items/Quote/QuoteList";

const HamburgerWhenMobile = () => {
  type Anchor = "top" | "left" | "bottom" | "right";

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <CdList />
      <Divider />
      <QuoteList />
      <Divider />
      <List>
        <Profile />
      </List>
    </Box>
  );

  return (
    <>
      <Tooltip title="Menu">
        <IconButton onClick={toggleDrawer("right", true)}>
          <AiOutlineMenu className="text-2xl cursor-pointer" />
        </IconButton>
      </Tooltip>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </>
  );
};
export default HamburgerWhenMobile;
