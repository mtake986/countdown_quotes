import React from 'react'
import CdBtn from "./CdBtn";
import QuoteBtn from "./QuoteBtn";

const SelectType = () => {
  return (
    <div className='flex flex-col items-center gap-3 '>
      <CdBtn />
      <QuoteBtn />
    </div>
  );
}

export default SelectType