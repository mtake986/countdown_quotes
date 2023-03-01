import React from "react";
import "./App.css";
// import { Header, Countdown, Quote, Footer } from "./pages"; // webpack error
import { Header } from "./pages/Header";
import { Countdown } from "./pages/Countdown";
import { Quote } from "./pages/Quote";
import { Footer } from "./pages/Footer";
import { MuiModal } from "./pages/Modal";

import { CountdownContextProvider } from "./contexts/CountdownContext";
import { QuoteContextProvider } from "./contexts/QuoteContext";
import { ModalContextProvider } from "./contexts/ModalContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { UtilsContextProvider } from "./contexts/Utils/UtilsContext";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CountdownContextProvider>
          <QuoteContextProvider>
            <ModalContextProvider>
              <AuthContextProvider>
                <UtilsContextProvider>
                  <Header />
                  <div className="mt-5 sm:mt-10 max-w-lg mx-auto rounded-3xl flex flex-col items-center justify-center overflow-hidden p-5 sm:p-10">
                    <Countdown />
                    <Quote />
                  </div>
                  <MuiModal />
                  <Footer />
                </UtilsContextProvider>
              </AuthContextProvider>
            </ModalContextProvider>
          </QuoteContextProvider>
        </CountdownContextProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
