import { useState, createContext, useContext } from "react";
import { QuoteContextType } from "./types";
import { QUOTES_LIST } from "../assets/CONST";
import { getRandomInt } from "../utils/functions";
import { Props, IQuote } from "./interfaces";

const QuoteContext = createContext({});

export const useQuoteContext = () => {
  return useContext(QuoteContext) as QuoteContextType;
};

export const QuoteContextProvider: React.FC<Props> = ({ children }) => {
  const [quote, setQuote] = useState<IQuote>(null);
  const [TabScreenText, setTabScreenText] = useState<string>("Countdown");

  const [myQuotes, setMyQuotes] = useState<IQuote[]>([]);
  const [quoteInput, setQuoteInput] = useState<IQuote>({
    quoteText: "",
    speakerName: "",
  });

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

  function handleTabScreenText() {
    setTabScreenText(
      TabScreenText === "Countdown"
        ? "Quote"
        : TabScreenText === "Quote"
        ? "Countdown"
        : TabScreenText
    );
  }

  function handleQuoteInputs(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) {
    if (type === "quoteText") {
      setQuoteInput({
        quoteText: e.target.value,
        speakerName: quoteInput.speakerName,
      });
    } else if (type === "name") {
      setQuoteInput({
        quoteText: quoteInput.quoteText,
        speakerName: e.target.value,
      });
    }
    console.log(quoteInput);
  }

  function handleCreateQuote() {
    setMyQuotes([
      ...myQuotes,
      { quoteText: quoteInput.quoteText, speakerName: quoteInput.speakerName },
    ]);
    console.log(myQuotes);
    setQuoteInput({
      quoteText: "",
      speakerName: "",
    });
  }

  function handleUpdateQuote() {
    // todo: it doesn't update quotes
    // it adds an editted quote, so after this function
    // myQuotes have multiple quotes
    setMyQuotes([
      { quoteText: quoteInput.quoteText, speakerName: quoteInput.speakerName },
    ]);

    setQuoteInput({
      quoteText: "",
      speakerName: "",
    });
    console.log({myQuotes})
  }

  return (
    <QuoteContext.Provider
      value={{
        getRandomeQuote,
        quote,
        handleTabScreenText,
        TabScreenText,
        handleQuoteInputs,
        quoteInput,
        handleCreateQuote,
        handleUpdateQuote,
        myQuotes,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
