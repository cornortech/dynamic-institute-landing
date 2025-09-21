// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
// import { Coffee, Cake, Wifi, BookOpen, Music, Beer, IceCream } from 'lucide-react';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// const Services = ({ isDarkMode }) => {
//   const [ref, isVisible] = useScrollAnimation();

//   const services = [
//     {
//       icon: Coffee,
//       title: 'Premium Coffee',
//       description: 'Artisanal coffee made from the finest beans, roasted to perfection.',
//       image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       icon: Cake,
//       title: 'Fresh Pastries',
//       description: 'Daily-baked pastries and desserts that pair perfectly with our coffee.',
//       image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       icon: Wifi,
//       title: 'Work-Friendly',
//       description: 'Free Wi-Fi and comfortable seating for remote work and study.',
//       image: 'https://images.pexels.com/photos/1267359/pexels-photo-1267359.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       icon: BookOpen,
//       title: 'Events & Workshops',
//       description: 'Coffee tasting events, barista workshops, and community gatherings.',
//       image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       icon: Music,
//       title: 'Live Music Nights',
//       description: 'Enjoy live performances by local artists every weekend evening.',
//       image: 'https://images.pexels.com/photos/1647113/pexels-photo-1647113.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       icon: Beer,
//       title: 'Craft Beverages',
//       description: 'A curated menu of craft beers and specialty drinks.',
//       image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800'
//     },
//     {
//       icon: IceCream,
//       title: 'Specialty Desserts',
//       description: 'Cool down with handmade gelato and ice cream creations.',
//       image: 'https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg?auto=compress&cs=tinysrgb&w=800'
//     }
//   ];

//   return (
//     <section
//       id="services"
//       className={`py-20 px-4 relative overflow-hidden ${isDarkMode ? 'bg-[#171716]' : 'bg-[#f0eee98c]'}`}
//     >
//       {/* Parallax Background */}
//       <div
//         className="absolute inset-0 opacity-50"
//         style={{
//           backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/511/708/855/coffee-beans-cups-cinnamon-wallpaper-preview.jpg)',
//           backgroundSize: 'cover',
//           backgroundAttachment: 'fixed',
//           backgroundPosition: 'center'
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Heading */}
//         <div
//           ref={ref}
//           className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
//         >
//           <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//             Our Services
//           </h2>
//           <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-[#ffffffe5]' : 'text-black'}`}>
//             Experience the perfect blend of quality, comfort, and community at BrewMaster
//           </p>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           loop={true}
//           speed={1200}
//           coverflowEffect={{
//             rotate: 40,
//             stretch: 0,
//             depth: 150,
//             modifier: 1,
//             slideShadows: true,
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true, // <-- This makes it stop on hover
//           }}
//           modules={[EffectCoverflow, Pagination, Autoplay]}
//           className="w-full"
//         >

//           {services.map((service, index) => (
//             <SwiperSlide key={index} className="max-w-sm">
//               <div
//                 className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${isDarkMode ? 'bg-[#242421]' : 'bg-white'
//                   }`}
//               >
//                 <div className="relative h-56 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-gray-900/80 to-transparent' : 'from-black/50 to-transparent'
//                     }`} />
//                   <div className="absolute bottom-4 left-4">
//                     <service.icon className="h-8 w-8 text-amber-400" />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//                     {service.title}
//                   </h3>
//                   <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Services;

// Services.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import {
  BookOpen,
  Globe,
  Laptop,
  Users,
  Award,
  Headphones,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import img1 from "../images/a1.jpg";
import img2 from "../images/a2.jpg";
import img3 from "../images/a3.jpg";
import img4 from "../images/a4.jpg";
import img5 from "../images/a5.jpg";
import img6 from "../images/a6.jpg";

const Services = ({ isDarkMode }) => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: Globe,
      title: "Language Programs",
      description:
        "Comprehensive courses in Korean, German, Japanese, and English for all levels.",
      image: img1,
    },
    {
      icon: Laptop,
      title: "Computer Classes",
      description:
        "Enhance digital literacy and learn essential software applications.",
      image: img2,
    },
    {
      icon: BookOpen,
      title: "Tuition Services",
      description:
        "Expert guidance and support across various subjects and grade levels.",
      image: img3,
    },
    {
      icon: Award,
      title: "Certified Instructors",
      description:
        "Experienced teachers providing personalized attention to ensure mastery.",
      image: img4,
    },
    {
      icon: Users,
      title: "Community Focus",
      description:
        "A supportive environment fostering collaboration and learning for all students.",
      image: img5,
    },
    {
      icon: Headphones,
      title: "Interactive Workshops",
      description:
        "Engaging sessions to enhance practical skills and communication.",
      image: img6,
    },
  ];

  return (
    <section
      id="services"
      className={`py-20 px-4 relative overflow-hidden ${
        isDarkMode ? "bg-[#171716]" : "bg-[#f0eee98c]"
      }`}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1596496055830-5cf1aa3cd77d?auto=format&fit=crop&w=1600&q=80)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
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
            Our Services
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-[#ffffffe5]" : "text-black"
            }`}
          >
            Dynamic Educational Ce offers top-notch language courses, computer
            training, and expert tuition services to help learners excel.
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={1200}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="max-w-sm">
              <div
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${
                  isDarkMode ? "bg-[#242421]" : "bg-white"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      isDarkMode
                        ? "from-gray-900/80 to-transparent"
                        : "from-black/50 to-transparent"
                    }`}
                  />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-amber-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                    {service.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
