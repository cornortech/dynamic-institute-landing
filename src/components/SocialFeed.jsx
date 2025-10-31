import { Instagram, Facebook, Twitter, Music2 } from "lucide-react"; // TikTok icon alternative

const posts = [
  {
    url: "https://www.instagram.com/dynamiceducationbutwal",
    platform: "Instagram",
    icon: Instagram,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/517817891_122119798490921872_2195928411678277926_n.jpg?...",
    caption: "Students participating in our interactive language workshop 📚✨",
  },
  {
    url: "https://www.facebook.com/dynamiceducationbutwal",
    platform: "Facebook",
    icon: Facebook,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/518265472_122119798502921872_427513556995174498_n.jpg?...",
    caption: "Career guidance session helping students shape their future 🎓",
  },
  {
    url: "https://www.instagram.com/dynamiceducationbutwal",
    platform: "Twitter",
    icon: Twitter,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/515498353_122126019830921872_4420565216682465149_n.jpg?...",
    caption: "Join our online webinar for higher education tips 🌐📖",
  },
  {
    url: "https://www.facebook.com/dynamiceducationbutwal",
    platform: "TikTok",
    icon: Music2,
    username: "Dynamic Education Center",
    img: "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/526950325_122126019800921872_4155991886320596436_n.jpg?...",
    caption: "One-on-one student counseling for university applications ✨",
  },
];

const SocialFeed = ({ isDarkMode }) => {
  return (
    <section
      id="social"
      className={`py-20 px-4 ${
        isDarkMode ? "bg-[#171716]" : "bg-[#f0eee98c]"
      } text-gray-900`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Follow Us on Social Media
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => {
            const Icon = post.icon;
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:scale-[1.03] bg-white"
              >
                <div className="relative h-56">
                  <img
                    src={post.img}
                    alt={post.alt || post.platform}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                    <span className="text-white font-semibold text-sm">
                      {post.caption}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-2">
                  <Icon className="w-5 h-5 text-amber-500" />
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
