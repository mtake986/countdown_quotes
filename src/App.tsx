import React from "react";
import "./App.css";
// import { Header, Countdown, Quote, Footer } from "./pages"; // webpack error
import { Header } from "./pages/Header";
import { Countdown } from "./pages/Home/Countdown";
import { Quote } from "./pages/Home/Quote";
import { Footer } from "./pages/Footer";
import { MuiModal } from "./pages/Modal";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventCreate from "./pages/Event/Create/EventCreate";
import ContextProviders from "./ContextProviders";
import EventEdit from "./pages/Event/Edit/EventEdit";
import QuoteCreate from "./pages/Quote/Create/QuoteCreate";
import QuoteEdit from "./pages/Quote/Edit/QuoteEdit";

function App() {
  return (
    <ContextProviders>
      <div className="max-w-2xl m-auto">
        <Router>
          {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/event/create">Event Create</Link>
        </nav> */}
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="mt-5 sm:mt-10 max-w-lg mx-auto rounded-3xl flex flex-col items-center justify-center gap-5 p-5 sm:p-10">
                  <Countdown />
                  <Quote />
                </div>
              }
            />
            <Route path="/event">
              <Route path="create" element={<EventCreate />} />
              <Route path="edit" element={<EventEdit />} />
            </Route>
            <Route path="/quote">
              <Route path="create" element={<QuoteCreate />} />
              <Route path="edit" element={<QuoteEdit />} />
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </ContextProviders>
  );
}

export default App;
