// import React from "react";
// // import { motion } from 'framer-motion';
// import img1 from "../images/f1.jpeg";
// import img2 from "../images/f2.jpeg";
// import img3 from "../images/f3.jpeg";
// import img4 from "../images/about.webp";
// import img5 from "../images/g2.jpeg";

// const specials = [
//   {
//     name: "Pumpkin Spice Latte",
//     desc: "A seasonal favorite with warm pumpkin and cinnamon flavors.",
//     price: 5,
//     calories: "250 kcal",
//     image: img1,
//   },
//   {
//     name: "Chocolate Croissant",
//     desc: "Flaky pastry layered with rich, dark chocolate.",
//     price: 3,
//     calories: "320 kcal",
//     image: img2,
//   },
//   {
//     name: "Vanilla Cold Brew",
//     desc: "Smooth cold brew coffee infused with sweet vanilla.",
//     price: 4,
//     calories: "120 kcal",
//     image: img3,
//   },
//   {
//     name: "Blueberry Muffin",
//     desc: "Moist muffin packed with fresh blueberries.",
//     price: 3,
//     calories: "280 kcal",
//     image: img4,
//   },
//   {
//     name: "Hazelnut Cappuccino",
//     desc: "Creamy cappuccino with a nutty hazelnut twist.",
//     price: 4.5,
//     calories: "200 kcal",
//     image: img5,
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//   }),
// };

// const Specials = ({ isDarkMode }) => (
//   <section
//     className={`py-24 px-4 ${
//       isDarkMode ? "bg-transparent text-white" : "bg-gray-50 text-gray-900"
//     }`}
//     id="specials"
//   >
//     <div className="max-w-6xl mx-auto text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="text-4xl font-bold mb-16"
//       >
//         Seasonal Specials
//       </motion.h2>

//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {specials.map((item, i) => (
//           <motion.div
//             key={i}
//             className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
//               isDarkMode ? "bg-[#242421]" : "bg-white"
//             }`}
//             custom={i}
//             initial="hidden"
//             whileInView="visible"
//             variants={cardVariants}
//             viewport={{ once: true }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
//             />
//             <div className="p-6 text-left">
//               <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//               <p className="mb-3">{item.desc}</p>
//               <div className="flex justify-between items-center">
//                 <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
//                 <span className="text-sm text-gray-500">{item.calories}</span>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Specials;

import React from "react";
import { motion } from "framer-motion";

const specials = [
  {
    name: "Korean Language Course",
    desc: "Comprehensive program focusing on speaking, listening, reading, and writing.",
    price: 435350,
    image:
      "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/524341187_122124381986921872_8664899136082943693_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzNdAlmG98QHdkHSWLD5KW4J3VZZaUSdPgndVllpRJ02T60GJ5Lx_QYLb9BGx7G_mkpmx_DXaTMOwEEDAsb4u0&_nc_ohc=ZVp58EH30vsQ7kNvwFV8VuI&_nc_oc=AdkZ3_55OcbF7CV4hrLNoE6YdxOGiHt6M0gf4mRi7dqyl5YW1kpZgoaaHdmMqV0W1q0Mq7nkFwmLamAqNeYdaT07&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=tqyN_-kix5MSp47i_UT1Og&oh=00_AfZpDuQDoIL0AkVUS3D8xbryafZVAqractmtqPB9JsshJw&oe=68D1A3B6",
  },
  {
    name: "German Language Course",
    desc: "Tailored lessons in german for all proficiency levels with a focus on practical usage.",
    price: 323420,
    image:
      "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/530700548_122127699056921872_6571289705929960860_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHn7MVAoeb8RUmz0Z9UzoD90U_xkb4OkDjRT_GRvg6QOAldLtbwDbnSLv_45aJuwYlzrikJV7uYXJxJ1ylQs5d_&_nc_ohc=8ilquyhcWhgQ7kNvwFtnvOH&_nc_oc=AdkLIdbvTnO2IGEzkQI6NXIMj6SlDKsg7BKXBJ_tk_e7ZNdE6s2pRGhZgnGMz3iytBzr21hlyYDQTh8GdurPBjKF&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=MNb67bL3IzsuvE0AqjIjzw&oh=00_AfZr08Ykx0WBvq7Kil09lBkOn2wqSwWJuZDlxmcIbL6Hvw&oe=68D1AAA3",
  },
  {
    name: "Japanese Language Course",
    desc: "Immersive approach to mastering Japanese with experienced instructors.",
    price: 2353250,
    image:
      "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/543030859_122133864098921872_231990558112503206_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHSmTWrfi7Ak75kcP6kfNvEgCTZcuqM1GKAJNly6ozUYhrK_rp0AaIixo8uIc917y013zDc6LFzsy4PjCTsgMna&_nc_ohc=su7RCOle-DIQ7kNvwEyx7NW&_nc_oc=AdlqMoNtrB7DU-z_R-XZh3PtrKY0US5NxKZjFsVbpSAC-eiApOgemo63pYND3_9lMgzTcHVNhpRc0lTN4qZC3tRL&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=Q2wV3Gkup-2mV1wPyUgXfA&oh=00_AfYSpXOvehTe8chDeGehEji58QVHosvKffO5OCfseZNLPg&oe=68D1B727",
  },
  {
    name: "English Language Course",
    desc: "Enhance your English skills with personalized lessons and support.",
    price: 54530,
    image:
      "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/515501547_122126019812921872_4808404919815913686_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGSr1U1rXGz3mVQovwztabVN8eP88Dd_CY3x4_zwN38JgMDrJoM_RmPRMfpK8Hjns08OWsCnf28h8S4rA3wjEAA&_nc_ohc=SoFK5Ofr5lIQ7kNvwHXkN5I&_nc_oc=Admxeg3AhmAlVvts4txt-tSapCDVE_ol-hi-2MTJ8PKtVOkyW0dApM0iopC3_YYNpD7c_BG5GUxqotP4pOR-mkgY&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=Ou0BB0D6IACpjEJ2bOrVsQ&oh=00_AfZDGJ86-APTsG0snJJz9w0caYt3o0hu0xaoJpXo5Qi8DA&oe=68D190E9",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Specials = ({ isDarkMode }) => (
  <section
    className={`py-24 px-4 ${
      isDarkMode ? "bg-transparent text-white" : "bg-gray-50 text-gray-900"
    }`}
    id="specials"
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16"
      >
        Language Courses at Dynamic Educational Center
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {specials.map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 ${
              isDarkMode ? "bg-[#242421]" : "bg-white"
            }`}
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
                {/* <p className="font-bold text-lg">Free</p> */}
                <span className="text-sm text-gray-500">All Levels</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Specials;
