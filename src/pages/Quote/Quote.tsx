import React, { useEffect } from "react";
import { Sentence, Author } from "./index";
import { useQuoteContext } from "../../contexts/QuoteContext";

const Quote = () => {
  const { getRandomeQuote, quote } = useQuoteContext(); 

  useEffect(() => {
    getRandomeQuote();
  }, [])
  
  return (
    <div className="w-full font-marck-script relative flex flex-col gap-4 items-center p-5 sm:px-6 sm:py-10">
      <Sentence text={quote?.text} />
      <Author author={quote?.author} />
    </div>
  );
};

export default Quote;
