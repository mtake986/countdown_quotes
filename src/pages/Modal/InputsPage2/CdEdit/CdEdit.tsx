import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import EventDateInput from "./EventDateInput";
import EventTitleInput from "./EventTitleInput";
import SaveBtn from "./SaveBtn";
import Title from "./Title";

const CdEdit = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Title />
      <div className="flex flex-col gap-6">
        <EventTitleInput />
        <EventDateInput />
      </div>
      <SaveBtn />
    </div>
  );
};

export default CdEdit;
