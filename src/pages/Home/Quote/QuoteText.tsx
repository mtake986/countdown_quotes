import React from "react";
import { IQuote } from "../../../contexts/Quote/interface";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";

interface Props {
  q: IQuote;
}

const QuoteText = ({ q }: Props) => {
  return (
    <div className="w-full text-2xl font-Caveat-Brush">
      {q?.quoteText ? q?.quoteText : ""}
    </div>
  );
};

export default QuoteText;
