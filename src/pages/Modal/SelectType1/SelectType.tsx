import React from 'react'
import CdList from "./Cd/CdList";
import QuoteList from "./Quote/QuoteList";

const SelectType = () => {
  return (
    <div className='flex flex-col items-center gap-3 '>
      <CdList />
      <QuoteList />
    </div>
  );
}

export default SelectType