import React from "react";
import Countdown from "./Countdown/Countdown";
import Quote from "./Quote/Quotes";

const Home = () => {
  return (
    <div className="mt-5 mx-auto max-w-lg rounded-3xl flex flex-col justify-center gap-5 p-5 sm:p-10">
      <Countdown />
      <Quote />
    </div>
  );
};

export default Home;
