import { useState, createContext, useContext } from "react";
import { CountdownContextType } from "./types";
import dayjs, { Dayjs } from "dayjs";

import { Props, IEvent } from "./interfaces";

import { db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const CountdownContext = createContext({});

export const useCountdownContext = () => {
  return useContext(CountdownContext) as CountdownContextType;
};

export const CountdownContextProvider: React.FC<Props> = ({ children }) => {
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
      eventDate: eventDateInputText,
      uid,
    };
    const docRef = await addDoc(collectionRef, payload);
    console.log("The new ID is: " + docRef.id);
    // setEvents([
    //   ...events,
    //   { eventTitle: eventTitleInputText, eventDate: eventDateInputText },
    // ]);
    // console.log({ events });
  }

  function handleSaveBtnClick(type: string, uid: string) {
    console.log(eventTitleInputText, type);
    if (type === "create") {
      handleCreateEvent(uid);
      setEventTitleInputText('')
      setEventDateInputText(new Date());
    } else {
      setEvents([
        { eventTitle: eventTitleInputText, eventDate: eventDateInputText },
      ]);
    }
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
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
