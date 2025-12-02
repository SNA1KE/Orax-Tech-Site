import React from "react";

// --- IMPORTANT: Replace these imports with the actual paths to your images ---
// Example: import weatherIcon from '../assets/images/weather-icon.png';
// For this demo, I am using externally hosted placeholders so the preview works immediately.
const weatherIcon = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
const planeIcon = "https://cdn-icons-png.flaticon.com/512/7893/7893979.png";
const micIcon = "https://cdn-icons-png.flaticon.com/512/3178/3178286.png";
const gearIcon = "https://cdn-icons-png.flaticon.com/512/3953/3953226.png";

const ServicesSection = () => {
  // Data array to manage service content easily
  const servicesData = [
    {
      id: 1,
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      imgSrc: weatherIcon,
      bgColor: "bg-orange-100", // The subtle blob color behind the icon
      highlighted: false,
    },
    {
      id: 2,
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      imgSrc: planeIcon,
      bgColor: "bg-red-100",
      highlighted: true, // This one is meant to pop out
    },
    {
      id: 3,
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Preferd to men it engrossed listening.",
      imgSrc: micIcon,
      bgColor: "bg-yellow-100",
      highlighted: false,
    },
    {
      id: 4,
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      imgSrc: gearIcon,
      bgColor: "bg-gray-100",
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        {/* Header */}
        <div className="mb-16">
          <h4 className="text-gray-500 font-semibold uppercase tracking-widest mb-2">
            Category
          </h4>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#181E4B] font-serif">
            We Offer Best Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center">
          {servicesData.map((service) => (
            <div
              key={service.id}
              // Conditional styling: If 'highlighted' is true, add white bg, shadow, and scale up slightly.
              // Otherwise, add a hover effect for non-highlighted cards.
              className={`flex flex-col items-center text-center p-8 rounded-[36px] transition-all duration-300 ${
                service.highlighted
                  ? "bg-white shadow-[0_20px_50px_rgba(0,0,0,0.07)] lg:scale-105 z-10"
                  : "hover:shadow-lg hover:bg-white/50"
              }`}
            >
              {/* Icon Container with background blob */}
              <div className="relative mb-8">
                {/* The colored blob behind the icon */}
                <div
                  className={`absolute top-[-10px] right-[-15px] w-16 h-16 ${service.bgColor} rounded-[20px] -z-10 opacity-70`}
                ></div>
                {/* The Icon Image */}
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="h-20 w-auto object-contain relative z-10"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-[#181E4B] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-[240px] mx-auto">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
