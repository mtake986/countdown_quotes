
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import Item from "./Item";

const QList = () => {
  const { allPublicQuotes } = useQuoteContext();

  return (
    <div className="flex flex-col gap-2">
      {allPublicQuotes?.map((q, i) => (
        <Item q={q} i={i} key={i} />
      ))}
    </div>
  );
};

export default QList;
