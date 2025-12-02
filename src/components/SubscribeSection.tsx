import React from "react";

const SubscribeSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-6 lg:px-24">
        {/* The Card Container */}
        {/* distinct styling: light purple bg, large top-left radius */}
        <div className="relative bg-[#DFD7F9]/20 rounded-tl-[120px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] py-20 px-6 lg:px-20 overflow-hidden text-center">
          {/* Decorative faint circles (Optional: adds depth like the original design) */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#7065F0] opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#7065F0] opacity-10 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#5E6282] max-w-3xl leading-snug mb-16">
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </h2>

            <form
              className="flex flex-col md:flex-row items-center gap-6 w-full max-w-lg"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Input Field */}
              <div className="w-full bg-white flex items-center px-6 py-5 rounded-[10px] shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full outline-none text-[#39425D] placeholder-gray-400"
                />
              </div>

              {/* Button */}
              <button className="w-full md:w-auto bg-[#FF946D] hover:bg-[#FF7D68] text-white font-semibold py-5 px-12 rounded-[10px] shadow-md transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
