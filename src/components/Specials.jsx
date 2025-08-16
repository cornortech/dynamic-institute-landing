import React from 'react';
import { motion } from 'framer-motion';

const specials = [
  { 
    name: "Pumpkin Spice Latte", 
    desc: "A seasonal favorite with warm pumpkin and cinnamon flavors.", 
    price: 5, 
    calories: "250 kcal",
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
  },
  { 
    name: "Chocolate Croissant", 
    desc: "Flaky pastry layered with rich, dark chocolate.", 
    price: 3, 
    calories: "320 kcal",
    image: "https://images.pexels.com/photos/616837/pexels-photo-616837.jpeg" 
  },
  { 
    name: "Vanilla Cold Brew", 
    desc: "Smooth cold brew coffee infused with sweet vanilla.", 
    price: 4, 
    calories: "120 kcal",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" 
  },
  { 
    name: "Blueberry Muffin", 
    desc: "Moist muffin packed with fresh blueberries.", 
    price: 3, 
    calories: "280 kcal",
    image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg" 
  },
  { 
    name: "Hazelnut Cappuccino", 
    desc: "Creamy cappuccino with a nutty hazelnut twist.", 
    price: 4.5, 
    calories: "200 kcal",
    image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg" 
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  })
};

const Specials = ({ isDarkMode }) => (
  <section className={`py-24 px-4 ${isDarkMode ? 'bg-transparent text-white' : 'bg-gray-50 text-gray-900'}`} id="specials">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2 
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16"
      >
        Seasonal Specials
      </motion.h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {specials.map((item, i) => (
          <motion.div 
            key={i}
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${isDarkMode ? 'bg-[#242421]' : 'bg-white'}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105" 
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="mb-3">{item.desc}</p>
              <div className="flex justify-between items-center">
                <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
                <span className="text-sm text-gray-500">{item.calories}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Specials;
