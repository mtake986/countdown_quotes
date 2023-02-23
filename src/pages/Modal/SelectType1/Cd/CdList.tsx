import React from 'react'

import Edit from "./Edit";
import Add from "./Add";

const CdList = () => {
  return (
    <div>
      <div>Countdown</div>
      <div className="flex gap-4 items-center">
        <Edit />
        <Add />
      </div>
    </div>
  );
};

export default CdList;
