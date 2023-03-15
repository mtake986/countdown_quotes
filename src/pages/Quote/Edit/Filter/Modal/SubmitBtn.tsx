import React from "react";
import { useAuthContext } from "../../../../../contexts/Auth/AuthContext";
import { useQuoteContext } from "../../../../../contexts/Quote/QuoteContext";

interface Props {
  handleClose: () => void;
}
const SubmitBtn = ({ handleClose }: Props) => {
  const { excludeByPropertiesMyQuotes, myQuotes } = useQuoteContext();

  return (
    <button
      onClick={() => {
        excludeByPropertiesMyQuotes(myQuotes);
        handleClose();
      }}
      className="w-full hover:bg-sky-50 text-sky-600 rounded-md p-2 ease-in-out duration-200"
    >
      Submit
    </button>
  );
};

export default SubmitBtn;
