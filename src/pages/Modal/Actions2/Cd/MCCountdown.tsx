import React from "react";
import { EventTitleInput, EventDateInput, SaveBtn } from "../../index";

const MCCountdown = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <EventTitleInput />
      <EventDateInput />
      <div className="flex justify-between">
        <SaveBtn />
      </div>
    </div>
  );
};

export default MCCountdown;
