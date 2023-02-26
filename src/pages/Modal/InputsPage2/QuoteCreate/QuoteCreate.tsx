import React from "react";
import InputSpeakerName from "./InputSpeakerName";
import InputQuoteText from "./InputQuoteText";
import SaveBtn from "./SaveBtn";
import Title from "./Title";

const QuoteCreate = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Title />
      <InputQuoteText />
      <InputSpeakerName />
      <div className="flex justify-between">
        <SaveBtn />
      </div>
    </div>
  );
};

export default QuoteCreate;
