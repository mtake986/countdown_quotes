import { useState, createContext, useContext, SetStateAction } from "react";

const CountdownContext = createContext({});

export const useCountdownContext = () => {
  return useContext(CountdownContext);
};

interface Props {
  children: React.ReactNode;
}

export const CountdownContextProvider: React.FC<Props> = ({ children }) => {
  const [eventDate, setEventDate] = useState<Date>(new Date());

  function handleEventDate(e: React.ChangeEvent<HTMLInputElement>) {
    setEventDate(e.target.value);
  }

  return (
    <CountdownContext.Provider value={{ eventDate, handleEventDate }}>
      {children}
    </CountdownContext.Provider>
  );
};
