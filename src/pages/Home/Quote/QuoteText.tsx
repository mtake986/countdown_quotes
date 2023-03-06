import React from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

const QuoteText: React.FC = () => {
  const { currentQuoteIndex, myQuotes } = useQuoteContext();

  return (
    <div>
      <div className="w-full text-2xl font-Caveat-Brush">
        {myQuotes[currentQuoteIndex]?.quoteText
          ? myQuotes[currentQuoteIndex]?.quoteText
          : ""}
      </div>
    </div>
  );
};

export default QuoteText;
