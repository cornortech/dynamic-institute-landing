import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import img1 from '../images/f1.jpeg'

const Hero = ({ isDarkMode }) => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fullText = "Welcome to CoffeeHub";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 70; // speed for typing and deleting
    const timeout = setTimeout(() => {
      if (!deleting && index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (deleting && index > 0) {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!deleting && index === fullText.length) {
        setTimeout(() => setDeleting(true), 1200); // pause at full text
      } else if (deleting && index === 0) {
        setDeleting(false); // start typing again
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${isDarkMode ? 'bg-black/70' : 'bg-black/50'}`} />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-amber-400 mt-2 h-20">
            {displayText}
            <span className="border-r-4 border-amber-400 animate-pulse ml-1"></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Where every cup tells a story of passion, quality, and perfect brewing
        </p>
        <button
          onClick={scrollToAbout}
          className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
        >
          Discover Our Story
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
