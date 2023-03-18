import React, { useEffect } from "react";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import Loading from "../../../utils/Loading";
import Title from "./Title";
import Filter from "./Filter/Filter";
import QList from "./QList";

const AllQuotes = () => {
  const { fetchPublicAllQuotes, loading } = useQuoteContext();
  useEffect(() => {
    fetchPublicAllQuotes();
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  return (
    <div className="max-w-md mx-auto p-5 flex flex-col gap-5">
      {/* // todo: add filter */}
      <Title />
      <Filter />
      <QList />
    </div>
  );
};

export default AllQuotes;
