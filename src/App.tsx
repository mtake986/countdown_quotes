import React from "react";
import "./App.css";
import { Header } from "./pages/Header";
import { Countdown } from "./pages/Countdown";
import { Quote } from "./pages/Quote";
import { Footer } from "./pages/Footer";
import { CountdownContextProvider } from "./contexts/CountdownContext";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function App() {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CountdownContextProvider>
          <Header />
          <div className="gap-5 bg-sky-50 max-w-sm mx-auto rounded-3xl relative flex flex-col items-center justify-center overflow-hidden p-10 sm:py-12">
            <Countdown />
            <Quote />
          </div>
          <Footer />
        </CountdownContextProvider>
      </LocalizationProvider>
    </div>
  );
}

export default App;
