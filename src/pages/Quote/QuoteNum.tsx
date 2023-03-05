import React from 'react'
import { useQuoteContext } from '../../contexts/Quote/QuoteContext';

const QuoteNum = () => {
  const { currentQuoteIndex, myQuotes } = useQuoteContext();
  return (
    <div className="text-right text-xs">
      {currentQuoteIndex + 1}/{myQuotes.length}
    </div>
  );
}

export default QuoteNum