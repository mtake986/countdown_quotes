import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import EventDateInput from "./EventDateInput";
import EventTitleInput from "./EventTitleInput";
import SaveBtn from "./SaveBtn";
import Title from "./Title";

const CdEdit = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2 items-center">
        {/* <ArrowLeft /> */}
        <div className="flex gap-6 flex-col">
          <Title />
          <EventTitleInput />
          <EventDateInput />
        </div>
        {/* <ArrowRight /> */}
      </div>
      <div className="flex justify-between">
        <SaveBtn />
      </div>
    </div>
  );
};

export default CdEdit;
