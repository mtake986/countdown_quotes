import React from "react";
import { useAuthContext } from "../../../../../contexts/Auth/AuthContext";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

interface Props {
  handleClose: () => void;
}
const SubmitBtn = ({ handleClose }: Props) => {
  const { fetchMyQuotesByProperties, myQuotes } = useQuoteContext();

  const {loginUser} = useAuthContext();

  return (
    <button
      onClick={() => {
        fetchMyQuotesByProperties(loginUser?.uid);
        handleClose();
      }}
      className="w-full hover:bg-sky-50 text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
