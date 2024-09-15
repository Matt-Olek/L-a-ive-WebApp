import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
