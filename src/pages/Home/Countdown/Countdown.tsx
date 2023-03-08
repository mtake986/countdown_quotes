
import DaysLeft from "./ActiveEditOff/DaysLeft";
import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useEffect } from "react";
import EventTitle from "./ActiveEditOff/EventTitle";
import EventDate from "./ActiveEditOff/EventDate";
import { useNavigate } from "react-router-dom";

const Countdown = () => {
  const { events, fetchMyEvent } = useCountdownContext();
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

  return (
    <div className="relative w-full rounded-xl flex flex-col gap-4 items-center py-10 px-6 sm:p-10">
      {loginUser ? (
        events && events.length >= 1 ? (
          <div className="bg-sky-50">
            <EventTitle />
            <DaysLeft />
            <EventDate />
          </div>
        ) : (
          <div
            className="cursor-pointer hover:opacity-50 text-sky-500 duration-200 text-2xl bg-sky-50 p-3 rounded-lg"
            onClick={() => navigate("/event/create")}
          >
            Create an event
          </div>
        )
      ) : (
        <span>Please login.</span>
      )}
    </div>
  );
};

export default Countdown;
