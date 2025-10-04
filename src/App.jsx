import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePAge";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
