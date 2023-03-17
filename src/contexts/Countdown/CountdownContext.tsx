import { useState, createContext, useContext } from "react";
import dayjs, { Dayjs } from "dayjs";

import { Props, IEvent, CountdownContextType } from "./interface";

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

const CountdownContext = createContext({});

export const useCountdownContext = () => {
  return useContext(CountdownContext) as CountdownContextType;
};

export const CountdownContextProvider: React.FC<Props> = ({ children }) => {
  const [myEvents, setMyEvents] = useState<IEvent[]>([]);
  const [displayEventIndex, setDisplayEventIndex] = useState<number>(0);
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [eventTitleInputText, setEventTitleInputText] = useState<string>("");
  const [eventDateInputText, setEventDateInputText] = useState<
    Dayjs | Date | null
  >();

  function handleChangeEventTitle(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    console.log(event.target.value);
    setEventTitleInputText(event.target.value);
  }

  function handleDaysLeft(date: Dayjs | Date | null) {
    const today = new Date();
    const date1 = date["$d"];

    const Difference_In_Time = date1.getTime() - today.getTime();

    // To calculate the no. of days between two dates
    const Difference_In_Days = Math.ceil(
      Difference_In_Time / (1000 * 3600 * 24)
    );

    setDaysLeft(Difference_In_Days);
  }

  function handleEventTitleInputText(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setEventTitleInputText(event.target.value);
  }

  function handleEventDateInputText(date: Dayjs | Date | null) {
    setEventDateInputText(date);
    handleDaysLeft(date);
    console.log(date["$d"], daysLeft);
  }

  function handleDisplayEvent(text: string) {
    if (text === "prev") {
      if (displayEventIndex === 0) {
        setDisplayEventIndex(myEvents.length - 1);
      } else {
        setDisplayEventIndex(displayEventIndex - 1);
      }
    } else if (text === "next") {
      if (displayEventIndex === myEvents.length - 1) {
        setDisplayEventIndex(0);
      } else {
        setDisplayEventIndex(displayEventIndex + 1);
      }
    }
  }

  // todo: データを読み取って、eventsに保存＆表示
  async function fetchMyEvent(uid: string) {
    setMyEvents([]);
    const eventsRef = collection(db, "myEvents");

    const q = query(eventsRef, where("uid", "==", uid));

    // const querySnapshot = await getDocs(q);

    onSnapshot(q, (snapshot) =>
      setMyEvents(
        snapshot.docs.map((doc) => ({
          eventTitle: doc.data().eventTitle,
          eventDate: doc.data().eventDate.toDate(),
          daysLeft: doc.data().daysLeft,
          uid: doc.data().uid,
          id: doc.id,
        }))
      )
    );
  }

  // todo: create an event
  async function handleCreateEvent(uid: string) {
    const collectionRef = collection(db, "myEvents");

    let payload = {};
    if (eventTitleInputText !== "") {
      payload["eventTitle"] = eventTitleInputText;
    }
    if (eventDateInputText !== null) {
      payload["eventDate"] = eventDateInputText["$d"];
      handleDaysLeft(eventDateInputText);
    } else {
      handleDaysLeft(myEvents[0].eventDate);
    }
    payload = { ...payload, daysLeft, uid };

    console.log({ payload });

    const docRef = await addDoc(collectionRef, payload);
    console.log("Success in creating an event!! \nThe new ID is: " + docRef.id);
    clearInputs();
  }

  // todo: update an event
  async function handleUpdateEvent(uid: string) {
    const docRef = doc(db, "myEvents", myEvents[0].id);
    console.log("handleUpdateEvent", eventTitleInputText, eventDateInputText);

    let payload = {};
    if (eventTitleInputText !== "") {
      payload["eventTitle"] = eventTitleInputText;
    }
    if (eventDateInputText !== null) {
      payload["eventDate"] = eventDateInputText["$d"];
      handleDaysLeft(eventDateInputText);
    } else {
      handleDaysLeft(myEvents[0].eventDate);
    }
    payload = { ...payload, daysLeft, uid };

    console.log({ payload });

    await updateDoc(docRef, payload);

    clearInputs();
  }

  // todo: delete an event
  async function handleDelete() {
    const docRef = doc(db, "myEvents", myEvents[0].id);
    await deleteDoc(docRef);
  }

  function clearInputs() {
    setEventTitleInputText("");
    setEventDateInputText(null);
  }

  return (
    <CountdownContext.Provider
      value={{
        handleChangeEventTitle,
        handleDaysLeft,
        daysLeft,
        eventTitleInputText,
        eventDateInputText,
        handleEventTitleInputText,
        handleEventDateInputText,

        myEvents,
        handleDisplayEvent,
        displayEventIndex,
        fetchMyEvent,
        handleCreateEvent,
        handleUpdateEvent,
        handleDelete,
        clearInputs,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
