import React from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "../images/logo.jpg";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    "home",
    "about",
    "services",
    "events",
    "quiz",
    "specials",
    "gallery",
    "testimonial",
    "contact",
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkMode
          ? "bg-[#171716bf] backdrop-blur-md"
          : "bg-[#ffffffc0] backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src={logo}
              alt="Dynamic Education Logo"
              className="h-12 w-12 rounded-full border-2 border-amber-400 object-cover transition-transform duration-300 hover:scale-110"
            />
            {/* <span
              className={`text-2xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Dynamic Education
            </span> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize font-medium transition-colors duration-200 cursor-pointer hover:scale-105 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-amber-400"
                    : "text-black hover:text-amber-600"
                }`}
              >
                {item}
              </button>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all cursor-pointer duration-200 hover:scale-110 ${
                isDarkMode
                  ? "bg-gray-800 text-amber-400 hover:bg-gray-700"
                  : "bg-gray-100 text-amber-600 hover:bg-gray-200"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDarkMode
                  ? "bg-gray-800 text-amber-400 hover:bg-gray-700"
                  : "bg-gray-100 text-amber-600 hover:bg-gray-200"
              }`}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden py-4 transition-all duration-300 ${
              isDarkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-2 px-4 capitalize font-medium transition-colors duration-200 ${
                  isDarkMode
                    ? "text-gray-300 hover:text-amber-400 hover:bg-gray-800"
                    : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
