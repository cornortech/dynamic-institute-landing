import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { Coffee, Cake, Wifi, BookOpen, Music, Beer, IceCream } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Services = ({ isDarkMode }) => {
  const [ref, isVisible] = useScrollAnimation();

  const services = [
    {
      icon: Coffee,
      title: 'Premium Coffee',
      description: 'Artisanal coffee made from the finest beans, roasted to perfection.',
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Cake,
      title: 'Fresh Pastries',
      description: 'Daily-baked pastries and desserts that pair perfectly with our coffee.',
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Wifi,
      title: 'Work-Friendly',
      description: 'Free Wi-Fi and comfortable seating for remote work and study.',
      image: 'https://images.pexels.com/photos/1267359/pexels-photo-1267359.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: BookOpen,
      title: 'Events & Workshops',
      description: 'Coffee tasting events, barista workshops, and community gatherings.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Music,
      title: 'Live Music Nights',
      description: 'Enjoy live performances by local artists every weekend evening.',
      image: 'https://images.pexels.com/photos/1647113/pexels-photo-1647113.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Beer,
      title: 'Craft Beverages',
      description: 'A curated menu of craft beers and specialty drinks.',
      image: 'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: IceCream,
      title: 'Specialty Desserts',
      description: 'Cool down with handmade gelato and ice cream creations.',
      image: 'https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section
      id="services"
      className={`py-20 px-4 relative overflow-hidden ${isDarkMode ? 'bg-[#171716]' : 'bg-[#f0eee98c]'}`}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url(https://c4.wallpaperflare.com/wallpaper/511/708/855/coffee-beans-cups-cinnamon-wallpaper-preview.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Services
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-[#ffffffe5]' : 'text-black'}`}>
            Experience the perfect blend of quality, comfort, and community at BrewMaster
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
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
            pauseOnMouseEnter: true, // <-- This makes it stop on hover
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full"
        >

          {services.map((service, index) => (
            <SwiperSlide key={index} className="max-w-sm">
              <div
                className={`rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${isDarkMode ? 'bg-[#242421]' : 'bg-white'
                  }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isDarkMode ? 'from-gray-900/80 to-transparent' : 'from-black/50 to-transparent'
                    }`} />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-amber-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
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
