import React from "react";

// --- PLACEHOLDERS FOR RIGHT SIDE IMAGES ---
const tripImage =
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=600&auto=format&fit=crop";
const romeMiniImage =
  "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=200&auto=format&fit=crop";

const BookTripSection = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 011 1v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4a1 1 0 011-1zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      bgColor: "bg-[#F0BB1F]",
    },
    {
      id: 2,
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      ),
      bgColor: "bg-[#F15A2B]",
    },
    {
      id: 3,
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
        </svg>
      ),
      bgColor: "bg-[#006380]",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white font-poppins">
      {/* Changed items-center to items-start for mobile, lg:items-center for desktop */}
      <div className="container mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center gap-20">
        {/* --- LEFT COLUMN --- */}
        {/* Added 'text-left' and 'items-start' to ensure left alignment */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h4 className="text-[#5E6282] font-semibold text-lg mb-4">
            Easy and Fast
          </h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#181E4B] font-serif mb-10 leading-snug">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>

          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              // Ensure flex items start from the left
              <div key={step.id} className="flex items-start gap-6">
                {/* Icon Box */}
                <div
                  className={`${step.bgColor} w-12 h-12 rounded-[13px] flex items-center justify-center shrink-0`}
                >
                  {step.icon}
                </div>

                {/* Text Content: Explicitly aligned left */}
                <div className="text-left">
                  <h3 className="text-[#5E6282] font-bold text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[#5E6282] leading-relaxed text-sm lg:text-base font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN (Unchanged) --- */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">
          <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#59B1E6] opacity-30 blur-[100px] rounded-full -z-10 translate-x-10 translate-y-10"></div>

          <div className="bg-white rounded-[26px] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.08)] max-w-sm relative z-10 border border-gray-100">
            <div className="rounded-[24px] overflow-hidden mb-6 h-44 w-full">
              <img
                src={tripImage}
                alt="Greece Trip"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-[#181E4B] mb-2">
              Trip To Greece
            </h3>
            <div className="flex items-center text-[#84829A] font-medium mb-4 divide-x divide-gray-300">
              <span className="pr-3">14-29 June</span>
              <span className="pl-3">by Robbin joseph</span>
            </div>
            <div className="flex gap-4 mb-6">
              <span className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-500">
                🌱
              </span>
              <span className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-500">
                🗺️
              </span>
              <span className="w-9 h-9 rounded-full bg-[#F5F5F5] flex items-center justify-center text-gray-500">
                ✈️
              </span>
            </div>
            <div className="flex justify-between items-center mt-6">
              <div className="flex items-center gap-3 text-[#84829A] font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span>24 people going</span>
              </div>
              <button className="text-[#4152CA]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="absolute bottom-16 -right-12 lg:-right-24 bg-white p-4 rounded-[18px] shadow-[0_30px_60px_rgba(0,0,0,0.1)] flex gap-4 items-start max-w-[260px] z-20 hidden md:flex">
            <img
              src={romeMiniImage}
              alt="Rome"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <span className="text-[#84829A] text-sm font-medium">
                Ongoing
              </span>
              <h4 className="text-[#181E4B] font-bold mb-2">Trip to rome</h4>
              <div className="w-full">
                <span className="text-[#8A79DF] text-sm font-bold block mb-1">
                  40%{" "}
                  <span className="text-[#181E4B] font-medium">completed</span>
                </span>
                <div className="w-32 h-1.5 bg-[#F5F5F5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8A79DF] w-[40%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTripSection;
