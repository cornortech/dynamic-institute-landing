// Footer.js
import React from "react";
import { Coffee, Heart, Instagram, Facebook, Twitter } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import logo from "../images/logo.jpg";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-12 px-4 ${
        isDarkMode ? "bg-[#171716] text-white" : "bg-[#ffffffe8] text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mx-4 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <Coffee
                className={`h-8 w-8 ${
                  isDarkMode ? "text-amber-400" : "text-amber-600"
                }`}
              /> */}
              <img
                src={logo}
                alt="Dynamic Education Logo"
                className="h-12 w-12 rounded-full border-2 border-amber-400 object-cover transition-transform duration-300 hover:scale-110"
              />
              <span className="text-xl font-bold">
                Dynamic Education Center
              </span>
            </div>
            <p
              className={`${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-4`}
            >
              Guiding students toward global opportunities with expert advice
              and trusted support.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dynamiceducationbutwal/"
                target="_blank"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: "#E1306C" }}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/dynamiceducationbutwal/"
                target="_blank"
                className="transition-colors duration-200 hover:opacity-80"
                style={{ color: "#1877F2" }}
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul
              className={`space-y-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>
                <a
                  href="#home"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Links</h3>
            <ul
              className={`space-y-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>
                <a
                  href="#specials"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  Special
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  Testimonial
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={`${
                    isDarkMode ? "hover:text-amber-400" : "hover:text-amber-600"
                  } transition-colors duration-200`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div
              className={`space-y-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p> Finance Chowk, Butwal 32907, Lumbini Nepal</p>
              <p>Phone: +(977) 985-7054239</p>
              <p>Email: dynamicedu777@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t pt-8 text-center ${
            isDarkMode ? "border-gray-800" : "border-gray-300"
          }`}
        >
          <p
            className={`${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } flex items-center justify-center space-x-2`}
          >
            <span>&copy; 2025 Dynamic Education Center </span>
            <Heart className="h-4 w-4 text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
