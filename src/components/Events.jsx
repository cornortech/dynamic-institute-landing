import React from 'react';

const Events = ({ isDarkMode }) => {
  const events = [
    {
      title: "Barista Workshop",
      description: "Master the craft of espresso, latte art, and perfect brewing techniques with our head barista.",
      date: "Aug 25, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Coffee Hub Studio, Downtown",
      image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
      registerLink: "#"
    },
    {
      title: "Coffee Tasting Experience",
      description: "Discover unique coffee beans and learn to identify flavor notes like a pro.",
      date: "Sep 5, 2025",
      time: "1:00 PM - 3:00 PM",
      location: "Coffee Hub Lounge, Main Street",
      image: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg",
      registerLink: "#"
    },
    {
      title: "Roasting 101",
      description: "Get hands-on with coffee roasting and understand how roast levels affect taste.",
      date: "Sep 20, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Coffee Hub Roastery, East Wing",
      image: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg",
      registerLink: "#"
    },
    {
      title: "Coffee & Pastry Pairing",
      description: "Learn how to pair specialty coffees with artisanal pastries for the ultimate experience.",
      date: "Oct 2, 2025",
      time: "4:00 PM - 6:00 PM",
      location: "Coffee Hub Café, Riverfront",
      image: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg",
      registerLink: "#"
    }
  ];

  return (
    <section
      id="events"
      className={`py-20 px-4 ${isDarkMode ? 'bg-transparent text-white' : 'bg-gray-100 text-gray-900'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Events & Workshops</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${
                isDarkMode ? 'bg-[#242421]' : 'bg-white'
              }`}
            >
              <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="mb-3">{event.description}</p>
                <p className="font-medium mb-4">📍 {event.location}</p>
                <a
                  href={event.registerLink}
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-2 px-5 rounded-lg transition"
                >
                  RSVP Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
