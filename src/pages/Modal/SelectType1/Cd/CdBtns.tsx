import React from "react";

import Edit from "./EditBtn";
import CreateBtn from "./CreateBtn";

const CdList = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-xl font-semibold">Countdown</div>
      {/* <div className="sm:flex sm:gap-5"> */}
      <Edit />
      <CreateBtn />
      {/* </div> */}
    </div>
  );
};

export default CdList;
