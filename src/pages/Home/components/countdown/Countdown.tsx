import React, { useState } from "react";
import { Title, DaysLeft, EventDate, EventText } from "./index";
import { AiOutlineEdit } from "react-icons/ai";

const Countdown = () => {
  const [activeEdit, setActiveEdit] = useState<boolean>(false);

  return (
    <div>
      <AiOutlineEdit onClick={(prev) => setActiveEdit(!activeEdit)} />
      {activeEdit ? "edit on" : "edit off"}
      <Title />
      <EventText activeEdit={activeEdit} />
      <DaysLeft />
      <EventDate activeEdit={activeEdit} />
    </div>
  );
};

export default Countdown;
