import React from "react";
import EventTitleInput from "./EventTitleInput";
import EventDateInput from "./EventDateInput";
import SaveBtn from "./SaveBtn";
import Title from "./Title";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";

const EventCreate = () => {
  const { myEvents } = useCountdownContext();

  if (myEvents.length !== 0) {
    return (
      <div>
        Currently, you can register 1 event. Please go to the edit screen{" "}
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-md p-5 flex flex-col items-center gap-4">
      <Title />
      <div className="w-full flex flex-col justify-center gap-6">
        <EventTitleInput />
        <EventDateInput />
      </div>
      <SaveBtn />
    </div>
  );
};

export default EventCreate;
