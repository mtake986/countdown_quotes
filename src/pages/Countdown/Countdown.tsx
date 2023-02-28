import { EventDate, EventTitle } from "./index";
import DaysLeft from "./ActiveEditOff/DaysLeft";
import { useCountdownContext } from "../../contexts/CountdownContext";
import { useAuthContext } from "../../contexts/AuthContext";
import { useEffect } from "react";

const Countdown = () => {
  const { events, fetchEvent } = useCountdownContext();
  const { handleGoogleLogin, loginUser, handleLogout } = useAuthContext();

  useEffect(() => {
    if (loginUser && loginUser.uid) {
      console.log('useEffect', loginUser, loginUser.uid); 
      fetchEvent(loginUser?.uid);
    }
  }, [loginUser]);


  return (
    <div className="w-full rounded-xl flex flex-col gap-4 items-center bg-sky-50 py-12">
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
