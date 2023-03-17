import DaysLeft from "./ActiveEditOff/DaysLeft";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useEffect } from "react";
import EventTitle from "./ActiveEditOff/EventTitle";
import EventDate from "./ActiveEditOff/EventDate";
import { useNavigate } from "react-router-dom";
import PleaseCreateEventBtn from "../../../utils/PleaseCreateEventBtn copy";

const Countdown = () => {
  const { myEvents } = useCountdownContext();


  if (!myEvents || myEvents.length === 0) {
    return <PleaseCreateEventBtn />;
  }

  return (
    <div className="bg-sky-50 w-full rounded-xl flex flex-col gap-4 items-center py-10 px-6 sm:p-10">
      <EventTitle />
      <DaysLeft />
      <EventDate />
    </div>
  );
};

export default Countdown;
