import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import { Route, HashRouter, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
