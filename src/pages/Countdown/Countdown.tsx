import { EventDate, EventTitle } from "./index";
import EditBtn from "./ActiveEditOff/EditBtn";
import DaysLeft from "./ActiveEditOff/DaysLeft";
import CdModal from "./ActiveEditOn/CdModal";

const Countdown = () => {


  return (
    <div className="border-gray-700 border-2">
      <div className="flex flex-col gap-4 items-center">
        <EditBtn />
        <EventTitle />
        <DaysLeft />
        <EventDate />
      </div>
      <CdModal />
    </div>
  );
};

export default Countdown;
