import React from 'react';
import { Instagram, Facebook, Twitter, Music2 } from 'lucide-react'; // TikTok alternative icon

const posts = [
  {
    url: "https://www.instagram.com",
    platform: "Instagram",
    icon: Instagram,
    username: "@brewtowncafe",
    img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg",
    alt: "Coffee Art",
    caption: "Our latte art is getting better every morning ☕✨"
  },
  {
    url: "https://www.facebook.com",
    platform: "Facebook",
    icon: Facebook,
    username: "Brewtown Cafe",
    img: "https://images.pexels.com/photos/616837/pexels-photo-616837.jpeg",
    alt: "Pastry",
    caption: "Freshly baked pastries straight out of the oven 🥐"
  },
  {
    url: "https://www.twitter.com",
    platform: "Twitter",
    icon: Twitter,
    username: "@brewtowncafe",
    img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    alt: "Coffee Shop Interior",
    caption: "Rainy days call for cozy corners and warm cups 🌧️☕"
  },
  {
    url: "https://www.tiktok.com",
    platform: "TikTok",
    icon: Music2,
    username: "@brewtowncafe",
    img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    alt: "Coffee Beans",
    caption: "Watch our baristas perfect the perfect pour-over 🔥"
  }
];

const SocialFeed = ({ isDarkMode }) => (
  <section 
    className={`py-20 px-4 ${isDarkMode ? 'bg-transparent text-white' : 'bg-gray-50 text-gray-900'}`} 
    id="social"
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-12">Follow Us on Social Media</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {posts.map((p, i) => {
          const Icon = p.icon;
          return (
            <div 
              key={i} 
              className={`overflow-hidden rounded-2xl shadow-lg flex flex-col items-start 
                ${isDarkMode ? 'bg-[#242421]' : 'bg-white'} 
                hover:-translate-y-1 transition-transform duration-300`}
            >
              <img 
                src={p.img} 
                alt={p.alt} 
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 text-left flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{p.username}</span>
                </div>
                <p className="text-sm flex-1">{p.caption}</p>
                <a 
                  href={p.url} 
                  className="mt-3 text-blue-500 text-sm font-medium hover:underline"
                >
                  View on {p.platform}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SocialFeed;
