// Footer.js
import React from 'react';
import { Coffee, Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-12 px-4 ${isDarkMode ? 'bg-[#171716] text-white' : 'bg-[#ffffffe8] text-black'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className={`h-8 w-8 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
              <span className="text-xl font-bold">CoffeeHub</span>
            </div>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
              Crafting exceptional coffee experiences since 2018. Every cup tells a story of passion and quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-amber-400' : 'text-gray-600 hover:text-amber-600'} transition-colors duration-200`}>
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-amber-400' : 'text-gray-600 hover:text-amber-600'} transition-colors duration-200`}>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-amber-400' : 'text-gray-600 hover:text-amber-600'} transition-colors duration-200`}>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <li><a href="#home" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'} transition-colors duration-200`}>Home</a></li>
              <li><a href="#about" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'} transition-colors duration-200`}>About</a></li>
              <li><a href="#services" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'} transition-colors duration-200`}>Services</a></li>
              <li><a href="#contact" className={`${isDarkMode ? 'hover:text-amber-400' : 'hover:text-amber-600'} transition-colors duration-200`}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className={`space-y-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              <p>123 Coffee Street</p>
              <p>Brew District, BD 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: hello@brewmaster.com</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`border-t pt-8 text-center ${isDarkMode ? 'border-gray-800' : 'border-gray-300'}`}>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center justify-center space-x-2`}>
            <span>&copy; 2025 CoffeeHub. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for coffee lovers everywhere.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
