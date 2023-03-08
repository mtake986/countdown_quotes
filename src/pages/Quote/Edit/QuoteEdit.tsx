
import Title from "./Title";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import Qlist from "./Qlist";

const QuoteEdit = () => {

  return (
    // <div className="p-3 max-w-md mx-auto flex flex-col items-center gap-4">
    <div className="p-3 flex flex-col gap-4">
      <Title />
      <Qlist />
    </div>
  );
};

export default QuoteEdit;
