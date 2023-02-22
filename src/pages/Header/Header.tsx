import React from "react";
import { Title, EditBtn } from "./index";

const Header = () => {
  return (
    <div className="shadow mb-5 flex flex-row justify-between items-center md:p-4 p-3">
      <Title />
      <EditBtn />
    </div>
  );
};

export default Header;
