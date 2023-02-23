import { useState, createContext, useContext } from "react";
import { ModalContextType } from "./types";
import dayjs, { Dayjs } from "dayjs";

const ModalContext = createContext({});

export const useModalContext = () => {
  return useContext(ModalContext) as ModalContextType;
};

interface Props {
  children: React.ReactNode;
}

export const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedType, setEditType] = useState<string | null>(null);
  const [currPageNum, setCurrPageNum] = useState<number | null>(1);

  function handleEditType(text: string) {
    setEditType(text);
    handleCurrPageNum("moveNext");
  }

  function handleCurrPageNum(move: string) {
    if (move === "moveNext") {
      setCurrPageNum(currPageNum + 1);
    } else if (move === "movePrev") {
      setCurrPageNum(currPageNum - 1);
    }
  }

  return (
    <ModalContext.Provider
      value={{
        selectedType,
        handleEditType,
        currPageNum,
        handleCurrPageNum,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
