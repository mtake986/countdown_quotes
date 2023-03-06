import React from "react";
import InputSpeakerName from "./InputSpeakerName";
import InputQuoteText from "./InputQuoteText";
import SaveBtn from "./SaveBtn";
import Title from "./Title";
import GoPrev from "./GoPrev";
import GoNext from "./GoNext";
import { useQuoteContext } from "../../../../contexts/Quote/QuoteContext";

const QuoteEdit = () => {
  const { myQuotesBeingChanged, currentQuoteIndex, myQuotes } = useQuoteContext();


  return (
    <div className="flex flex-col items-center gap-4">
      <Title />
      <div className="flex items-center justify-between gap-4">
        <GoPrev />
        {myQuotes?.map((quote, i) =>
          currentQuoteIndex === i ? (
            <div className="flex flex-col gap-4" key={i}>
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
      <SaveBtn />
    </div>
  );
};

export default QuoteEdit;
