// import React from "react";

// function Testimonial() {
//   return (
//     <>
//       <div>
//         <section
//           id="testimonial"
//           className="max-w-7xl mx-auto w-full px-10 py-10"
//         >
//           <div className="flex items-center justify-center flex-col gap-y-2 py-5">
//             <h2 className="bg-transparent text-2xl md:text-3xl lg:text-4xl font-bold max-w-md mx-auto text-center text-white">
//               Here's what our
//               <span className="text-[#45B3BA]"> customers </span> have to say
//             </h2>
//             <p className="text-lg font-medium text-slate-400/70">
//               Discover how our service can benefit you
//             </p>
//           </div>
//           <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
//             <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
//               <div className="bg-transparent flex flex-col gap-y-3.5">
//                 <p className="bg-transparent font-bold text-xl text-white">
//                   Efficient customer support
//                 </p>
//                 <p className="bg-transparent font-medium text-white">
//                   The customer support team at our service is incredibly
//                   responsive and helpful. They went above and beyond to assist
//                   me with my issue.
//                 </p>
//               </div>
//               <div className="bg-transparent flex flex-col">
//                 <img
//                   src="https://randomuser.me/api/portraits/women/43.jpg"
//                   alt="Emily Smith"
//                   className="h-10 w-10"
//                 />
//                 <p className="bg-transparent pt-2 text-sm font-semibold text-white">
//                   Emily Smith
//                 </p>
//                 <p className="bg-transparent text-sm font-medium text-slate-100/70">
//                   Marketing Manager at ABC Company
//                 </p>
//               </div>
//             </div>
//             <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
//               <div className="bg-transparent flex flex-col gap-y-3.5">
//                 <p className="bg-transparent font-bold text-xl text-white">
//                   Excellent product features
//                 </p>
//                 <p className="bg-transparent font-medium text-white">
//                   The features offered by our service are outstanding. They have
//                   greatly improved our workflow and efficiency.
//                 </p>
//               </div>
//               <div className="bg-transparent flex flex-col">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/34.jpg"
//                   alt="Michael Johnson"
//                   className="h-10 w-10"
//                 />
//                 <p className="bg-transparent pt-2 text-sm font-semibold text-white">
//                   Michael Johnson
//                 </p>
//                 <p className="bg-transparent text-sm font-medium text-slate-100/70">
//                   CEO at XYZ Corporation
//                 </p>
//               </div>
//             </div>
//             <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-3 flex flex-col gap-y-10 justify-between">
//               <div className="bg-transparent flex flex-col gap-y-3.5">
//                 <p className="bg-transparent font-bold text-xl text-white">
//                   Seamless integration process
//                 </p>
//                 <p className="bg-transparent font-medium text-white">
//                   Integrating our systems with our service was smooth and
//                   hassle-free. The support team guided us through every step of
//                   the process.
//                 </p>
//               </div>
//               <div className="bg-transparent flex flex-col">
//                 <img
//                   src="https://randomuser.me/api/portraits/women/71.jpg"
//                   alt="Sarah Brown"
//                   className="h-10 w-10"
//                 />
//                 <p className="bg-transparent pt-2 text-sm font-semibold text-white">
//                   Sarah Brown
//                 </p>
//                 <p className="bg-transparent text-sm font-medium text-slate-100/70">
//                   CTO at XYZ Corporation
//                 </p>
//               </div>
//             </div>
//             <div className="border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-2 flex flex-col gap-y-10 justify-between">
//               <div className="bg-transparent flex flex-col gap-y-3.5">
//                 <p className="bg-transparent font-bold text-xl text-white">
//                   Reliable service uptime
//                 </p>
//                 <p className="bg-transparent font-medium text-white">
//                   Our service has consistently maintained high uptime, ensuring
//                   that our operations run smoothly without any disruptions.
//                 </p>
//               </div>
//               <div className="bg-transparent flex flex-col">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/71.jpg"
//                   alt="James White"
//                   className="h-10 w-10"
//                 />
//                 <p className="bg-transparent pt-2 text-sm font-semibold text-white">
//                   James White
//                 </p>
//                 <p className="bg-transparent text-sm font-medium text-slate-100/70">
//                   COO at XYZ Corporation
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default Testimonial;

import React from "react";

function Testimonial() {
  const testimonials = [
    {
      title: "Expert Guidance",
      description:
        "The consultancy team provided personalized guidance that helped me choose the perfect career path. Truly professional and supportive.",
      name: "Emily Smith",
      role: "Student at ABC Institute",
      img: "https://randomuser.me/api/portraits/women/43.jpg",
      span: 2,
    },
    {
      title: "Practical Learning Approach",
      description:
        "The workshops and mentorship sessions are highly practical and have improved my skills tremendously.",
      name: "Michael Johnson",
      role: "Entrepreneur",
      img: "https://randomuser.me/api/portraits/men/34.jpg",
      span: 3,
    },
    {
      title: "Seamless Mentorship",
      description:
        "The mentorship program was smooth and highly effective. Every step was guided clearly.",
      name: "Sarah Brown",
      role: "Professional Learner",
      img: "https://randomuser.me/api/portraits/women/71.jpg",
      span: 3,
    },
    {
      title: "Reliable Support",
      description:
        "Their support and follow-up were outstanding, ensuring I never felt stuck during my learning journey.",
      name: "James White",
      role: "Corporate Trainee",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
      span: 2,
    },
  ];

  return (
    <section id="testimonial" className="max-w-7xl mx-auto w-full px-10 py-20">
      <div className="flex items-center justify-center flex-col gap-y-2 py-5 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-md mx-auto">
          Here's what our
          <span className="text-[#45B3BA]"> students & clients </span> say
        </h2>
        <p className="text-lg font-medium text-slate-400/70">
          See how our consultancy and educational programs have impacted lives
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`border p-7 rounded-xl bg-neutral-900 drop-shadow-md border-neutral-800/50 col-span-${t.span} flex flex-col gap-y-10 justify-between`}
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-white">{t.title}</p>
              <p className="font-medium text-white">{t.description}</p>
            </div>
            <div className="flex flex-col">
              <img
                src={t.img}
                alt={t.name}
                className="h-10 w-10 rounded-full"
              />
              <p className="pt-2 text-sm font-semibold text-white">{t.name}</p>
              <p className="text-sm font-medium text-slate-100/70">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
