import { useState, useEffect } from "react";
import { ArrowDown, Instagram, Facebook, BookOpen } from "lucide-react";

const Hero = ({ isDarkMode = false }) => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fullText = "Welcome to Dynamic Educational Center";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 70;
    const timeout = setTimeout(() => {
      if (!deleting && index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        setIndex(index + 1);
      } else if (deleting && index > 0) {
        setDisplayText(fullText.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!deleting && index === fullText.length) {
        setTimeout(() => setDeleting(true), 1200);
      } else if (deleting && index === 0) {
        setDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, deleting, fullText]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
        style={{
          backgroundImage: `url('https://media.istockphoto.com/id/1410950079/photo/modern-style-classroom-in-the-morning-3d-render.jpg?s=2048x2048&w=is&k=20&c=Kp79D9SSkQmyC0VzYE7YyjDp1hqm05Z7qfwznd6n9F8=')`,
        }}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          isDarkMode ? "bg-black/70" : "bg-black/50"
        }`}
      />

      {/* Decorative Icon */}
      <div className="absolute top-1/4 right-1/4 opacity-30">
        <div className="relative">
          <BookOpen className="h-16 w-16 text-amber-300" />
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-12 bg-gradient-to-t from-transparent via-white/20 to-transparent animate-pulse"></div>
            <div className="w-1 h-8 bg-gradient-to-t from-transparent via-white/30 to-transparent animate-pulse delay-300 absolute left-2 -top-4"></div>
            <div className="w-1 h-10 bg-gradient-to-t from-transparent via-white/25 to-transparent animate-pulse delay-700 absolute -left-2 -top-2"></div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute bottom-8 left-8 flex space-x-4 z-20">
        <a
          href="https://www.instagram.com/dynamiceducationbutwal"
          target="_blank"
          className="text-white/70 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <Instagram className="h-6 w-6" />
        </a>
        <a
          href="https://www.facebook.com/dynamiceducationbutwal"
          target="_blank"
          className="text-white/70 hover:text-amber-400 transition-colors duration-300 hover:scale-110 transform"
        >
          <Facebook className="h-6 w-6" />
        </a>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-6 inline-flex items-center bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2">
          <BookOpen className="h-4 w-4 text-amber-400 mr-2" />
          <span className="text-amber-300 font-medium text-sm">
            Since 1998 🎓 Rated #1 in Language Learning
          </span>
        </div>

        {/* <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-amber-400 mt-2 h-20">
            {displayText}
            <span className="border-r-4 border-amber-400 animate-pulse ml-1"></span>
          </span>
        </h1> */}

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block text-amber-400 mt-2">
            {displayText}
            <span className="border-r-4 border-amber-400 animate-pulse ml-1 inline-block"></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 opacity-90 text-balance">
          Expert language courses and computer training for all levels
        </p>

        <div className="mb-8 space-y-2 text-lg md:text-xl opacity-80">
          <p className="text-balance">
            Learn Korean, German, Japanese, and English
          </p>
          <p className="text-balance">
            Improve digital skills with computer classes
          </p>
          <p className="text-balance">
            Personalized attention from experienced instructors
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-500/25"
          >
            Discover Our Programs
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;
