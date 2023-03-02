import React from "react";
import EventTitleInput from "./EventTitleInput";
import EventDateInput from "./EventDateInput";
import SaveBtn from "./SaveBtn";
import Title from "./Title";
import { useCountdownContext } from "../../../../contexts/Countdown/CountdownContext";

const CdCreate = () => {
  const { events } = useCountdownContext();

  if (events.length !== 0) {
    return <div>Currently, you can register 1 event. </div>;
  }
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
