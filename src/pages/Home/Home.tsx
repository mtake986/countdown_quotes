import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/Auth/AuthContext";
import { useCountdownContext } from "../../contexts/Countdown/CountdownContext";
import { useQuoteContext } from "../../contexts/Quote/QuoteContext";
import Countdown from "./Countdown/Countdown";
import Quotes from "./Quote/Quotes";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { myEvents, fetchMyEvent } = useCountdownContext();
  const { loginUser } = useAuthContext();
  const {
    myPublicQuotes,
    getQuotesAddedByLoginUser,
    currentQuoteIndex,
    excludeDontShowMyQuotes,
    myQuotes,
    fetchAllQuotesByUsers,
  } = useQuoteContext();

  useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      // alert('settimeout')
    }, 3000);

    if (loginUser && loginUser.uid) {
      console.log("useEffect", loginUser, loginUser.uid);
      fetchMyEvent(loginUser?.uid);

      fetchAllQuotesByUsers();
      getQuotesAddedByLoginUser(loginUser.uid);
      excludeDontShowMyQuotes(myQuotes);
    }
    setLoading(false);
  }, [loginUser]);

  if (!loginUser) {
    return <div>Please login with a google account.</div>;
  }

  if (loading === true) {
    return <div>loading</div>
  }

  return (
    <div className="mt-5 mx-auto max-w-lg rounded-3xl flex flex-col justify-center gap-5 p-5 sm:p-10">
      <Countdown />
      <Quotes />
    </div>
  );
};

export default Home;
