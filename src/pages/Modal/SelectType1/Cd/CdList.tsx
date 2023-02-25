import React from "react";

import Edit from "./Edit";
import Add from "./Add";

const CdList = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-xl font-semibold">Countdown</div>
      {/* <div className="sm:flex sm:gap-5"> */}
        <Edit />
        <Add />
      {/* </div> */}
    </div>
  );
};

export default CdList;
