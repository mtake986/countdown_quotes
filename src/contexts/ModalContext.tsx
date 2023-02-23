import { useState, createContext, useContext } from "react";
import { ModalContextType } from "./types";

const ModalContext = createContext({});

export const useModalContext = () => {
  return useContext(ModalContext) as ModalContextType;
};

interface Props {
  children: React.ReactNode;
}

interface ITypeAndAct {
  type: string;
  act: string;
}

export const ModalContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedTypeAndAct, setSelectedTypeAndAct] =
    useState<ITypeAndAct | null>();
  const [currPageNum, setCurrPageNum] = useState<number | null>(1);
  function handleSelectTypeAndAct(type: string, act: string) {
    setSelectedTypeAndAct({ type, act });
    setCurrPageNum(currPageNum + 1);
  }

  function handleCurrPageNum() {
    setCurrPageNum(currPageNum - 1);
  }

  return (
    <ModalContext.Provider
      value={{
        selectedTypeAndAct,
        handleSelectTypeAndAct,
        currPageNum,
        handleCurrPageNum,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
