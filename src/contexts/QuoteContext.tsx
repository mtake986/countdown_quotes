import { useState, createContext, useContext } from "react";
import { QuoteContextType } from "./types";
import { QUOTES_LIST } from "../assets/CONST";
import { getRandomInt } from "../utils/functions";

const QuoteContext = createContext({});

export const useQuoteContext = () => {
  return useContext(QuoteContext) as QuoteContextType;
};

interface Props {
  children: React.ReactNode;
}

interface IQuote {
  text: string;
  author: string;
}

export const QuoteContextProvider: React.FC<Props> = ({ children }) => {
  const [quote, setQuote] = useState<IQuote>(null);

  function getRandomeQuote() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[getRandomInt(data.length)]);
      })
      .catch((err) => {
        console.error(err);
        setQuote(QUOTES_LIST[getRandomInt(QUOTES_LIST.length)]);
      });
  }

  return (
    <QuoteContext.Provider value={{ getRandomeQuote, quote }}>
      {children}
    </QuoteContext.Provider>
  );
};
