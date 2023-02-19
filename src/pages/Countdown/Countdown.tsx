
import { EventDate, EventTitle } from "./index";
import EventTitleInput from "./ActiveEditOn/EventTitleInput";
import EventDateInput from "./ActiveEditOn/EventDateInput";
import { useCountdownContext } from "../../contexts/CountdownContext";
import SaveBtn from "./ActiveEditOn/SaveBtn";
import EditBtn from "./ActiveEditOff/EditBtn";
import DaysLeft from './ActiveEditOff/DaysLeft';

const Countdown = () => {
  const { activeEdit } = useCountdownContext();

  return (
    <div>
      {activeEdit ? (
        <>
          <SaveBtn />
          <EventTitleInput />
          <EventDateInput />
        </>
      ) : (
        <>
          <EditBtn />
          <EventTitle />
          <DaysLeft />
          <EventDate />
        </>
      )}
    </div>
  );
};

export default Countdown;
