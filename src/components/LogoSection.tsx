import React from "react";

// --- PLACEHOLDERS: Replace with your local imports ---
// e.g., import axonLogo from '../assets/axon.png';
const axonLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Axon_Logo.svg/2560px-Axon_Logo.svg.png";
const jetstarLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Jetstar_Airways_logo_%28orange_star%29.svg/2560px-Jetstar_Airways_logo_%28orange_star%29.svg.png";
const expediaLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Expedia_logo_2023.svg/2560px-Expedia_logo_2023.svg.png";
const qantasLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Qantas_Airways_logo_2016.svg/2560px-Qantas_Airways_logo_2016.svg.png";
const alitaliaLogo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Alitalia_Logo_2017.svg/2560px-Alitalia_Logo_2017.svg.png";

const LogosSection = () => {
  const logos = [
    { id: 1, name: "Axon", src: axonLogo, highlight: false },
    { id: 2, name: "Jetstar", src: jetstarLogo, highlight: false },
    { id: 3, name: "Expedia", src: expediaLogo, highlight: true }, // Set to true to add the shadow box
    { id: 4, name: "Qantas", src: qantasLogo, highlight: false },
    { id: 5, name: "Alitalia", src: alitaliaLogo, highlight: false },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-12 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div
              key={logo.id}
              className={`
                transition-all duration-300 flex justify-center items-center p-4 rounded-xl
                ${
                  logo.highlight
                    ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] scale-110 grayscale-0"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }
              `}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 lg:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogosSection;
