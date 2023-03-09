import React from "react";
import { useNavigate } from "react-router-dom";

const PleaseCreateQuoteBtn = () => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer hover:opacity-50 text-sky-500 duration-200 text-2xl bg-sky-50 p-3 rounded-lg text-center w-1/2 m-auto"
      onClick={() => navigate("/quote/create")}
    >
      Create a quote
    </div>
  );
};

export default PleaseCreateQuoteBtn;
