import { EventDate, EventTitle } from "./index";
import DaysLeft from "./ActiveEditOff/DaysLeft";
import { useCountdownContext } from "../../contexts/CountdownContext";
import { useAuthContext } from "../../contexts/AuthContext";

const Countdown = () => {
  const { events } = useCountdownContext();
  const { handleGoogleLogin, loginUser, handleLogout } = useAuthContext();

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
