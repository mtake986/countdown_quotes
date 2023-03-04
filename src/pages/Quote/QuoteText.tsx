import React from "react";
import { useQuoteContext } from "../../contexts/Quote/QuoteContext";

const QuoteText: React.FC = () => {
  const { currentQuoteIndex, myQuotes  } = useQuoteContext();

  return (
    <div className="text-2xl sm:text-2xl font-Caveat-Brush">
      {myQuotes[currentQuoteIndex]?.quoteText
        ? myQuotes[currentQuoteIndex]?.quoteText
        : "Loading..."}
    </div>
  );
};

export default QuoteText;
