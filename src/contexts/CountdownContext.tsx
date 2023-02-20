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
  const [currEventDate, setCurrEventDate] = useState<Dayjs | Date | null>(
    dayjs(new Date())
  );
  const [currEventTitle, setCurrEventTitle] = useState<string>("event");
  const [daysLeft, setDaysLeft] = useState<number>(40);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [eventTitleInputText, setEventTitleInputText] =
    useState<string>(currEventTitle);
  const [eventDateInputText, setEventDateInputText] = useState<
    Dayjs | Date | null
  >(currEventDate);

  function handleEventDate(date: Dayjs | Date | null) {
    console.log(date);
    setCurrEventDate(date);
  }

  function handleEventTitle(
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    console.log(event.target.value);
    setCurrEventTitle(event.target.value);
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

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
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

  function handleSaveBtnClick() {
    handleToggleModal();
    console.log(eventTitleInputText);
    setCurrEventTitle(eventTitleInputText);
    setCurrEventDate(eventDateInputText);
    handleDaysLeft(eventDateInputText);
  }

  return (
    <CountdownContext.Provider
      value={{
        currEventDate,
        setCurrEventDate,
        handleEventDate,
        currEventTitle,
        handleEventTitle,
        handleDaysLeft,
        daysLeft,
        isModalOpen,
        handleToggleModal,
        eventTitleInputText,
        eventDateInputText,
        handleEventTitleInputText,
        handleEventDateInputText,
        handleSaveBtnClick,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
