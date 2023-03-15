import React, { useEffect } from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import Item from "./Item";

const QList = () => {
  const { allPublicQuotes } = useQuoteContext();

  useEffect(() => {
    console.log("qlist: ", { allPublicQuotes });
  }, []);

  return (
    <div className="flex flex-col gap-2 p-5">
      {allPublicQuotes?.map((q, i) => (
        <Item q={q} i={i} key={i} />
      ))}
    </div>
  );
};

export default QList;
