import { useState, createContext, useContext } from "react";
import { CountdownContextType } from "./types";
import dayjs, { Dayjs } from "dayjs";

import { Props, IEvent } from "./interfaces";

import { db } from "../config/firebase";
import { addDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";

const CountdownContext = createContext({});

export const useCountdownContext = () => {
  return useContext(CountdownContext) as CountdownContextType;
};

export const CountdownContextProvider: React.FC<Props> = ({ children }) => {
  const [e, setef] = useState([])
  const [events, setEvents] = useState<IEvent[]>([]);
  const [displayEventIndex, setDisplayEventIndex] = useState<number>(0);
  const [daysLeft, setDaysLeft] = useState<number>(40);
  const [eventTitleInputText, setEventTitleInputText] = useState<string>("");
  const [eventDateInputText, setEventDateInputText] = useState<
    Dayjs | Date | null
  >(new Date());

  function handleChangeEventTitle(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setEventTitleInputText(event.target.value);
  }

  function handleDaysLeft(date: Dayjs | Date | null) {
    const today = new Date();
    const date1 = date["$d"];
    const date2 = today;

    const Difference_In_Time = date1.getTime() - date2.getTime();

    // To calculate the no. of days between two dates
    const Difference_In_Days = Math.ceil(
      Difference_In_Time / (1000 * 3600 * 24)
    );
    const Difference_In = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    setDaysLeft(Difference_In_Days);
    console.log(Difference_In);
  }

  function handleEventTitleInputText(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setEventTitleInputText(event.target.value);
  }

  function handleEventDateInputText(date: Dayjs | Date | null) {
    console.log(date);
    setEventDateInputText(date);
  }

  async function handleCreateEvent(uid: string) {
    const collectionRef = collection(db, "events");
    const payload = {
      eventTitle: eventTitleInputText,
      eventDate: eventDateInputText['$d'],
      uid,
    };
    console.log(payload)
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
  }

  function handleSaveBtnClick(type: string, uid: string) {
    console.log(eventTitleInputText, type);
    if (type === "create") {
      handleCreateEvent(uid);
      setEventTitleInputText("");
      setEventDateInputText(new Date());
    } 
    // else {
    //   setEvents([
    //     { eventTitle: eventTitleInputText, eventDate: eventDateInputText },
    //   ]);
    // }
    handleDaysLeft(eventDateInputText);
  }

  function handleDisplayEvent(text: string) {
    if (text === "prev") {
      if (displayEventIndex === 0) {
        setDisplayEventIndex(events.length - 1);
      } else {
        setDisplayEventIndex(displayEventIndex - 1);
      }
    } else if (text === "next") {
      if (displayEventIndex === events.length - 1) {
        setDisplayEventIndex(0);
      } else {
        setDisplayEventIndex(displayEventIndex + 1);
      }
    }
  }

  // todo: データを読み取って、eventsに保存＆表示
  async function fetchEvent(uid: string) {
    const eventsRef = collection(db, "events");

    const q = query(eventsRef, where("uid", "==", uid));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    onSnapshot(eventsRef, (snapshot) =>
      setEvents(
        snapshot.docs.map((doc) => ({
          eventTitle: doc.data().eventTitle,
          eventDate: doc.data().eventDate.toDate(),
          uid: doc.data().uid,
        }))
      )
    );
    console.log(events)
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
        handleSaveBtnClick,
        events,
        handleDisplayEvent,
        displayEventIndex,
        fetchEvent,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
