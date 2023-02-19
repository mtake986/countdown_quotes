import { useState, createContext, useContext } from "react";
import { CountdownContextType } from "./types";
import dayjs, { Dayjs } from "dayjs";

const CountdownContext = createContext({});

export const useCountdownContext = () => {
  return useContext(CountdownContext) as CountdownContextType;
};

// React.useContext(TodoContext) as TodoContextType;

interface Props {
  children: React.ReactNode;
}

export const CountdownContextProvider: React.FC<Props> = ({ children }) => {
  const [activeEdit, setActiveEdit] = useState<boolean>(false);
  const [eventDate, setEventDate] = useState<Dayjs | Date | null>(
    dayjs(new Date())
  );
  const [eventTitle, setEventTitle] = useState<string>("event");

  function handleEventDate(date: Dayjs | Date | null) {
    console.log(date);
    setEventDate(date);
  }

  function handleEventTitle(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    console.log(event.target.value);
    setEventTitle(event.target.value);
  }

  function handleToggleEdit() {
    setActiveEdit(!activeEdit)
  }

  return (
    <CountdownContext.Provider
      value={{
        activeEdit,
        setActiveEdit,
        eventDate,
        setEventDate,
        handleEventDate,
        eventTitle,
        handleEventTitle,
        handleToggleEdit,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
