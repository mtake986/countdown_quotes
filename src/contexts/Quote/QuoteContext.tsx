import { useState, createContext, useContext } from "react";
import { QUOTES_LIST } from "../../assets/CONST";
import { getRandomInt } from "../../utils/functions";
import {
  Props,
  IQuote,
  QuoteContextType,
} from "./interface";

import { db } from "../../config/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
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
    // IMyQuotesBeingChanged[]
    IQuote[]
  >([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const toggleEditModal = () => setEditModalOpen(!editModalOpen);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);

  // ========== handle Inputs ==========
  function handleQuoteTextInputText(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    // todo: create multiple inputs list and call updateDoc for each element in the list
    // todo: get the quote being edited and change only the value of quoteInputTextInput, then add the whole quote to the list
    setQuoteTextInputText(e.target.value);
  }

  function handleSpeakerNameInputText(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setSpeakerNameInputText(e.target.value);
  }

  function handleChangeCurrentQuoteIndex(text: string, i?: number) {
    switch (text) {
      case "select":
        setCurrentQuoteIndex(i);
        break;
      case "prev":
        if (currentQuoteIndex > 0) {
          setCurrentQuoteIndex((prev) => prev - 1);
        }
        break;
      case "next":
        if (currentQuoteIndex < myQuotes.length - 1) {
          setCurrentQuoteIndex((prev) => prev + 1);
        }
        break;
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

  // todo: update quotes (call handleUpdateQuote())
  function handleUpdateQuotes() {
    // Object.keys(myQuotesBeingChanged).forEach(function (key, index) {
    //   const payload = myQuotesBeingChanged[key];
    //   console.log("myQuotesBeingChanged[key]: ", myQuotesBeingChanged[key]);
    //   handleUpdateQuote(payload);
    // });
    // setMyQuotesBeingChanged([]);

    handleUpdateQuote();
  }
  // todo: update quote
  async function handleUpdateQuote() {
    const docRef = doc(
      db,
      "quotesAddedByUsers",
      myQuotes[currentQuoteIndex].id
    );

    let payload = {};
    if (quoteTextInputText !== "") payload["quoteText"] = quoteTextInputText;
    if (speakerNameInputText !== "")
      payload["speakerName"] = speakerNameInputText;

    await updateDoc(docRef, payload);
    clearInputs();
    toggleEditModal();
  }

  // todo: update quotes
  async function handleDelete(id: string) {
    const docRef = doc(db, "quotesAddedByUsers", id);
    await deleteDoc(docRef);
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
        handleDelete,
        toggleEditModal,
        editModalOpen,
        clearInputs,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
