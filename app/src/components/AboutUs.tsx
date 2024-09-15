import React from "react";

//import ing assets
import ClaraBerger from "../assets/Clara_Berger.jpg";
import MatthieuOlekhnovitch from "../assets/Matthieu_Olekhnovitch.jpg";
import FlorianPalmade from "../assets/Florian_Palmade.jpg";
import VanishingStripes from "../assets/vanishing-stripes2.svg";

const AboutUs: React.FC = () => {
  // Founders Data
  const founders = [
    {
      name: "Clara Berger",
      role: "COO & Co-Founder",
      description:
        "Alice brings over 15 years of experience in AI and legal technology. She spearheads our mission to deliver cutting-edge solutions for automated compliance and customer interactions.",
      imgSrc: ClaraBerger,
    },
    {
      name: "Matthieu Olekhnovitch",
      role: "CTO & Co-Founder",
      description:
        "Marc leads the technical team with his extensive expertise in AI development and large-scale system architecture, ensuring seamless integration of our intelligent automation.",
      imgSrc: MatthieuOlekhnovitch,
    },
    {
      name: "Florian Palmade",
      role: "CFO & Co-Founder",
      description:
        "Sophia manages operations and ensures that our platform consistently delivers excellence. Her background in business management and customer service is essential to our success.",
      imgSrc: FlorianPalmade,
    },
  ];

  return (
    <>
      {/* About Us and Founders Section */}
      <div
        className="hero min-h-screen bg-base-200"
        style={{
          backgroundImage: `url(${VanishingStripes})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "luminosity",
        }}
      >
        <div
          className="hero-overlay "
          style={{
            background: "rgba(255, 255, 255, 0.38)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1",
            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",
          }}
        ></div>
        <div className="hero-content flex flex-col items-center text-center bg-white bg-opacity-70 p-16 rounded-3xl shadow-lg">
          {/* About Us Content */}
          <div className="mb-12">
            <h1 className="mb-5 text-6xl font-bold">
              À propos de <span className="text-primary">L(A)ive</span>
            </h1>
            <p className="text-lg text-gray-600">
              Nous sommes une équipe passionnée par l'innovation, l'IA appliquée
              à l'automatisation et l'augmentation de l'efficacité des services
              clientèle. Nous avons la conviction que l'IA peut transformer en
              profondeur notre rapport aux données de masse et aider l'humain à
              se concentrer sur des tâches à plus forte valeur ajoutée.
            </p>
          </div>

          {/* Founders Section */}
          <div className="container mx-auto py-12 px-4">
            <h2 className="text-5xl font-bold mb-12 ">
              Notre Équipe Fondatrice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {founders.map((founder, index) => (
                <div
                  key={index}
                  className="card bg-white shadow-lg p-6 scale-up-on-hover"
                >
                  <img
                    src={founder.imgSrc}
                    alt={founder.name}
                    className="rounded-full mx-auto mb-5 w-40 h-40 object-cover"
                  />
                  <h3 className="text-2xl font-bold text-center mb-3">
                    {founder.name}
                  </h3>
                  <p className="text-center text-lg font-semibold mb-3">
                    {founder.role}
                  </p>
                  <p className="text-center text-gray-600">
                    {founder.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="hero min-h-screen bg-primary text-primary-content flex items-center justify-center">
        <div className="hero-content text-center">
          <div>
            <h2 className="text-4xl font-bold">Join Us in Our Mission</h2>
            <p className="mb-5">
              Be part of the future of customer service with innovative AI
              solutions.
            </p>
            <button className="btn btn-secondary">Get in Touch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
