import React from "react";

const googlePlayBadge =
  "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
const appStoreBadge =
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 font-poppins">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* COLUMN 1: Logo & Description */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <h1 className="text-4xl font-bold text-[#181E4B] mb-6 font-serif">
              Jadoo.
            </h1>
            <p className="text-[#5E6282] text-sm leading-relaxed max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* COLUMN 2: Company */}
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold text-[#080809] mb-6">Company</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Contact */}
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold text-[#080809] mb-6">Contact</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Help/FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: More */}
          <div className="flex flex-col items-start">
            <h2 className="text-xl font-bold text-[#080809] mb-6">More</h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Airlinefees
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Airline
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#5E6282] font-medium hover:text-[#181E4B]"
                >
                  Low fare tips
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: Social & Apps */}
          <div className="flex flex-col items-start">
            {/* Social Icons */}
            <div className="flex items-center gap-4 mb-8">
              {/* Facebook */}
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </button>

              {/* Instagram (Gradient Background) */}
              <button
                className="w-10 h-10 rounded-full shadow-md flex items-center justify-center text-white"
                style={{
                  background:
                    "linear-gradient(180deg, #fdc830 0%, #f37335 100%)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>

              {/* Twitter */}
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
            </div>

            <h3 className="text-[#5E6282] text-xl font-medium mb-4">
              Discover our app
            </h3>

            <div className="flex flex-row gap-4">
              {/* Google Play Button */}
              <a
                href="#"
                className="bg-black hover:bg-gray-800 transition rounded-full px-5 py-2 flex items-center gap-3 text-white w-fit"
              >
                {/* Google Play Icon (SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.36,11.09L18.34,9.91L15.43,12.82L18.34,15.73L20.36,14.55C20.71,14.35 20.71,13.28 20.36,13.09M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-medium mb-0.5">
                    Get it on
                  </span>
                  <span className="text-sm font-bold">Google Play</span>
                </div>
              </a>

              {/* Apple Store Button */}
              <a
                href="#"
                className="bg-black hover:bg-gray-800 transition rounded-full px-5 py-2 flex items-center gap-3 text-white w-fit"
              >
                {/* Apple Icon (SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] uppercase font-medium mb-0.5">
                    Available on the
                  </span>
                  <span className="text-sm font-bold">Apple Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-12">
          <p className="text-[#5E6282] text-sm font-medium">
            All rights reserved@jadoo.co
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
