import React, { useEffect } from "react";
import { QuoteText, SpeakerName } from "./index";
import { useQuoteContext } from "../../contexts/QuoteContext";

const Quote = () => {
  const { getRandomeQuote, quote, myQuotes } = useQuoteContext();

  useEffect(() => {
    getRandomeQuote();
  }, []);

  return (
    <div className="w-full font-marck-script relative flex flex-col gap-4 items-center p-5 sm:px-6 sm:py-10">
      <QuoteText text={quote?.text} />
      <SpeakerName speakerName={quote?.speakerName} />
    </div>
  );
};

export default Quote;
