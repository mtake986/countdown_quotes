import React from "react";
import InputSpeakerName from "./InputSpeakerName";
import InputQuoteText from "./InputQuoteText";
import SaveBtn from "./SaveBtn";
import Title from "./Title";
import GoPrev from "./GoPrev";
import GoNext from "./GoNext";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import QuoteNum from "./QuoteNum";

const QuoteEdit = () => {
  const { myQuotesBeingChanged, currentQuoteIndex, myQuotes } =
    useQuoteContext();

  return (
    <div className="p-3 max-w-md mx-auto flex flex-col items-center gap-4">
      <Title />
      <QuoteNum />
      <div className="w-full flex items-center justify-between gap-3 sm:gap-10">
        <GoPrev />
        {myQuotes?.map((quote, i) =>
          currentQuoteIndex === i ? (
            <div className="flex flex-col gap-4 flex-1" key={i}>
              <InputQuoteText quote={quote} />
              <InputSpeakerName quote={quote} />
            </div>
          ) : null
        )}
        {/* <div className="flex flex-col gap-4">
          <InputQuoteText />
          <InputSpeakerName />
        </div> */}
        <GoNext />
      </div>
      <div className="">
        {myQuotes?.map((quote, i) =>
            <div className="flex flex-col gap-4 flex-1">
              <InputQuoteText quote={quote} />
              <InputSpeakerName quote={quote} />
            </div>
        )}
      </div>
      <SaveBtn />
    </div>
  );
};

export default QuoteEdit;
