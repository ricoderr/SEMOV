import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import MessageBox from "./components/MessageBox";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/icon-view" element={<MessageBox />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
