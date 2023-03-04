import { useState, createContext, useContext } from "react";
import { QUOTES_LIST } from "../../assets/CONST";
import { getRandomInt } from "../../utils/functions";
import {
  Props,
  IQuote,
  IMyQuotesBeingChanged,
  QuoteContextType,
} from "./interface";

import { db } from "../../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const QuoteContext = createContext({});

export const useQuoteContext = () => {
  return useContext(QuoteContext) as QuoteContextType;
};

export const QuoteContextProvider: React.FC<Props> = ({ children }) => {
  const [quote, setQuote] = useState<IQuote>(null);
  const [myQuotes, setMyQuotes] = useState<IQuote[]>([]);
  const [quoteTextInputText, setQuoteTextInputText] = useState<string>("");
  const [speakerNameInputText, setSpeakerNameInputText] = useState<string>("");

  const [myQuotesBeingChanged, setMyQuotesBeingChanged] = useState<
    IMyQuotesBeingChanged[]
    // IQuote[]
  >([]);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);

  // ========== handle Inputs ==========
  function handleQuoteTextInputText(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) {
    // todo: create multiple inputs list and call updateDoc for each element in the list
    // todo: get the quote being edited and change only the value of quoteInputTextInput, then add the whole quote to the list
    setQuoteTextInputText(e.target.value);
    if (type === "edit") {
      // todo: store index as a key if myQuotesBeingChanged has the index

      let payload = {};
      payload = {
        [currentQuoteIndex]: {
          quoteText: quoteTextInputText,
          speakerName: myQuotes[currentQuoteIndex].speakerName,
          uid: myQuotes[currentQuoteIndex].uid,
          id: myQuotes[currentQuoteIndex].id,
        },
      };
      setMyQuotesBeingChanged((prev) => ({
        ...prev,
        ...payload,
      }));

      // setMyQuotesBeingChanged([
      //   ...myQuotesBeingChanged,
      //   // {
      //   //   quoteText: quoteTextInputText,
      //   //   speakerName: myQuotes[currentQuoteIndex].speakerName,
      //   //   uid: myQuotes[currentQuoteIndex].uid,
      //   // },

      //   {
      //     [currentQuoteIndex]: {
      //       quoteText: quoteTextInputText,
      //       speakerName: myQuotes[currentQuoteIndex].speakerName,
      //       uid: myQuotes[currentQuoteIndex].uid,
      //     },
      //   },
      // ]);
      console.log({ myQuotesBeingChanged });
    }
  }
  function handleSpeakerNameInputText(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) {
    setSpeakerNameInputText(e.target.value);
    if (type === "edit") {
      let payload = {};
      payload = {
        [currentQuoteIndex]: {
          quoteText: myQuotes[currentQuoteIndex].quoteText,
          speakerName: speakerNameInputText,
          uid: myQuotes[currentQuoteIndex].uid,
          id: myQuotes[currentQuoteIndex].id,
        },
      };
      setMyQuotesBeingChanged((prev) => ({
        ...prev,
        ...payload,
      }));
      // setMyQuotesBeingChanged([
      //   ...myQuotesBeingChanged,
      //   // {
      //   //   quoteText: quoteTextInputText,
      //   //   speakerName: myQuotes[currentQuoteIndex].speakerName,
      //   //   uid: myQuotes[currentQuoteIndex].uid,
      //   // },
      //   {
      //     [currentQuoteIndex]: {
      //       quoteText: myQuotes[currentQuoteIndex].quoteText,
      //       speakerName: speakerNameInputText,
      //       uid: myQuotes[currentQuoteIndex].uid,
      //     },
      //   },
      // ]);
      console.log({ myQuotesBeingChanged });
    }
  }

  function handleChangeCurrentQuoteIndex(text: string) {
    if (text === "prev" && currentQuoteIndex > 0) {
      setCurrentQuoteIndex((prev) => prev - 1);
    } else if (text === "next" && currentQuoteIndex < myQuotes.length - 1) {
      setCurrentQuoteIndex((prev) => prev + 1);
    }
  }

  // ========== Firestore Events ==========
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
        // setQuote(QUOTES_LIST[getRandomInt(QUOTES_LIST.length)]);
      });
  }
  // todo: fetch quotes
  async function fetchQuotesCreatedByLoginUser(uid: string) {
    const quotesAddedByUsersRef = collection(db, "quotesAddedByUsers");

    const q = query(quotesAddedByUsersRef, where("uid", "==", uid));

    onSnapshot(q, (snapshot) => {
      setMyQuotes(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          id: doc.id,
        }))
      );
      // setMyQuotesBeingChanged(
      //   snapshot.docs.map((doc) => ({
      //     quoteText: doc.data().quoteText,
      //     speakerName: doc.data().speakerName,
      //     uid: doc.data().uid,
      //     id: doc.id,
      //   }))
      // );
    });
  }

  // todo: add quotes
  async function handleCreateQuote(uid: string) {
    const collectionRef = collection(db, "quotesAddedByUsers");
    const payload = {
      quoteText: quoteTextInputText,
      speakerName: speakerNameInputText,
      uid,
    };
    const docRef = await addDoc(collectionRef, payload);
    console.log("Success!! \n\tThe new ID is: " + docRef.id);

    clearInputs();
  }

  function handleUpdateQuotes() {
    console.log(
      "handleUpdateQuotes",
      myQuotesBeingChanged.length,
      myQuotesBeingChanged
    );
    Object.keys(myQuotesBeingChanged).forEach(function (key, index) {
      const payload = myQuotesBeingChanged[key];
      console.log(myQuotesBeingChanged[key]);
      
      handleUpdateQuote(payload);
    });
    setMyQuotesBeingChanged([]);
    clearInputs();
  }
  // todo: update quotes 
  async function handleUpdateQuote(payload: IQuote) {

    const docRef = doc(
      db,
      "quotesAddedByUsers",
      payload.id
    );

    // console.log({payload})
    // await updateDoc(docRef, payload);
  }

  function clearInputs() {
    setQuoteTextInputText("");
    setSpeakerNameInputText("");
  }

  return (
    <QuoteContext.Provider
      value={{
        getRandomeQuote,
        quote,
        handleQuoteTextInputText,
        quoteTextInputText,
        handleSpeakerNameInputText,
        speakerNameInputText,
        fetchQuotesCreatedByLoginUser,
        handleCreateQuote,
        handleUpdateQuotes,
        myQuotes,
        handleChangeCurrentQuoteIndex,
        currentQuoteIndex,
        myQuotesBeingChanged,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
