import React, { useEffect } from "react";
import { QuoteText, SpeakerName } from "./index";
import { useQuoteContext } from "../../contexts/Quote/QuoteContext";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import GoPrev from "./GoPrev";
import GoNext from "./GoNext";

const Quote = () => {
  const {
    currentQuoteIndex,
    getRandomeQuote,
    quote,
    myQuotes,
    fetchQuotesCreatedByLoginUser,
  } = useQuoteContext();
  const { loginUser } = useAuthContext();

  useEffect(() => {
    getRandomeQuote();
  }, []);

  useEffect(() => {
    if (loginUser && loginUser.uid) {
      console.log("useEffect", loginUser, loginUser.uid);
      fetchQuotesCreatedByLoginUser(loginUser?.uid);
      console.log(myQuotes);
    }
  }, [loginUser]);

  return (
    <>
      {loginUser ? (
        <div className="h-1/2 w-full font-marck-script flex justify-between items-center gap-4 p-3 mt-8 ">
          <GoPrev />
          <div className="flex flex-col items-center gap-4">
            <QuoteText />
            <SpeakerName />
          </div>
          <GoNext />
        </div>
      ) : null}

      {/* <QuoteText text={quote?.text} />
      <SpeakerName speakerName={quote?.speakerName} /> */}
    </>
  );
};

export default Quote;
