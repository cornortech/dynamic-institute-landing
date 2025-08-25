// About.js
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Heart, Users } from 'lucide-react';
import img1 from '../images/about.webp'


const About = ({ isDarkMode }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      id="about" 
      className={`py-20 px-4 ${isDarkMode ? 'bg-[#171716]' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Our Coffee Story
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Founded in 2018, CoffeeHub has been crafting exceptional coffee experiences 
            with passion and dedication. We source the finest beans from around the world 
            and roast them to perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            className={`transition-all duration-1000 delay-300 imageReveal ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={img1}
                alt="Coffee roasting"
                className="w-full h-80 object-cover transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="space-y-6 auto-show">
              <div className="flex items-start space-x-4">
                <Award className={`h-8 w-8 mt-1 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Premium Quality
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    We carefully select and roast only the finest coffee beans from sustainable farms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Heart className={`h-8 w-8 mt-1 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Made with Love
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Every cup is crafted with passion and attention to detail by our expert baristas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className={`h-8 w-8 mt-1 ${isDarkMode ? 'text-amber-400' : 'text-amber-600'}`} />
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    Community Focus
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                    We're more than a coffee shop - we're a gathering place for our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;