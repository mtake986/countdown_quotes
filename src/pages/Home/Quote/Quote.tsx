import React, { useEffect } from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import GoPrev from "./GoPrev";
import GoNext from "./GoNext";
import PageNum from "./QuoteNum";
import QuoteText from "./QuoteText";
import SpeakerName from "./SpeakerName";

const Quote = () => {
  const {
    currentQuoteIndex,
    myQuotes,
    fetchQuotesCreatedByLoginUser,
  } = useQuoteContext();
  const { loginUser } = useAuthContext();


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
        <div className="w-full flex flex-col gap-4 p-3">
          <PageNum />
          <div className="w-full flex items-center justify-between gap-3 sm:gap-10 ">
            <GoPrev />
            <div className="flex flex-col items-center gap-4">
              <QuoteText />
              <SpeakerName />
            </div>
            <GoNext />
          </div>
        </div>
      ) : null}

      {/* <QuoteText text={quote?.text} />
      <SpeakerName speakerName={quote?.speakerName} /> */}
    </>
  );
};

export default Quote;
