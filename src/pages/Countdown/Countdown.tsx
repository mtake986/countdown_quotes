import { EventDate, EventTitle } from "./index";
import DaysLeft from "./ActiveEditOff/DaysLeft";
import { useCountdownContext } from "../../contexts/CountdownContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useUtilsContext } from "../../contexts/Utils/UtilsContext";

const Countdown = () => {
  const { events, fetchEvent } = useCountdownContext();
  const { handleGoogleLogin, loginUser, handleLogout } = useAuthContext();
  const { isMobile, handleResize } = useUtilsContext();

  useEffect(() => {
    if (loginUser && loginUser.uid) {
      console.log("useEffect", loginUser, loginUser.uid);
      fetchEvent(loginUser?.uid);
    }
  }, [loginUser]);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  // }, [window.innerWidth]);

  return (
    <div className="relative w-full rounded-xl flex flex-col gap-4 items-center bg-sky-50 py-10 px-6 sm:p-10">
      {loginUser ? (
        events && events.length >= 1 ? (
          <>
            <EventTitle />
            <DaysLeft />
            <EventDate />
          </>
        ) : (
          <div>Create an event in the header</div>
        )
      ) : (
        <span>Please login.</span>
      )}
    </div>
  );
};

export default Countdown;
