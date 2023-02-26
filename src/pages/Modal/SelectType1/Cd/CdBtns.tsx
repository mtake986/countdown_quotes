import React from "react";

import Edit from "./EditBtn";
import CreateBtn from "./CreateBtn";

const CdBtns = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-xl font-semibold">Countdown</div>
      <div className="grid grid-cols-2 gap-4"> 
        <Edit />
        <CreateBtn />
      </div>
    </div>
  );
};

export default CdBtns;
