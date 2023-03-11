import React, { useEffect } from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import PageNum from "./QuoteNum";
import PleaseCreateQuoteBtn from "../../../utils/PleaseCreateQuoteBtn";
import Quote from "./Quote";
import GoPrev from "./GoPrev";
import GoNext from "./GoNext";

const Quotes = () => {
  const { myPublicQuotes, fetchQuotesCreatedByLoginUser, currentQuoteIndex } = useQuoteContext();
  const { loginUser } = useAuthContext();

  useEffect(() => {
    if (loginUser && loginUser.uid) {
      console.log("useEffect", loginUser, loginUser.uid);
      fetchQuotesCreatedByLoginUser(loginUser?.uid);
    }
  }, [loginUser]);

  if (!loginUser) {
    return null;
  }

  if (!myPublicQuotes || myPublicQuotes.length === 0) {
    return <PleaseCreateQuoteBtn />;
  }

  return (
    <>
      {loginUser ? (
        <div className="w-full flex flex-col gap-4 p-3">
          <PageNum />
          <div className="w-full flex items-center justify-between gap-3 sm:gap-10 ">
            <GoPrev />
            {myPublicQuotes.map((q, i) => (
              currentQuoteIndex == i ? (
                <Quote q={q} />
              ) : null
            ))}
            <GoNext />
          </div>
        </div>
      ) : null}

      {/* <QuoteText text={quote?.text} />
      <SpeakerName speakerName={quote?.speakerName} /> */}
    </>
  );
};

export default Quotes;
