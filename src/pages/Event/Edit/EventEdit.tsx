import { useCountdownContext } from "../../../contexts/Countdown/CountdownContext";
import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import EventDateInput from "./EventDateInput";
import EventTitleInput from "./EventTitleInput";
import SaveBtn from "./SaveBtn";
import Title from "./Title";
import { Navigate, useNavigate } from "react-router-dom";
import PleaseCreateEventBtn from "../../../utils/PleaseCreateEventBtn copy";


const EventEdit = () => {
  const { myEvents, handleDelete } = useCountdownContext();
  const navigate = useNavigate();

  if (myEvents.length === 0) {
    return <PleaseCreateEventBtn />;
  }

  return (
    <div className="p-5 max-w-md mx-auto flex flex-col items-center gap-4">
      <Title />
      <div className="w-full flex flex-col items-center justify-between gap-3 sm:gap-10">
        <div className="flex flex-col gap-4 flex-1">
          <EventTitleInput />
          <EventDateInput />
        </div>
      </div>
      <SaveBtn />
      <div
        onClick={() => {
          handleDelete();
        }}
      >
        delete
      </div>
    </div>
  );
};

export default EventEdit;
