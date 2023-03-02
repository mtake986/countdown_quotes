import { useState, createContext, useContext } from "react";
import { QUOTES_LIST } from "../../assets/CONST";
import { getRandomInt } from "../../utils/functions";
import { Props, IQuote, QuoteContextType } from "./interface";

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
  const [TabScreenText, setTabScreenText] = useState<string>("Countdown");

  const [myQuotes, setMyQuotes] = useState<IQuote[]>([]);
  const [quoteInput, setQuoteInput] = useState<IQuote>({
    quoteText: "",
    speakerName: "",
    uid: "",
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
        // setQuote(QUOTES_LIST[getRandomInt(QUOTES_LIST.length)]);
      });
  }

  function handleQuoteInputs(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    type: string
  ) {
    if (type === "quoteText") {
      setQuoteInput({
        quoteText: e.target.value,
        speakerName: quoteInput.speakerName,
        uid: quoteInput.uid,
      });
    } else if (type === "name") {
      setQuoteInput({
        quoteText: quoteInput.quoteText,
        speakerName: e.target.value,
        uid: quoteInput.uid,
      });
    }
    console.log(quoteInput);
  }

  // todo: fetch quotes
  async function fetchQuotesCreatedByLoginUser(uid: string) {
    const quotesAddedByUsersRef = collection(db, "quotesAddedByUsers");

    const q = query(quotesAddedByUsersRef, where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    onSnapshot(quotesAddedByUsersRef, (snapshot) =>
      setMyQuotes(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          id: doc.id,
        }))
      )
    );
    console.log(myQuotes);
  }

  // todo: add quotes
  async function handleCreateQuote(uid: string) {
    const collectionRef = collection(db, "quotesAddedByUsers");
    const payload = {
      quoteText: quoteInput.quoteText,
      speakerName: quoteInput.speakerName,
      uid,
    };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);

    console.log(myQuotes);
    setQuoteInput({
      quoteText: "",
      speakerName: "",
      uid: "",
    });
  }

  // todo: update quotes
  async function handleUpdateQuote(uid: string) {
    const docRef = doc(db, "quotesAddedByUsers", myQuotes[0].id);
    const payload = {
      quoteText: quoteInput.quoteText,
      speakerName: quoteInput.speakerName,
      uid,
    };

    await updateDoc(docRef, payload);
    console.log(myQuotes[0].id);

    setQuoteInput({
      quoteText: "",
      speakerName: "",
      uid: "",
    });
    console.log({ myQuotes });
  }


  return (
    <QuoteContext.Provider
      value={{
        getRandomeQuote,
        quote,
        TabScreenText,
        handleQuoteInputs,
        quoteInput,
        handleCreateQuote,
        handleUpdateQuote,
        myQuotes,
        fetchQuotesCreatedByLoginUser,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
