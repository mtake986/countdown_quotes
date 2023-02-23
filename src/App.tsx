import React from "react";
import "./App.css";
// import { Header, Countdown, Quote, Footer } from "./pages"; // webpack error
import { Header } from "./pages/Header";
import { Countdown } from "./pages/Countdown";
import { Quote } from "./pages/Quote";
import { Footer } from "./pages/Footer";
import { CountdownContextProvider } from "./contexts/CountdownContext";
import { QuoteContextProvider } from "./contexts/QuoteContext";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CountdownContextProvider>
          <QuoteContextProvider>
            <Header />
            <div className="mt-5 sm:mt-10 max-w-lg mx-auto rounded-3xl flex flex-col items-center justify-center overflow-hidden p-5 sm:p-10">
              <Countdown />
              <Quote />
            </div>
            <Footer />
          </QuoteContextProvider>
        </CountdownContextProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
