import React, { useEffect } from "react";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import Loading from "../../../utils/Loading";
import QList from "./QList";

const AllQuotes = () => {
  const {
    excludeDontShowAllQuotes,
    loading,
    allQuotesByUsers,
  } = useQuoteContext();

  useEffect(() => {
    console.log("AllQUotes start: ");
    console.log("allquotes:", { allQuotesByUsers });

    excludeDontShowAllQuotes(allQuotesByUsers);
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  return <QList />;
};

export default AllQuotes;
