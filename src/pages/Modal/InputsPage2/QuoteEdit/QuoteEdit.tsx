import React from "react";
import InputSpeakerName from "./InputSpeakerName";
import InputQuoteText from "./InputQuoteText";
import SaveBtn from "./SaveBtn";
import Title from "./Title";
import GoPrev from "./GoPrev";
import GoNext from "./GoNext";

const QuoteEdit = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Title />
      <div className="flex items-center justify-between gap-4">
        <GoPrev />
        <div className="flex flex-col gap-4">
          <InputQuoteText />
          <InputSpeakerName />
        </div>
        <GoNext />
      </div>
      <SaveBtn />
    </div>
  );
};

export default QuoteEdit;
