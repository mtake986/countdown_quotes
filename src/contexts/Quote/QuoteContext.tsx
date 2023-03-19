import { useState, createContext, useContext } from "react";
import { QUOTES_LIST } from "../../assets/CONST";
import { getRandomInt } from "../../utils/functions";
import {
  Props,
  IQuote,
  QuoteContextType,
  IfilterMyQuotesProperties,
} from "./interface";

import { db } from "../../config/firebase";
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  increment,
  onSnapshot,
  Query,
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
  const [filterMyQuotesProperties, setFilterMyQuotesProperties] =
    useState<IfilterMyQuotesProperties>({
      quoteText: "",
      speakerName: "",
      dontShow: "Both",
      likes: 0,
    });
  const [filteredMyQuotes, setFilteredMyQuotes] = useState<IQuote[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [filteredAllQuotes, setFilteredAllQuotes] = useState<IQuote[]>([]);
  const [filterAllQuotesProperties, setFilterAllQuotesProperties] =
    useState<IfilterMyQuotesProperties>({
      quoteText: "",
      speakerName: "",
      dontShow: "Both",
      likes: 0,
    });

  // todo: ========== handle inputs ==========
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

  function handleCurrentQuoteId(docId: string) {
    setCurrentQuoteId(docId);
  }

  // todo:  === filter my quotes
  function handleFilterMyQuotesProperties(key: string, val: string) {
    if (key === "quoteText") {
      setFilterMyQuotesProperties((prev) => ({
        ...prev,
        quoteText: val,
      }));
    } else if (key === "speakerName") {
      setFilterMyQuotesProperties((prev) => ({
        ...prev,
        speakerName: val,
      }));
    } else if (key === "dontShow") {
      setFilterMyQuotesProperties((prev) => ({
        ...prev,
        dontShow: val,
      }));
    }

    // todo: more than oo likes
  }

  function clearFilterMyQuotesProperties() {
    setFilterMyQuotesProperties({
      quoteText: "",
      speakerName: "",
      dontShow: "Both",
      likes: 0,
    });
  }

  // todo:  === filter all quotes
  function handleFilterAllQuotesProperties(key: string, val: string) {
    if (key === "quoteText") {
      setFilterAllQuotesProperties((prev) => ({
        ...prev,
        quoteText: val,
      }));
    } else if (key === "speakerName") {
      setFilterAllQuotesProperties((prev) => ({
        ...prev,
        speakerName: val,
      }));
    }
    // todo: more than oo likes
  }

  function clearFilterAllQuotesProperties() {
    setFilterAllQuotesProperties({
      quoteText: "",
      speakerName: "",
      dontShow: "Both",
      likes: 0,
    });
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
          docId: doc.id,
          dontShow: doc.data().dontShow,
          likes: doc.data().likes,
          usersLiked: doc.data().usersLiked,
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
          docId: doc.id,
          dontShow: doc.data().dontShow,
          likes: doc.data().likes,
          usersLiked: doc.data().usersLiked,
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
          docId: doc.id,
          dontShow: doc.data().dontShow,
          likes: doc.data().likes,
          usersLiked: doc.data().usersLiked,
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
          docId: doc.id,
          dontShow: doc.data().dontShow,
          likes: doc.data().likes,
          usersLiked: doc.data().usersLiked,
        }))
      );
    });
  }

  function fetchMyQuotesByProperties(uid: string) {
    const quotesRef = collection(db, "quotesAddedByUsers");

    let q = query(quotesRef, where("uid", "==", uid));

    console.log(filterMyQuotesProperties.dontShow);

    if (filterMyQuotesProperties.quoteText !== "") {
      q = query(
        quotesRef,
        where("quoteText", "==", filterMyQuotesProperties.quoteText)
      );
    }
    if (filterMyQuotesProperties.speakerName !== "") {
      q = query(
        q,
        where("speakerName", "==", filterMyQuotesProperties.speakerName)
      );
    }

    if (filterMyQuotesProperties.dontShow === "On") {
      q = query(q, where("dontShow", "==", true));
    } else if (filterMyQuotesProperties.dontShow === "Off") {
      q = query(q, where("dontShow", "==", false));
    }

    onSnapshot(q, (snapshot) => {
      setFilteredMyQuotes(
        snapshot.docs.map((doc) => ({
          quoteText: doc.data().quoteText,
          speakerName: doc.data().speakerName,
          uid: doc.data().uid,
          docId: doc.id,
          dontShow: doc.data().dontShow,
          likes: doc.data().likes,
          usersLiked: doc.data().usersLiked,
        }))
      );
    });
  }

  function fetchAllQuotesByProperties() {
    const quotesRef = collection(db, "quotesAddedByUsers");

    console.log(filterAllQuotesProperties);
    let q: Query<DocumentData>;

    if (
      filterAllQuotesProperties.quoteText === "" &&
      filterAllQuotesProperties.speakerName === ""
    ) {
      onSnapshot(quotesRef, (snapshot) => {
        setFilteredAllQuotes(
          snapshot.docs.map((doc) => ({
            quoteText: doc.data().quoteText,
            speakerName: doc.data().speakerName,
            uid: doc.data().uid,
            docId: doc.id,
            dontShow: doc.data().dontShow,
            likes: doc.data().likes,
            usersLiked: doc.data().usersLiked,
          }))
        );
      });
    } else {
      if (filterAllQuotesProperties.quoteText !== "") {
        q = query(
          quotesRef,
          where("quoteText", "==", filterAllQuotesProperties.quoteText)
        );
      }
      if (filterAllQuotesProperties.speakerName !== "") {
        q = query(
          q,
          where("speakerName", "==", filterAllQuotesProperties.speakerName)
        );
      }
      // todo: llikes

      onSnapshot(q, (snapshot) => {
        setFilteredAllQuotes(
          snapshot.docs.map((doc) => ({
            quoteText: doc.data().quoteText,
            speakerName: doc.data().speakerName,
            uid: doc.data().uid,
            docId: doc.id,
            dontShow: doc.data().dontShow,
            likes: doc.data().likes,
            usersLiked: doc.data().usersLiked,
          }))
        );
      });
    }
  }

  // todo: add, update, delete
  // todo: add quotes
  async function handleCreateQuote(uid: string) {
    const collectionRef = collection(db, "quotesAddedByUsers");
    const payload = {
      quoteText: quoteTextInputText,
      speakerName: speakerNameInputText,
      uid,
      dontShow: inputDontShow,
      likes: 0,
      usersLiked: [],
    };
    const docRef = await addDoc(collectionRef, payload);
    console.log(
      "Success in creating a quote!! \n\tThe new ID is: " + docRef.id
    );
    clearInputs();
  }

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

  // todo: delete quotes
  async function handleDelete(docId: string) {
    const docRef = doc(db, "quotesAddedByUsers", docId);
    await deleteDoc(docRef);
  }
  function clearInputs() {
    setQuoteTextInputText("");
    setSpeakerNameInputText("");
    setInputDontShow(false);
  }

  async function handleLike( qid: string, uid: string) {
    const docRef = doc(db, "quotesAddedByUsers", qid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const q = docSnap.data();
      console.log({q})
      if (!q.usersLiked.includes(uid)) {
        console.log('if', q.usersLiked);
        await updateDoc(docRef, {
          likes: increment(1),
          usersLiked: arrayUnion(uid),
        });
      } else {
        console.log("else", q.usersLiked);
        await updateDoc(docRef, {
          likes: increment(-1),
          usersLiked: arrayRemove(uid),
        });
      }
    } else {
      console.log("No such document!");
    }
  }

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
        handleFilterMyQuotesProperties,
        filterMyQuotesProperties,
        filteredMyQuotes,
        loading,
        fetchAllQuotesByUsers,
        allQuotesByUsers,
        fetchPublicMyQuotes,
        fetchMyQuotesByProperties,
        fetchQuotesAddedByLoginUser,
        fetchPublicAllQuotes,
        allPublicQuotes,
        clearFilterMyQuotesProperties,
        handleFilterAllQuotesProperties,
        clearFilterAllQuotesProperties,
        fetchAllQuotesByProperties,
        filteredAllQuotes,
        filterAllQuotesProperties,
        handleLike,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};
