import React from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Destinations", href: "#" },
    { name: "Hotels", href: "#" },
    { name: "Flights", href: "#" },
    { name: "Bookings", href: "#" },
  ];

  return (
    <nav className="flex justify-between items-center py-6 px-8 lg:px-24 bg-white relative z-10">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="#" className="text-3xl font-bold text-[#181E4B]">
          Jad<span className="text-[#F97316]">oo</span>
        </a>
      </div>

      {/* Navigation Links (Hidden on small screens) */}
      <ul className="hidden lg:flex items-center space-x-12">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-gray-600 font-medium hover:text-black transition duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            className="text-gray-600 font-medium hover:text-black transition duration-300"
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="#"
            className="px-5 py-2 border-[1px] border-[#212832] rounded-md font-medium hover:bg-gray-50 transition duration-300"
          >
            Sign up
          </a>
        </li>
        <li>
          <button className="flex items-center text-gray-600 font-medium hover:text-black transition duration-300 focus:outline-none">
            EN
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </li>
      </ul>

      {/* Mobile Menu Button (Visible on small screens) */}
      <div className="lg:hidden flex items-center">
        <button className="outline-none mobile-menu-button">
          <svg
            className="w-6 h-6 text-gray-500 hover:text-black"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
