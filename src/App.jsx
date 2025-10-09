import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Splash from "./pages/Splash";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
