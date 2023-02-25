import ArrowLeft from "./ArrowLeft";
import ArrowRight from "./ArrowRight";
import EventDateInput from "./EventDateInput";
import EventTitleInput from "./EventTitleInput";
import SaveBtn from "./SaveBtn";

const CdEdit = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex gap-4 items-center">
        {/* <ArrowLeft /> */}
        <div className="flex gap-8 flex-col">
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
