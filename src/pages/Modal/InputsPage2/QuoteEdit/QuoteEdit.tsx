import React from "react";
import InputSpeakerName from "./InputSpeakerName";
import InputQuoteText from "./InputQuoteText";
import SaveBtn from "./SaveBtn";
import Title from "./Title";

const QuoteEdit = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Title />
      <InputQuoteText />
      <InputSpeakerName />
      <SaveBtn />
    </div>
  );
};

export default QuoteEdit;
