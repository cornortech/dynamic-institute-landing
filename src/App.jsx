import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Events from "./components/Events";
// import Testimonials from "./components/TestimonialOld";
import Testimonial from "./components/Testimonial";
import Newsletter from "./components/Newsletter";
import CoffeeQuiz from "./components/CoffeeQuiz";
import Specials from "./components/Specials";
import SocialFeed from "./components/SocialFeed";
import Gallery from "./components/Gallery";
// import TestimonialsOld from "./components/TestimonialOld";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll("[data-parallax]");

      parallaxElements.forEach((element) => {
        const speed = Number(element.getAttribute("data-parallax")) || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-[#171716]" : "bg-white"
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Events isDarkMode={isDarkMode} />
      {/* <CoffeeQuiz isDarkMode={isDarkMode} /> */}
      <Specials isDarkMode={isDarkMode} />
      <Gallery isDarkMode={isDarkMode} />
      <SocialFeed isDarkMode={isDarkMode} />
      {/* <TestimonialsOld isDarkMode={isDarkMode} /> */}
      <Testimonial isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Newsletter isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
