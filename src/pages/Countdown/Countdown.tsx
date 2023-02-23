import { EventDate, EventTitle } from "./index";
import DaysLeft from "./ActiveEditOff/DaysLeft";

const Countdown = () => {
  return (
    <div className="w-full">
      <div className="relative rounded-xl flex flex-col gap-4 items-center bg-sky-50 py-12">
        <EventTitle />
        <DaysLeft />
        <EventDate />
      </div>
    </div>
  );
};

export default Countdown;
