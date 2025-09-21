// import React from "react";
// import img1 from "../images/event1.jpeg";
// import img2 from "../images/event2.jpeg";
// import img3 from "../images/event3.jpeg";
// import img4 from "../images/event4.jpeg";

// const Events = ({ isDarkMode }) => {
//   const events = [
//     {
//       title: "Barista Workshop",
//       description:
//         "Master the craft of espresso, latte art, and perfect brewing techniques with our head barista.",
//       date: "Aug 25, 2025",
//       time: "10:00 AM - 2:00 PM",
//       location: "Coffee Hub Studio, Downtown",
//       image: img1,
//       registerLink: "#",
//     },
//     {
//       title: "Coffee Tasting Experience",
//       description:
//         "Discover unique coffee beans and learn to identify flavor notes like a pro.",
//       date: "Sep 5, 2025",
//       time: "1:00 PM - 3:00 PM",
//       location: "Coffee Hub Lounge, Main Street",
//       image: img2,
//       registerLink: "#",
//     },
//     {
//       title: "Roasting 101",
//       description:
//         "Get hands-on with coffee roasting and understand how roast levels affect taste.",
//       date: "Sep 20, 2025",
//       time: "9:00 AM - 12:00 PM",
//       location: "Coffee Hub Roastery, East Wing",
//       image: img3,
//       registerLink: "#",
//     },
//     {
//       title: "Coffee & Pastry Pairing",
//       description:
//         "Learn how to pair specialty coffees with artisanal pastries for the ultimate experience.",
//       date: "Oct 2, 2025",
//       time: "4:00 PM - 6:00 PM",
//       location: "Coffee Hub Café, Riverfront",
//       image: img4,
//       registerLink: "#",
//     },
//   ];

//   return (
//     <section
//       id="events"
//       className={`py-20 px-4 ${
//         isDarkMode ? "bg-transparent text-white" : "bg-gray-100 text-gray-900"
//       }`}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold mb-10 text-center">
//           Events & Workshops
//         </h2>
//         <div className="grid md:grid-cols-2 gap-10">
//           {events.map((event, index) => (
//             <div
//               key={index}
//               className={`rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] ${
//                 isDarkMode ? "bg-[#242421]" : "bg-white"
//               }`}
//             >
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-56 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
//                 <p className="mb-3">{event.description}</p>
//                 <p className="font-medium mb-4">📍 {event.location}</p>
//                 <a
//                   href={event.registerLink}
//                   className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-2 px-5 rounded-lg transition"
//                 >
//                   RSVP Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;

// Events.js

import React from "react";

const Events = ({ isDarkMode }) => {
  const events = [
    {
      title: "Korean Language Workshop",
      description:
        "Interactive session to improve speaking, listening, and grammar skills with our expert instructor.",
      date: "Sep 10, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Dynamic Educational Center, Main Campus",
      image:
        "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/524341187_122124381986921872_8664899136082943693_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzNdAlmG98QHdkHSWLD5KW4J3VZZaUSdPgndVllpRJ02T60GJ5Lx_QYLb9BGx7G_mkpmx_DXaTMOwEEDAsb4u0&_nc_ohc=ZVp58EH30vsQ7kNvwFV8VuI&_nc_oc=AdkZ3_55OcbF7CV4hrLNoE6YdxOGiHt6M0gf4mRi7dqyl5YW1kpZgoaaHdmMqV0W1q0Mq7nkFwmLamAqNeYdaT07&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=tqyN_-kix5MSp47i_UT1Og&oh=00_AfZpDuQDoIL0AkVUS3D8xbryafZVAqractmtqPB9JsshJw&oe=68D1A3B6",
      registerLink: "#",
    },
    {
      title: "Computer Basics & Excel Training",
      description:
        "Hands-on workshop to enhance digital literacy and learn essential computer applications.",
      date: "Sep 20, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Dynamic Educational Center, IT Lab",
      image:
        "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/518337123_122122569278921872_2178766770862495197_n.png?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFG7hNHzcfHChWFuZx_6NFwF1Yj8Dl-6loXViPwOX7qWkZ2WRgDZCpWlNGxoQ5TQfBKZey3v_P6USo19iwtaIMo&_nc_ohc=_Nwy1IkCHL8Q7kNvwGDNPYy&_nc_oc=Adkh-v8R9mMzqWgV15nJVx8NwTaDGB3ElPatOxe5xLxLKe7DRYNrENDUCde3fjCg-pqDZM-j7E-cY_FbXkLQA2ZU&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=fFa08srFQF0TM9eH8aOQGA&oh=00_Afac9agsELRM1EVMzawPVSG_khjF83QIrTFPtvfULW9Tcg&oe=68D1B161",
      registerLink: "#",
    },
    {
      title: "German Language Immersion",
      description:
        "Boost your German skills with intensive exercises in reading, writing, and conversation.",
      date: "Oct 5, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Dynamic Educational Center, Language Lab",
      image:
        "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/526358136_122125562126921872_5069315446807326511_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHqmDIzQa0m-JGlUN_di7NNROkBXYQR4gBE6QFdhBHiAN8iFe8vbL5xXEdImhoz04trv6okdKkilPjTguKe17Jk&_nc_ohc=C1CJu0wJvHoQ7kNvwGzFkiD&_nc_oc=AdlBFLML2we2lgHT1qhWLr2xZ_UuBElHnTQgkTSmqWY4Qag688iFC-qB1ZF1NPY8R8oZGSoqIDUt9fXh5Et_SKse&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=pw5KKHrO3M_PdNcV8qsimA&oh=00_AfbEkP4qr5eaTsAhggiF5nrbbhZAroAdVcxhfNyfbIN5ng&oe=68D1A2DA",
      registerLink: "#",
    },
    {
      title: "Exam Preparation & Tuition Tips",
      description:
        "Guidance session on effective study techniques, exam strategies, and personalized tutoring.",
      date: "Oct 20, 2025",
      time: "3:00 PM - 6:00 PM",
      location: "Dynamic Educational Center, Auditorium",
      image:
        "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/524857955_122124921902921872_5719814469592863274_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHT92m9SlLdSbaunnytBNj5PbO7k6mvGGg9s7uTqa8YaJZyCpfTo_vS8ycshiT6SI6R_KMQYq5ZMboYw9yftiN0&_nc_ohc=kjn5RP4CyCcQ7kNvwFSShFg&_nc_oc=AdlqDqCCXh1wj89YiD041gKHKx_wSG-wD1vs6pok_NNQx072Zness0XcxD2VlgrC4TE7WY4zo4quU9Fm0ldCIEuR&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=fDMk4xWa3f7qLqXdUKfAGw&oh=00_AfawwWS_sKUrVX2Wd1XKjtBRymx7F-UCfl4k9KCW-2eC4g&oe=68D1A404",
      registerLink: "#",
    },
  ];

  return (
    <section
      id="events"
      className={`py-20 px-4 ${
        isDarkMode ? "bg-[#1c1c1c] text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Workshops & Events
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:scale-105 ${
                isDarkMode ? "bg-[#242421]" : "bg-white"
              }`}
            >
              <div className="relative h-64 md:h-72 w-full overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                <p className="mb-3 text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
                <p className="font-medium mb-1">
                  📅 {event.date} | ⏰ {event.time}
                </p>
                <p className="font-medium mb-4">📍 {event.location}</p>
                <a
                  href={event.registerLink}
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white py-2 px-5 rounded-lg transition"
                >
                  Register Now
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
