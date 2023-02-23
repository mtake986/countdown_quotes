import React from "react";
import { Title, EditBtn, QuoteRefreshBtn } from "./index";

const Header = () => {
  return (
    <div className="shadow mb-5 flex flex-row justify-between items-center md:p-4 p-3">
      <Title />
      <div className="flex gap-4 items-center">
        <EditBtn />
        <QuoteRefreshBtn />
      </div>
    </div>
  );
};

export default Header;
