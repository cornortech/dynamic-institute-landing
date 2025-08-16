import React from 'react';

const coffeeImages = [
  "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
  "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
  "https://images.pexels.com/photos/414630/pexels-photo-414630.jpeg",
  "https://images.pexels.com/photos/34085/pexels-photo.jpg",
  "https://images.pexels.com/photos/139989/pexels-photo-139989.jpeg",
  "https://images.pexels.com/photos/1752806/pexels-photo-1752806.jpeg",
  "https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg",
  "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg",
  "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
  "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg",
  "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg",
  "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg"
];

const Gallery = ({ isDarkMode }) => {
  return (
    <section className={`py-20 px-4 ${isDarkMode ? 'bg-[#1c1c1c] text-white' : 'bg-gray-100 text-gray-900'}`} id="gallery">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Coffee Hub Gallery</h2>
        <p className="max-w-2xl mx-auto text-lg">
          A curated collection of our favorite coffee moments – from roasting to brewing to sipping perfection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-12">
        {coffeeImages.map((src, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
          >
            <img
              src={src}
              alt={`Coffee ${index + 1}`}
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
