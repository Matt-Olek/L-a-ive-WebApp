import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

const App: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
