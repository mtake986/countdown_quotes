import React from "react";
import MuiSpeakerNameTextField from "./MuiSpeakerNameTextField";
import MuiQuoteTextField from "./MuiQuoteTextField";
import SaveBtn from "./SaveBtn";
import Title from "./Title";
import MuiDontShowCheckbox from "./MuiDontShowCheckbox";

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
    <div className="p-3 px-10 max-w-md mx-auto flex flex-col items-center gap-4">
      <Title />
      <div className="w-full flex flex-col items-center gap-5 flex-1">
        <MuiQuoteTextField />
        <MuiSpeakerNameTextField />
        <MuiDontShowCheckbox />
        <SaveBtn />
      </div>
    </div>
  );
};

export default QuoteCreate;
