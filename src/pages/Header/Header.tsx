import { useEffect, useState } from "react";
import { Title, EditBtn, QuoteRefreshBtn } from "./index";
import Login from "./Login";
import HamburgerWhenMobile from "./HamburgerWhenMobile";

const Header = () => {
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
      {isMobile ? (
        <HamburgerWhenMobile />
      ) : (
        <div className="flex items-center">
          <EditBtn />
          <QuoteRefreshBtn />
          <Login />
        </div>
      )}
    </div>
  );
};

export default Header;
