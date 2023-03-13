import Title from "./Title";
import Qlist from "./Qlist";
import Filter from "./Filter/Filter";

const QuoteEdit = () => {
  // todo1: switch quote or name btn
  // todo2: filter out by words in quotes, names, dontShow

  return (
    <div className="p-5 flex flex-col gap-3">
      <Title />
      <Filter />
      <Qlist />
    </div>
  );
};

export default QuoteEdit;
