import React from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const QuoteNum = () => {
  const { currentQuoteIndex, myPublicQuotes } = useQuoteContext();
  return (
    <div className="text-right text-xs">
      {currentQuoteIndex + 1}/{myPublicQuotes.length}
    </div>
  );
};

export default QuoteNum;
