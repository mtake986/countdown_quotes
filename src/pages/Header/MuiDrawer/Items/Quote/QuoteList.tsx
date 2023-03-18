import React from 'react'
import List from "@mui/material/List";
import Create from "./Create";
import Edit from "./Edit";
import AllQuotes from './AllQuotes';

const QuoteList = () => {
  return (
    <List>
      <span className='pl-3'>Quotes</span>
      <Create />
      <Edit />
      <AllQuotes />
    </List>
  );
}

export default QuoteList