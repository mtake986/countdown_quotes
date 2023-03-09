import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import { BiEdit, BiTrash } from "react-icons/bi";
import Item from "./Item";

const Qlist = () => {
  const { myQuotes } =
    useQuoteContext();
  return (
    <div className="flex flex-col gap-2">
      {myQuotes?.map((q, i) => (
        <Item q={q} i = {i} />
      ))}
    </div>
    // <div className="flex bg-sky-500">
    //   <div className="flex-none bg-red-500">01</div>
    //   <div className="flex-auto w-64 bg-violet-500">02</div>
    //   <div className="flex-auto w-32 bg-gradient-to-t">03</div>
    // </div>
  );
};

export default Qlist;
