import React, { useState } from 'react';

const Newsletter = ({ isDarkMode }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <section className={`py-20 px-4 text-center ${isDarkMode ? 'bg-transparent text-white' : 'bg-white text-gray-900'}`}>
      <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-6">Get updates on new products, events, and special promotions.</p>
      <form onSubmit={handleSubmit} className="flex justify-center gap-2 flex-wrap">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className=
          {`p-3 border outline-none w-64 ${isDarkMode
                  ? 'text-white placeholder-gray-200'
                  : 'bg-transparent text-gray-900 placeholder-gray-800'
                  }`}
        />
        <button type="submit" className="bg-amber-500 cursor-pointer hover:bg-amber-600 text-white py-3 px-6 transition">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;
