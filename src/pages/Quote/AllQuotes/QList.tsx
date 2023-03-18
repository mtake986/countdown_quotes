import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import Item from "./Item";

const QList = () => {
  const { filterAllQuotesProperties, allPublicQuotes, filteredAllQuotes } =
    useQuoteContext();

  if (
    filterAllQuotesProperties.quoteText === "" &&
    filterAllQuotesProperties.speakerName === ""
    // filterAllQuotesProperties.likes === 0
  ) {
    return (
      <div className="flex flex-col gap-2">
        {allPublicQuotes?.map((q, i) => (
          <Item q={q} i={i} key={i} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-2">
        {filteredAllQuotes?.map((q, i) => (
          <Item q={q} i={i} key={i} />
        ))}
        {filteredAllQuotes.length === 0 ? <div>no quotes matched</div> : null}
      </div>
    );
  }
};

export default QList;
