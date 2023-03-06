import React from "react";
import InputSpeakerName from "./InputSpeakerName";
import InputQuoteText from "./InputQuoteText";
import SaveBtn from "./SaveBtn";
import Title from "./Title";

const QuoteCreate = () => {
  return (
    // <div className="p-3 max-w-md mx-auto flex flex-col items-center gap-4">
    //   <Title />
    //   <div className="flex flex-col flex-1 mx-auto">

    //   <InputQuoteText />
    //   <InputSpeakerName />
    //   </div>
    //   <SaveBtn />
    // </div>
    <div className="p-3 max-w-md mx-auto flex flex-col items-center gap-4">
      <Title />
      <div className="w-full flex items-center justify-between gap-3 sm:gap-10">
            <div className="flex flex-col gap-4 flex-1" >
              <InputQuoteText  />
              <InputSpeakerName  />
            </div>
        {/* <div className="flex flex-col gap-4">
          <InputQuoteText />
          <InputSpeakerName />
        </div> */}
      </div>
      <SaveBtn />
    </div>
  );
};

export default QuoteCreate;
