import { useEffect, useState } from "react";
import { Title, EditBtn, QuoteRefreshBtn } from "./index";
import Login from "./Login";
import HamburgerWhenMobile from "./HamburgerWhenMobile";
import { useAuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const {loginUser} = useAuthContext();

  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 425) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="shadow mb-5 flex flex-row justify-between items-center p-3">
      <Title />
      {loginUser ? (
        isMobile ? (
          <HamburgerWhenMobile />
        ) : (
          <div className="flex items-center">
            <EditBtn />
            <QuoteRefreshBtn />
            <Login />
          </div>
        )
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Header;
