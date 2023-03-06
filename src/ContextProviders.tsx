import React from 'react'

import { CountdownContextProvider } from "./contexts/Countdown/CountdownContext";
import { QuoteContextProvider } from "./contexts/Quote/QuoteContext";
import { ModalContextProvider } from "./contexts/Modal/ModalContext";
import { AuthContextProvider } from "./contexts/Auth/AuthContext";
import { UtilsContextProvider } from "./contexts/Utils/UtilsContext";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { BrowserRouterProps } from 'react-router-dom';

const ContextProviders = ({ children }: BrowserRouterProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CountdownContextProvider>
        <QuoteContextProvider>
          <ModalContextProvider>
            <AuthContextProvider>
              <UtilsContextProvider>{children}</UtilsContextProvider>
            </AuthContextProvider>
          </ModalContextProvider>
        </QuoteContextProvider>
      </CountdownContextProvider>
    </LocalizationProvider>
  );
};

export default ContextProviders