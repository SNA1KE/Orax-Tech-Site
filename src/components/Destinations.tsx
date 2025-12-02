import React from "react";

// --- PLACEHOLDERS FOR YOUR LOCAL IMAGES ---
// Replace these URLs with imports like: import romeImg from '../assets/rome.png';
const romeImg =
  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop";
const londonImg =
  "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop";
const europeImg =
  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop";

const DestinationsSection = () => {
  const destinations = [
    {
      id: 1,
      city: "Rome, Italy",
      price: "$5.42k",
      duration: "10 Days Trip",
      image: romeImg,
    },
    {
      id: 2,
      city: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
      image: londonImg,
    },
    {
      id: 3,
      city: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
      image: europeImg,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-gray-500 font-semibold uppercase tracking-wider mb-2">
            Top Selling
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#181E4B] font-serif">
            Top Destinations
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group relative bg-white rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="h-80 w-full overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.city}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Row 1: City & Price */}
                <div className="flex justify-between items-center text-gray-500 font-medium text-lg mb-4">
                  <span>{dest.city}</span>
                  <span>{dest.price}</span>
                </div>

                {/* Row 2: Navigation Icon & Duration */}
                <div className="flex items-center text-gray-500 font-medium">
                  <div className="bg-black text-white p-1 rounded-full mr-3 transform -rotate-45">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{dest.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
