import { EventDate, EventTitle } from "./index";
import EditBtn from "../Header/EditBtn";
import DaysLeft from "./ActiveEditOff/DaysLeft";
import CdModal from "./ActiveEditOn/CdModal";

const Countdown = () => {
  return (
    <div className="w-full">
      <div className="rounded-xl flex flex-col gap-4 items-center bg-sky-50 px-6 py-10">
        <EventTitle />
        <DaysLeft />
        <EventDate />
      </div>
      <CdModal />
    </div>
  );
};

export default Countdown;
