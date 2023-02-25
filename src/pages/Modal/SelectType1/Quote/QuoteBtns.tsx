import React from "react";
import Edit from "./EditBtn";
import Create from "./CreateBtn";

const QuoteList = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-xl font-semibold">Quote</div>
      <Edit />
      <Create />
    </div>
  );
};

export default QuoteList;
