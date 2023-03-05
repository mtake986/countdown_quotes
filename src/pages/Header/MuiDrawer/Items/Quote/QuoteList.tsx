import React from 'react'
import List from "@mui/material/List";
import Create from "./Create";
import Edit from "./Edit";

const QuoteList = () => {
  return (
    <List>
      <span className='pl-3'>Quotes</span>
      <Create />
      <Edit />
    </List>
  );
}

export default QuoteList