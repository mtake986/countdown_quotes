import React from "react";
import EventTitleInput from "./EventTitleInput";
import EventDateInput from "./EventDateInput";
import SaveBtn from "./SaveBtn";
import Title from "./Title";

const CdCreate = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Title />
      <div className="flex flex-col gap-6">
        <EventTitleInput />
        <EventDateInput />
      </div>
      <SaveBtn />
    </div>
  );
};

export default CdCreate;
