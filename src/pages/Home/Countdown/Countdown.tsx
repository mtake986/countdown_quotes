import DaysLeft from "./ActiveEditOff/DaysLeft";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useEffect } from "react";
import EventTitle from "./ActiveEditOff/EventTitle";
import EventDate from "./ActiveEditOff/EventDate";
import { useNavigate } from "react-router-dom";
import PleaseCreateEventBtn from "../../../utils/PleaseCreateEventBtn copy";

const Countdown = () => {
  const { myEvents, fetchMyEvent } = useCountdownContext();
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loginUser && loginUser.uid) {
      console.log("useEffect", loginUser, loginUser.uid);
      fetchMyEvent(loginUser?.uid);
    }
  }, [loginUser]);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // }, [window.innerWidth]);

  if (!loginUser) {
    return <div>Please login by your google account.</div>;
  }

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
