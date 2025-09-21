import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import img1 from "../images/backgroundLearning.jpg";
// import img2 from "../images/library.jpg";

const Contact = ({ isDarkMode }) => {
  const [ref, isVisible] = useScrollAnimation();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [" Finance Chowk, Butwal 32907"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["985-7054239"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["dynamicedu777@gmail.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Sun-Fri: 6AM - 9PM", "Sat-Sun: 7AM - 10PM"],
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate an API call here (e.g., email service or backend)
    alert("Your message has been sent to Coffee Hub!");
  };

  return (
    <section
      id="contact"
      className={`py-20 px-4 relative overflow-hidden ${
        isDarkMode ? "bg-[#171716]" : "bg-gray-50"
      }`}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Visit Us Today
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Discover quality guidance and learning opportunities in a supportive
            environment.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl h-96">
            {/* <img
              src={img2}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            /> */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${
                isDarkMode
                  ? "from-gray-900/60 to-transparent"
                  : "from-black/40 to-transparent"
              }`}
            />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-xl font-semibold mb-2">Our Cozy Interior</h3>
              <p className="text-sm opacity-90">
                Perfect for work, meetings, or relaxation
              </p>
            </div>
          </div>
        </div>
        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-12 my-16">
          {/* Contact Info */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                    isDarkMode ? "bg-amber-400/20" : "bg-amber-100"
                  }`}
                >
                  <item.icon
                    className={`h-6 w-6 ${
                      isDarkMode ? "text-amber-400" : "text-amber-600"
                    }`}
                  />
                </div>
                <div>
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {item.title}
                  </h3>
                  {item.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className={`${
                        isDarkMode ? "text-gray-100" : "text-gray-950"
                      }`}
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className={`rounded-lg shadow-xl p-6 space-y-4 ${
                isDarkMode ? "bg-[#242421]" : "bg-white"
              }`}
            >
              <h3
                className={`text-2xl font-semibold mb-4 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Send us a message
              </h3>

              <input
                type="text"
                placeholder="Your Name"
                required
                className={`w-full p-3 rounded-md border focus:outline-none ${
                  isDarkMode
                    ? "bg-transparent border-gray-600 text-white placeholder-gray-200 focus:border-amber-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-800 focus:border-amber-600"
                }`}
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                className={`w-full p-3 rounded-md border focus:outline-none ${
                  isDarkMode
                    ? "bg-transparent border-gray-600 text-white placeholder-gray-200 focus:border-amber-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-800 focus:border-amber-600"
                }`}
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                required
                className={`w-full p-3 rounded-md border focus:outline-none ${
                  isDarkMode
                    ? "bg-transparent border-gray-600 text-white placeholder-gray-200 focus:border-amber-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-800 focus:border-amber-600"
                }`}
              />

              <button
                type="submit"
                className="w-full bg-amber-500 cursor-pointer hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1215.9449579219538!2d83.46427044474063!3d27.687450267814764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sdynamic%20education%20consultancy!5e1!3m2!1sen!2snp!4v1758446238050!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dynamic Education Consultancy"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
