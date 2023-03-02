import React, { useEffect } from "react";
import { QuoteText, SpeakerName } from "./index";
import { useQuoteContext } from "../../contexts/Quote/QuoteContext";
import { useAuthContext } from "../../contexts/Auth/AuthContext";

const Quote = () => {
  const { getRandomeQuote, quote, myQuotes, fetchQuotesCreatedByLoginUser } =
    useQuoteContext();
  const { loginUser } = useAuthContext();

  useEffect(() => {
    getRandomeQuote();
  }, []);

  useEffect(() => {
    if (loginUser && loginUser.uid) {
      console.log("useEffect", loginUser, loginUser.uid);
      fetchQuotesCreatedByLoginUser(loginUser?.uid);
      console.log(myQuotes)
    }
  }, [loginUser]);

  return (
    <div className="w-full font-marck-script relative flex flex-col gap-4 items-center p-5 sm:px-6 sm:py-10">
      {loginUser ? <div>{myQuotes[0]?.quoteText}</div> : null}
      <QuoteText text={quote?.text} />
      <SpeakerName speakerName={quote?.speakerName} />
    </div>
  );
};

export default Quote;
