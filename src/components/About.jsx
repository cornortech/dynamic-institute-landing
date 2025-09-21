// // About.js
// import React from "react";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import { Award, Heart, Users } from "lucide-react";
// import img1 from "../images/about.webp";

// const About = ({ isDarkMode }) => {
//   const [ref, isVisible] = useScrollAnimation();

//   return (
//     <section
//       id="about"
//       className={`py-20 px-4 ${isDarkMode ? "bg-[#171716]" : "bg-gray-50"}`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div
//           ref={ref}
//           className={`text-center mb-16 transition-all duration-1000 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <h2
//             className={`text-4xl md:text-5xl font-bold mb-6 ${
//               isDarkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Our Coffee Story
//           </h2>
//           <p
//             className={`text-xl max-w-3xl mx-auto ${
//               isDarkMode ? "text-gray-300" : "text-gray-600"
//             }`}
//           >
//             Founded in 2018, CoffeeHub has been crafting exceptional coffee
//             experiences with passion and dedication. We source the finest beans
//             from around the world and roast them to perfection.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div
//             className={`transition-all duration-1000 delay-300 imageReveal ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 -translate-x-10"
//             }`}
//           >
//             <div className="relative rounded-lg overflow-hidden shadow-2xl">
//               <img
//                 src={img1}
//                 alt="Coffee roasting"
//                 className="w-full h-80 object-cover transition-transform duration-700"
//               />
//             </div>
//           </div>

//           {/* Content */}
//           <div
//             className={`transition-all duration-1000 delay-500 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-10"
//             }`}
//           >
//             <div className="space-y-6 auto-show">
//               <div className="flex items-start space-x-4">
//                 <Award
//                   className={`h-8 w-8 mt-1 ${
//                     isDarkMode ? "text-amber-400" : "text-amber-600"
//                   }`}
//                 />
//                 <div>
//                   <h3
//                     className={`text-xl font-semibold mb-2 ${
//                       isDarkMode ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     Premium Quality
//                   </h3>
//                   <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
//                     We carefully select and roast only the finest coffee beans
//                     from sustainable farms.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Heart
//                   className={`h-8 w-8 mt-1 ${
//                     isDarkMode ? "text-amber-400" : "text-amber-600"
//                   }`}
//                 />
//                 <div>
//                   <h3
//                     className={`text-xl font-semibold mb-2 ${
//                       isDarkMode ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     Made with Love
//                   </h3>
//                   <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
//                     Every cup is crafted with passion and attention to detail by
//                     our expert baristas.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <Users
//                   className={`h-8 w-8 mt-1 ${
//                     isDarkMode ? "text-amber-400" : "text-amber-600"
//                   }`}
//                 />
//                 <div>
//                   <h3
//                     className={`text-xl font-semibold mb-2 ${
//                       isDarkMode ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     Community Focus
//                   </h3>
//                   <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
//                     We're more than a coffee shop - we're a gathering place for
//                     our community.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

// About.js
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Award, BookOpen, Users } from "lucide-react";

const About = ({ isDarkMode }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section
      id="about"
      className={`py-20 px-4 ${isDarkMode ? "bg-[#171716]" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About Dynamic Educational Ce
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Dynamic Educational Ce is a leading educational institution offering
            language learning programs in Korean, German, Japanese, and English
            alongside computer classes and tuition services. Our mission is to
            provide personalized and innovative learning experiences for all
            students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-1000 delay-300 imageReveal ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/514069129_2197536647391778_5427933986041998258_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGNH3V6Th98_F_2oXqi96nT343tX7lDFgjfje1fuUMWCNGyfFkX2NDHvf4TFkgTgigSSGJf3X0mVQvxaPlvPKMV&_nc_ohc=XU33KWAQwRQQ7kNvwH0H8fB&_nc_oc=Adl0HjPd9nPhM0r0OxprDjENqCnKNi1EwPV0cWYh0hO1IPRyitgKag4Ijm_4jJzKD2TulLzW1CL1_1AWXpH5RWtc&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=JIBidi2chMm9Voea-xdTQQ&oh=00_Afb9v3IN5r4HlHUFPrfTDvgmDImRWT7Og8QtafM7Kl-HAw&oe=68D198C4"
                alt="Educational Consultancy"
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6 auto-show">
              <div className="flex items-start space-x-4">
                <Award
                  className={`h-8 w-8 mt-1 ${
                    isDarkMode ? "text-amber-400" : "text-amber-600"
                  }`}
                />
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Excellence in Education
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    We provide top-quality language programs and computer
                    courses designed for learners of all levels.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <BookOpen
                  className={`h-8 w-8 mt-1 ${
                    isDarkMode ? "text-amber-400" : "text-amber-600"
                  }`}
                />
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Personalized Learning
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Our experienced instructors provide individual attention and
                    innovative teaching methods for rapid progress.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users
                  className={`h-8 w-8 mt-1 ${
                    isDarkMode ? "text-amber-400" : "text-amber-600"
                  }`}
                />
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Community and Support
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    Beyond classes, we support students through expert guidance
                    across subjects, fostering a dynamic learning environment.
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
