import React from "react";

const HomePage: React.FC = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(./src/assets/vanishing-stripes.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="">
          <h1
            className="mb-5 text-7xl font-bold text-shadow  
          "
          >
            <span className="loading loading-ring loading-lg mr-6"></span>
            L(A)ive
            <span
              className="badge animate-pulse text-shadow-none bg-green-400 border-green-400 ml-3 p-2 shadow-lg
             "
            >
              Beta
            </span>
          </h1>
          <p className="mb-5 text-shadow">
            Réponses rapides, précises et conformes – l'IA au service de votre
            clientèle.
          </p>
          <button className="btn btn-primary shadow-lg">Découvrir</button>
          <button
            className="btn btn-primary glass shadow-lg ml-5
          "
          >
            Demander une démo
          </button>
          <div className="text-center mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
