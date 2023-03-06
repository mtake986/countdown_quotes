import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { AiOutlineMenu } from "react-icons/ai";
import { IconButton, SwipeableDrawer, Tooltip } from "@mui/material";
import Profile from "./Items/Profile";
import CdList from "./Items/Cd/CdList";
import QuoteList from "./Items/Quote/QuoteList";
import Home from "./Items/Home";

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
      <Home />
      <Divider />
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
