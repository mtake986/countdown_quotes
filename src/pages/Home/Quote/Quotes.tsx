import React, { useEffect } from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import PageNum from "./QuoteNum";
import PleaseCreateQuoteBtn from "../../../utils/PleaseCreateQuoteBtn";
import Quote from "./Quote";
import GoPrev from "./GoPrev";
import GoNext from "./GoNext";
import Loading from "../../../utils/Loading";

const Quotes = () => {
  const {
    myPublicQuotes,
    getQuotesAddedByLoginUser,
    currentQuoteIndex,
    excludeDontShowMyQuotes,
    myQuotes,
    loading,
    fetchAllQuotesByUsers,
  } = useQuoteContext();
  const { loginUser } = useAuthContext();

  if (!loginUser) {
    return null;
  }

  if (loading === true) {
    return <Loading />;
  }

  if (!myPublicQuotes || myPublicQuotes.length === 0) {
    return <PleaseCreateQuoteBtn />;
  }

  return (
    <div className="w-full flex flex-col gap-4 p-3">
      <PageNum />
      <div className="w-full flex items-center justify-between gap-3 sm:gap-10 ">
        <GoPrev />
        {myPublicQuotes.map((q, i) =>
          currentQuoteIndex === i ? <Quote q={q} key={i} /> : null
        )}
        <GoNext />
      </div>
    </div>
  );
};

export default Quotes;
