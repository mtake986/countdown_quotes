import { useState, createContext, useContext } from "react";
import { QUOTES_LIST } from "../../assets/CONST";
import { getRandomInt } from "../../utils/functions";
import {
  Props,
  IQuote,
  QuoteContextType,
  IFilterProperties,
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
  const [allQuotesByUsers, setAllQuotesByUsers] = useState<IQuote[]>([]);
  const [quoteTextInputText, setQuoteTextInputText] = useState<string>("");
  const [speakerNameInputText, setSpeakerNameInputText] = useState<string>("");
  const [inputDontShow, setInputDontShow] = useState<boolean | null>(true);

  const [myQuotesBeingChanged, setMyQuotesBeingChanged] = useState<IQuote[]>(
    []
  );
  const [editModalOpen, setEditModalOpen] = useState(false);
  const toggleEditModal = () => setEditModalOpen(!editModalOpen);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [myPublicQuotes, setMyPublicQuotes] = useState<IQuote[]>([]);
  const [allPublicQuotes, setAllPublicQuotes] = useState<IQuote[]>([]);
  const [currentQuoteId, setCurrentQuoteId] = useState<string>("");
  const [filterProperties, setFilterProperties] = useState<IFilterProperties>({
    quoteText: "",
    speakerName: "",
    dontShow: "Both",
  });
  const [filteredMyQuotes, setFilteredMyQuotes] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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

  function handleInputDontShow(text?: string, curr?: boolean) {
    if (text === "whenOpenModal") {
      setInputDontShow(curr);
      return;
    }
    setInputDontShow((prev) => !prev);
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
        if (currentQuoteIndex < myPublicQuotes.length - 1) {
          setCurrentQuoteIndex((prev) => prev + 1);
        }
        break;
    }
  }

  function handleCurrentQuoteId(id: string) {
    setCurrentQuoteId(id);
  }

  // todo: START ========== Firestore Events ==========
  // todo: fetch quotes, fetch all, then filter in a different function and call it when needed
  async function fetchAllQuotesByUsers() {
    setLoading(true);
    setAllQuotesByUsers([]);
    let allQuotesByUsersRef = collection(db, "quotesAddedByUsers");

    onSnapshot(allQuotesByUsersRef, (snapshot) => {
      setAllQuotesByUsers(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          id: doc.id,
          dontShow: doc.data().dontShow,
        }))
      );
    });
    setLoading(false);
  }

  function fetchQuotesAddedByLoginUser(uid: string) {
    setLoading(true);
    console.log(loading);

    setMyQuotes([]);
    let allQuotesByUsersRef = collection(db, "quotesAddedByUsers");

    let q = query(allQuotesByUsersRef, where("uid", "==", uid));

    onSnapshot(q, (snapshot) => {
      setMyQuotes(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          id: doc.id,
          dontShow: doc.data().dontShow,
        }))
      );
    });
    setLoading(false);
    console.log(loading);
  }

  function fetchPublicMyQuotes(uid: string) {
    setLoading(true);
    setMyQuotes([]);
    const quotesRef = collection(db, "quotesAddedByUsers");

    let q = query(
      quotesRef,
      where("uid", "==", uid),
      where("dontShow", "==", false)
    );
    onSnapshot(q, (snapshot) => {
      setMyPublicQuotes(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          id: doc.id,
          dontShow: doc.data().dontShow,
        }))
      );
    });
    setLoading(false);
  }

  function fetchPublicAllQuotes() {
    setAllPublicQuotes([]);
    const quotesRef = collection(db, "quotesAddedByUsers");

    const q = query(quotesRef, where("dontShow", "==", false));

    onSnapshot(q, (snapshot) => {
      setAllPublicQuotes(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          id: doc.id,
          dontShow: doc.data().dontShow,
        }))
      );
    });
  }

  function fetchMyQuotesByProperties(uid: string) {
    const quotesRef = collection(db, "quotesAddedByUsers");

    let q = query(quotesRef, where("uid", "==", uid));

    console.log(filterProperties.dontShow);

    if (filterProperties.quoteText !== "") {
      q = query(
        quotesRef,
        where("quoteText", "==", filterProperties.quoteText)
      );
    }
    if (filterProperties.speakerName !== "") {
      q = query(q, where("speakerName", "==", filterProperties.speakerName));
    }

    if (filterProperties.dontShow === "On") {
      q = query(q, where("dontShow", "==", true));
    } else if (filterProperties.dontShow === "Off") {
      q = query(q, where("dontShow", "==", false));
    }

    onSnapshot(q, (snapshot) => {
      setFilteredMyQuotes(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          id: doc.id,
          dontShow: doc.data().dontShow,
        }))
      );
    });
  }

  // todo: filter inputs =========
  function handleFilterProperties(key: string, val: string) {
    if (key === "quoteText") {
      setFilterProperties((prev) => ({
        ...prev,
        quoteText: val,
      }));
    } else if (key === "speakerName") {
      setFilterProperties((prev) => ({
        ...prev,
        speakerName: val,
      }));
    } else if (key === "dontShow") {
      setFilterProperties((prev) => ({
        ...prev,
        dontShow: val,
      }));
    }
  }

  function clearFilterProperties() {
    setFilterProperties({
      quoteText: "",
      speakerName: "",
      dontShow: "Both",
    });
  }

  // todo: add quotes
  async function handleCreateQuote(uid: string) {
    const collectionRef = collection(db, "quotesAddedByUsers");
    const payload = {
      quoteText: quoteTextInputText,
      speakerName: speakerNameInputText,
      uid,
      dontShow: inputDontShow,
    };
    const docRef = await addDoc(collectionRef, payload);
    console.log(
      "Success in creating a quote!! \n\tThe new ID is: " + docRef.id
    );
    clearInputs();
  }

  // ! doesn't update

  // todo: update quotes (call handleUpdateQuote())
  function handleUpdateQuotes(qid: string) {
    handleUpdateQuote(qid);
  }
  // todo: update quote
  async function handleUpdateQuote(qid: string) {
    const docRef = doc(db, "quotesAddedByUsers", qid);

    let payload = {};
    if (quoteTextInputText !== "") payload["quoteText"] = quoteTextInputText;
    if (speakerNameInputText !== "")
      payload["speakerName"] = speakerNameInputText;
    payload["dontShow"] = inputDontShow;

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
    setInputDontShow(false);
  }
  // todo: END ========== Firestore Events ==========

  return (
    <QuoteContext.Provider
      value={{
        // getRandomeQuote,
        quote,
        handleQuoteTextInputText,
        quoteTextInputText,
        handleSpeakerNameInputText,
        speakerNameInputText,
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
        handleInputDontShow,
        inputDontShow,
        myPublicQuotes,
        handleCurrentQuoteId,
        currentQuoteId,
        handleFilterProperties,
        filterProperties,
        filteredMyQuotes,
        loading,
        fetchAllQuotesByUsers,
        allQuotesByUsers,
        fetchPublicMyQuotes,
        fetchMyQuotesByProperties,
        fetchQuotesAddedByLoginUser,
        fetchPublicAllQuotes,
        allPublicQuotes,
        clearFilterProperties,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
