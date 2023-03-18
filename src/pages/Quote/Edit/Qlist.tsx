import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import { BiEdit, BiTrash } from "react-icons/bi";
import Item from "./Item";

const Qlist = () => {
  const { myQuotes, filteredMyQuotes, filterProperties, loading } =
    useQuoteContext();

  if (loading === true) {
    return <div>Loading...</div>;
  } else {
    if (
      filterProperties.quoteText === "" &&
      filterProperties.speakerName === "" &&
      filterProperties.dontShow === "Both"
    ) {
      console.log({myQuotes});
      
      return (
        <div className="flex flex-col gap-2">
          {myQuotes?.map((q, i) => (
            <Item q={q} i={i} key={i} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex flex-col gap-2">
          {filteredMyQuotes?.map((q, i) => (
            <Item q={q} i={i} key={i} />
          ))}
          {filteredMyQuotes.length === 0 ? <div>no quotes matched</div> : null}
        </div>
      );
    }
  }
};

export default Qlist;
