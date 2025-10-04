import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Splash from "./pages/Splash";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
