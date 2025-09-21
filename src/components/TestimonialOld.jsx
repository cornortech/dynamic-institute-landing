import React from "react";
import { Star } from "lucide-react"; // icon for ratings (optional)
import img1 from "../images/t1.jpg";
import img2 from "../images/t2.jpg";
import img3 from "../images/t3.jpg";
import img4 from "../images/t4.jpg";
import img5 from "../images/t5.jpg";
import img6 from "../images/t6.jpg";

const testimonials = [
  {
    name: "Alice",
    review: "Best coffee I’ve ever had!",
    image: img1,
    rating: 5,
  },
  {
    name: "Bob",
    review: "Amazing atmosphere and friendly staff.",
    image: img2,
    rating: 4,
  },
  {
    name: "Cathy",
    review: "I love their pastries and coffee combos.",
    image: img3,
    rating: 5,
  },
  {
    name: "Sara",
    review: "I like the service they offer.",
    image: img4,
    rating: 4,
  },
  {
    name: "Moona",
    review:
      "Best place to visit with friends, been there many times and always feels amazing.",
    image: img5,
    rating: 5,
  },
  {
    name: "Ruby",
    review: "Became a fan of this place, well deserved as per its work",
    image: img6,
    rating: 5,
  },
];

const TestimonialsOld = ({ isDarkMode }) => (
  <section
    id="testimonials"
    className={`py-20 px-4 transition-colors duration-300 ${
      isDarkMode
        ? "bg-transparent text-white"
        : "bg-gradient-to-b from-gray-50 to-white text-gray-900"
    }`}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-extrabold mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-2xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl 
              ${isDarkMode ? "bg-[#242421]" : "bg-white"}`}
          >
            <div className="flex flex-col items-center mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-yellow-500 object-cover mb-3"
              />
              <p className="font-bold text-lg">{t.name}</p>
            </div>

            <p className="italic mb-4">"{t.review}"</p>

            <div className="flex justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < t.rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsOld;
