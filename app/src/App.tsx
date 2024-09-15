import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import { Route, HashRouter, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
