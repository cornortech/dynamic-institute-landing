import React, { useState } from 'react';

const Menu = ({ items, isDarkMode }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <section className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <h2 className="text-4xl font-bold mb-8 text-center">Menu</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 bg-white text-gray-900">
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="mb-4">{item.description}</p>
            <p className="font-bold mb-2">${item.price}</p>
            <button onClick={() => addToCart(item)} className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
