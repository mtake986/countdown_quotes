import { useState, createContext, useContext } from "react";
import { UtilsContextType } from "./type";

import { Props } from "../interfaces";

const UtilsContext = createContext({});

export const useUtilsContext = () => {
  return useContext(UtilsContext) as UtilsContextType;
};

export const UtilsContextProvider: React.FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 425) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  return (
    <UtilsContext.Provider value={{ handleResize, isMobile }}>
      {children}
    </UtilsContext.Provider>
  );
};
