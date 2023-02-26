import React from "react";
import { useQuoteContext } from "../../contexts/QuoteContext";
import { MdSwapHoriz } from "react-icons/md";

const SwitchEditTypeBtn: React.FC = () => {
  const { handleTabScreenText, TabScreenText } = useQuoteContext();
  return (
    <div className="flex flex-row items-center cursor-pointer hover:opacity-30">
      <div onClick={handleTabScreenText} className="">
        {TabScreenText}
      </div>
      <div>
        <MdSwapHoriz />
      </div>
    </div>
  );
};

export default SwitchEditTypeBtn;
