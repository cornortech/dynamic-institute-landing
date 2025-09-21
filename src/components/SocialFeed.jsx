import React from "react";
import { Instagram, Facebook, Twitter, Music2 } from "lucide-react"; // TikTok icon alternative

const posts = [
  {
    url: "https://www.instagram.com/dynamiceducationbutwal",
    platform: "Instagram",
    icon: Instagram,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/517817891_122119798490921872_2195928411678277926_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGcAZu-fgQ6CnOdIN3aCs-UkuOZjFnXEiKS45mMWdcSIhCrVLXs7jBzS9fuvIWl8GR-NNPAvzstbsq5k0sgU2ry&_nc_ohc=T8vv0Q0kKM0Q7kNvwEYcEMf&_nc_oc=Adk5nFKdmx1-b9bu4bs9HhHBMk8e_mwIuSLLl1tqs3usgOT0T-PRQ6sM0SSYQdFe2WxzxQdOMTht9EnL5Uoz1rSu&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=CcH4aCO9aKJ1SKOHLDcsYg&oh=00_AfYvhVS_CqgE5TCvsNIv61oIZOCCzWwsgGPIGnyZ9P1RdA&oe=68D1CBC0",
    caption: "Students participating in our interactive language workshop 📚✨",
  },
  {
    url: "https://www.facebook.com/dynamiceducationbutwal",
    platform: "Facebook",
    icon: Facebook,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/518265472_122119798502921872_427513556995174498_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH_LV0UFtRc8ImvTqFjrUxD3SicuRZuaErdKJy5Fm5oSlnKgICw-u3egDBCe7YIpSrFn0hJrK-Cd0VLvOjGJX73&_nc_ohc=A1d72wP8aaAQ7kNvwHB7hz6&_nc_oc=AdnAQiHytxsxpUKNWlq3MnAybrRQWbgBevRNfbH1UVBIUj6rlUPwyVWh5a2dEYxQYBpFwaj2B65XDLX0u3Jcw5ev&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=5u06_8BdfMiuffnu8KhYGw&oh=00_AfaXBhpFvI1K99l9cI5bCVX5EFeVrDGpQWJ5hGKrFunu7w&oe=68D1CB64",
    alt: "Career Guidance Session",
    caption: "Career guidance session helping students shape their future 🎓",
  },
  {
    url: "https://www.instagram.com/dynamiceducationbutwal",
    platform: "Twitter",
    icon: Twitter,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/515498353_122126019830921872_4420565216682465149_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE21eun6Xcs2tPpo1GI_Jrw4da9ykBOGhrh1r3KQE4aGoY9zq_f34hkntnCpSz7nr_emGmRPGCThPd3obqT1R4p&_nc_ohc=7T53CdFnkQ0Q7kNvwFjzLgX&_nc_oc=Admw8DLf6XlrZm8JKP7Y0hPNkSdaur5AJhDq9ArTn6ngCp_8f5lJmgblmqVhJzTq2q2gGGrjxt7I8Z0qOL7HRfAw&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=5oaDSAQdeeKpR98sNAbeHQ&oh=00_AfaVKnXQECe87i5_9Y8hXkeLcjkkca2V-kAwCHrzc242uQ&oe=68D1AC45",
    alt: "Webinar",
    caption: "Join our online webinar for higher education tips 🌐📖",
  },
  {
    url: "https://www.facebook.com/dynamiceducationbutwal",
    platform: "TikTok",
    icon: Music2,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/526950325_122126019800921872_4155991886320596436_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXZJvhPptv6eGfSz48MFjcDLAKFOSfjwoMsAoU5J-PCrU4ZwuQZ6xRJVCkkAa2DTXuQrPwBIZeTuK4OmN86HAP&_nc_ohc=E91QB0GmRSoQ7kNvwF2XOHO&_nc_oc=AdkR3p0Yr6JbbdRYpl3kTu2zV5gg1AwfIYKzappq49KtaYsqUOER0UtM2ZEjz59Z6CmU2fcAM_I3AtxdJPtjuGp6&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=X78L9uoFVnR8LCmHZO4mqQ&oh=00_AfYjc6AULttQZ5-gOCfhfPrNT6uVD4574W9CSEyQB3pmCA&oe=68D19609",
    alt: "Student Counseling",
    caption: "One-on-one student counseling for university applications ✨",
  },
];

const SocialFeed = ({ isDarkMode }) => {
  return (
    <section
      id="social"
      className={`py-20 px-4 ${
        isDarkMode ? "bg-[#171716] text-white" : "bg-[#f0eee98c] text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Follow Us on Social Media
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => {
            const Icon = post.icon;
            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.03] ${
                  isDarkMode ? "bg-[#242421]" : "bg-white"
                }`}
              >
                <div className="relative h-56">
                  <img
                    src={post.img}
                    alt={post.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white font-semibold text-sm">
                      {post.caption}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-amber-400" />
                  <span className="font-semibold">{post.username}</span>
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 pb-4 text-blue-500 font-medium hover:underline"
                >
                  View on {post.platform}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
