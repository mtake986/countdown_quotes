import React from "react";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate();
  return (
    <h1
      onClick={() => navigate('/')}
      className="font-roboto text-sky-500 font-semibold text-2xl"
    >
      Countdown Quotes
    </h1>
  );
};

export default Title;
