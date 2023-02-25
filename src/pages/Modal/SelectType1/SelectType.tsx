import React from 'react'
import CdList from "./Cd/CdList";
import QuoteList from "./Quote/QuoteList";

const SelectType = () => {
  return (
    <div className='gap-10 flex flex-col'>
      <CdList />
      <QuoteList />
    </div>
  );
}

export default SelectType