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
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black max-w-md mx-auto">
          Here's what our
          <span className="text-amber-400"> students & clients </span> say
        </h2>
        <p className="text-lg font-medium text-gray-600">
          See how our consultancy and educational programs have impacted lives
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`border p-7 rounded-xl  drop-shadow-md border-neutral-800/50 col-span-${t.span} flex flex-col gap-y-10 justify-between`}
          >
            <div className="flex flex-col gap-y-3.5">
              <p className="font-bold text-xl text-black">{t.title}</p>
              <p className="font-medium text-gray-500">{t.description}</p>
            </div>
            <div className="flex flex-col">
              <img
                src={t.img}
                alt={t.name}
                className="h-10 w-10 rounded-full"
              />
              <p className="pt-2 text-sm font-semibold text-black">{t.name}</p>
              <p className="text-sm font-medium text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
