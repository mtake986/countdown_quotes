import React from "react";
import EventTitleInput from "./EventTitleInput";
import EventDateInput from "./EventDateInput";
import SaveBtn from "./SaveBtn";
import Title from "./Title";

const CdCreate = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <Title />
      <EventTitleInput />
      <EventDateInput />
      <div className="flex justify-between">
        <SaveBtn />
      </div>
    </div>
  );
};

export default CdCreate;
