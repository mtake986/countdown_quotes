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
  );
};

export default Qlist;
