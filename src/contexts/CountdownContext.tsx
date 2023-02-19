import { useState, createContext, useContext } from "react";
import { CountdownContextType } from "./types";
import dayjs, { Dayjs } from "dayjs";

const CountdownContext = createContext({});

export const useCountdownContext = () => {
  return useContext(CountdownContext) as CountdownContextType;
};

interface Props {
  children: React.ReactNode;
}

export const CountdownContextProvider: React.FC<Props> = ({ children }) => {
  const [activeEdit, setActiveEdit] = useState<boolean>(false);
  const [eventDate, setEventDate] = useState<Dayjs | Date | null>(
    dayjs(new Date())
  );
  const [eventTitle, setEventTitle] = useState<string>("event");
  const [daysLeft, setDaysLeft] = useState<number>(40);

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
    setActiveEdit(!activeEdit);
  }

  function handleDaysLeft(date: Dayjs | Date | null) {
    const today = new Date();
    const date1 = date["$d"];
    const date2 = today;

    var Difference_In_Time = date1.getTime() - date2.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    setDaysLeft(Difference_In_Days);
    console.log(Difference_In_Days);
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
        handleDaysLeft,
        daysLeft,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
