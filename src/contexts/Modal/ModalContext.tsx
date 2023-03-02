import { useState, createContext, useContext } from "react";
import { ModalContextType } from "./interface";

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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleSelectTypeAndAct(type: string, act: string) {
    setSelectedTypeAndAct({ type, act });
    setCurrPageNum(currPageNum + 1);
    console.log(selectedTypeAndAct);
  }

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
    console.log(isModalOpen);
  }

  function handleCurrPageNum(text: string) {
    if (text === "done") {
      setCurrPageNum(1);
    } else if (text === "prev") {
      setCurrPageNum(currPageNum - 1);
    }
  }

  return (
    <ModalContext.Provider
      value={{
        selectedTypeAndAct,
        handleSelectTypeAndAct,
        currPageNum,
        handleCurrPageNum,
        isModalOpen,
        handleToggleModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
