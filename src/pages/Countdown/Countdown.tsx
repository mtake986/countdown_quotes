import { EventDate, EventTitle } from "./index";
import DaysLeft from "./ActiveEditOff/DaysLeft";
import { useCountdownContext } from "../../contexts/CountdownContext";

const Countdown = () => {
  const { events } = useCountdownContext();

  return (
    <div className="w-full rounded-xl flex flex-col gap-4 items-center bg-sky-50 py-12">
      {events && events.length >= 1 ? (
        <>
          <EventTitle />
          <DaysLeft />
          <EventDate />
        </>
      ) : (
        <div>Create an event in the header</div>
      )}
    </div>
  );
};

export default Countdown;
