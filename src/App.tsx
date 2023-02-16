import React from "react";
import "./App.css";
import { Header } from "./pages/Header";
import { Home } from "./pages/Home";
import { Footer } from "./pages/Footer";
import { CountdownContextProvider } from "./contexts/CountdownContext";
function App() {
  return (
    <>
      <CountdownContextProvider>
        <Header />
        <Home />
        <Footer />
      </CountdownContextProvider>
    </>
  );
}

export default App;
