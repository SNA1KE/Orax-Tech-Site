import React from "react";
import heroImage from "../assets/hero-image.png"; // Ensure you have this image in the specified path

const HeroSection = () => {
  return (
    // Removed the 'overflow-hidden' as the blurred background is gone
    <section className="relative py-12 lg:pt-24 lg:pb-36 bg-white">
      <div className="container mx-auto px-6 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left z-10">
          <h3 className="text-[#DF6951] font-bold uppercase tracking-wider mb-6">
            Best Destinations around the world
          </h3>
          {/* Added font-serif for a look closer to the design image */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-[#181E4B] leading-tight tracking-tight mb-8 font-serif">
            Travel, enjoy and live a new and full life
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md md:mx-0 mx-auto">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center md:justify-start space-x-8 w-full">
            {/* Find Out More Button */}
            <button className="bg-[#F1A501] hover:bg-yellow-600 text-white font-medium py-4 px-8 rounded-xl shadow-lg shadow-yellow-500/30 transition duration-300">
              Find out more
            </button>

            {/* Play Demo Button */}
            <button className="group flex items-center space-x-4 text-gray-500 font-medium hover:text-black transition duration-300">
              <div className="w-12 h-12 bg-[#DF6951] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white pl-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>Play Demo</span>
            </button>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 relative z-10 flex justify-center md:justify-end">
          {/* Replace the src below with your local image path, e.g., src="/images/hero-traveler.png" */}
          <img
            src={heroImage}
            alt="Traveler sitting on luggage"
            // Styling to make the image responsive and fit well
            className="w-full max-w-lg md:max-w-none h-auto object-contain lg:scale-110 origin-bottom-right"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
