import { useEffect, useState } from "react";
import { Title } from "./index";
import Login from "./Login";
import HamburgerWhenMobile from "./MuiDrawer/DrawerBtn";
import { useAuthContext } from "../../contexts/Auth/AuthContext";

const Header = () => {
  const { loginUser } = useAuthContext();

  return (
    <div className="shadow mb-5 flex flex-row justify-between items-center p-3">
      <Title />
      {loginUser ? (
        <HamburgerWhenMobile />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Header;
