import React from "react";
import "./App.css";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContextProviders from "./ContextProviders";
import EventCreate from "./pages/Event/Create/EventCreate";
import EventEdit from "./pages/Event/Edit/EventEdit";
import QuoteCreate from "./pages/Quote/Create/QuoteCreate";
import QuoteEdit from "./pages/Quote/Edit/QuoteEdit";
import Home from "./pages/Home/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import Profile from "./pages/Profile/Profile";
import AllQuotes from "./pages/Quote/AllQuotes/AllQuotes";

function App() {
  return (
    <ContextProviders>
      <div className="h-screen">
        <div className="max-w-2xl m-auto">
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event">
                <Route
                  path="create"
                  element={
                    <ProtectedRoute>
                      <EventCreate />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="edit"
                  element={
                    <ProtectedRoute>
                      <EventEdit />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route path="/quote">
                <Route
                  path="create"
                  element={
                    <ProtectedRoute>
                      <QuoteCreate />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="edit"
                  element={
                    <ProtectedRoute>
                      <QuoteEdit />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="all"
                  element={
                    <ProtectedRoute>
                      <AllQuotes />
                    </ProtectedRoute>
                  }
                />
              </Route>
              <Route
                path="/profile/:uid"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Router>
        </div>
        <Footer />
      </div>
    </ContextProviders>
  );
}

export default App;
