import React from 'react';
import img1 from '../images/h1.jpeg'
import img2 from '../images/g2.jpeg'
import img3 from '../images/g3.jpeg'
import img4 from '../images/g4.jpg'
import img5 from '../images/s6.jpeg'
import img6 from '../images/g6.jpeg'
import img7 from '../images/g7.jpeg'
import img8 from '../images/event2.jpeg'
import img9 from '../images/g9.jpeg'
import img10 from '../images/g10.jpeg'
import img11 from '../images/g11.jpeg'
import img12 from '../images/g12.jpeg'

const coffeeImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12
];

const Gallery = ({ isDarkMode }) => {
  return (
    <section className={`py-20 px-4 ${isDarkMode ? 'bg-[#1c1c1c] text-white' : 'bg-gray-100 text-gray-900'}`} id="gallery">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Coffee Hub Gallery</h2>
        <p className="max-w-2xl mx-auto text-lg">
          A curated collection of our favorite coffee moments - from roasting to brewing to sipping perfection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {coffeeImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src={src}
              alt={`Coffee ${index + 1}`}
              loading= "lazy"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">Coffee #{index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
