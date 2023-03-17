import React, { useEffect } from "react";
import { useAuthContext } from "../../../contexts/Auth/AuthContext";
import { useQuoteContext } from "../../../contexts/Quote/QuoteContext";
import Loading from "../../../utils/Loading";
import QList from "./QList";

const AllQuotes = () => {
  const { fetchPublicAllQuotes, loading, allQuotesByUsers } = useQuoteContext();
  const { loginUser } = useAuthContext();
  useEffect(() => {
    fetchPublicAllQuotes();
  }, []);

  if (loading === true) {
    return <Loading />;
  }

  return <QList />;
};

export default AllQuotes;
