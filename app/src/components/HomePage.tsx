import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import MockupDiscussion from "./MockupDiscussion";
import Typewriter from "typewriter-effect";

//importing assets
import vanishingStripes from "/assets/vanishing_stripes2.svg";

// Register the necessary components in Chart.js
ChartJS.register(
  CategoryScale, // X-axis scale
  LinearScale, // Y-axis scale
  PointElement, // Points in the chart
  LineElement, // Line between points
  Title, // Title of the chart
  Tooltip, // Tooltip on hover
  Legend // Legend for the datasets
);

const HomePage: React.FC = () => {
  // Sample data for the chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Client Interactions",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: vanishingStripes }}
      >
        <div className="hero-overlay bg-white bg-opacity-10 absolute inset-0"></div>
        <div
          className="hero-content text-center text-neutral-content z-10 relative p-10 rounded-3xl shadow-lg"
          style={{
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-shadow mb-5">
              <span className="loading loading-ring loading-lg mr-6"></span>
              L(A)ive
              <span className="badge animate-pulse bg-green-400 border-green-400 ml-3 p-2 shadow-lg text-shadow-none">
                Beta
              </span>
            </h1>
            <p className="text-white md:text-2xl text-shadow mb-5">
              <Typewriter
                options={{
                  // strings: [
                  //   "Service client intelligent",
                  //   "Réponses rapides et précises",
                  //   "Automatisation des interactions",
                  // ],
                  delay: 50,
                  // autoStart: true,
                  // loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Service client intelligent")
                    .pauseFor(2000)
                    .deleteChars(11)
                    .typeString("rapide et précis")
                    .pauseFor(2000)
                    .deleteChars(16)
                    .typeString("automatique")
                    .start();
                }}
              />
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <button
                className="btn btn-primary shadow-lg scale-up-on-hover"
                onClick={() => {
                  const section = document.getElementById("overview-section");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Découvrir
              </button>
              <button
                className="btn btn-ghost shadow-lg scale-up-on-hover"
                style={{
                  background: "rgba(255, 255, 255, 0.38)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                  backdropFilter: "blur(6.7px)",
                  WebkitBackdropFilter: "blur(6.7px)",
                }}
              >
                Demander une démo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Merged Overview and Graph Section */}
      <div
        id="overview-section"
        className="bg-base-100 py-10 flex flex-col items-center justify-center min-h-screen overflow-scroll"
      >
        <div className="mb-10 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Pourquoi <span className="text-primary">L(A)ive</span> ?
          </h2>
          <p className="text-base md:text-lg max-w-4xl mx-auto">
            L(A)ive utilise des technologies avancées en IA pour fournir des
            réponses immédiates et conformes. Bénéficiez d'un service client
            intelligent qui s'adapte à vos besoins et évolue avec votre
            entreprise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-10 px-4 w-full max-w-6xl">
          {[
            {
              title: "Automatisation Intelligente",
              description:
                "Automatisez les interactions avec vos clients en tirant parti d'une IA capable d'apprendre et de s'améliorer continuellement.",
              iconPath:
                "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z",
            },
            {
              title: "Analyses Avancées",
              description:
                "Des analyses détaillées se basant sur les documents légaux et vos contrats pour une meilleure compréhension des besoins de vos clients et une réponse adaptée.",
              iconPath:
                "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
            },
            {
              title: "Des sources fiables",
              description:
                "Nos modèles sont capables de sourcer et de vérifier les réponses à partir de sources fiables et actualisées.",
              iconPath:
                "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-lg p-4 md:p-6 scale-up-on-hover flex flex-col justify-between"
            >
              <div className="flex-grow">
                <div className="flex justify-center space-x-5 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.iconPath}
                    />
                  </svg>
                  <h3 className="card-title text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto px-4">
          <p className="mb-8 text-base md:text-lg">
            Suivez vos performances avec des données actualisées.
          </p>
          <Line data={data} />
        </div>
      </div>
      {/* Mockup Discussion Section */}
      <div className="bg-stone-100 min-h-screen overflow-block flex items-center justify-center">
        <div className="container mx-auto text-center border border-base-300 p-6 md:p-10 rounded-3xl shadow-lg lg:w-1/2 bg-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            Discussion avec L(A)ive
          </h2>
          <p className="text-base md:text-lg mb-10">
            Découvrez comment L(A)ive peut répondre à vos questions de manière
            rapide et précise.
          </p>
          <MockupDiscussion />
          <button className="btn btn-primary mt-10">Demander une démo</button>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="hero min-h-screen bg-primary text-primary-content flex items-center justify-center">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Prêt à démarrer ?
            </h2>
            <p className="text-base md:text-lg mb-5">
              Commencez dès aujourd'hui avec une solution personnalisée pour
              améliorer votre relation client.
            </p>
            <button className="btn btn-secondary">Commencer</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
