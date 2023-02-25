import React from "react";
import Edit from './Edit';
import Add from './Add';

const QuoteList = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-xl font-semibold">Quote</div>
      <Edit />
      <Add />
    </div>
  );
};

export default QuoteList;
