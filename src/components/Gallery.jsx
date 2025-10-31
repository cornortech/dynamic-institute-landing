
const galleryImages = [
  "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/538562599_122131411922921872_1779431752227382171_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFk2b0c0bsd8OcH2NSLJ1p11FkIITJBQSrUWQghMkFBKv1_N8nQUjXfXFdKQpjtQPMHRZ7TfFT_JFd7uShANq8y&_nc_ohc=itRwDAPSSWkQ7kNvwGXcqC3&_nc_oc=AdmufdS9EGYjfyqOUbP5IEc39RijZ8KWHoPM9WTtL8a3Q2FHmVqgIWLBU-_EgnLaMUoDxg6lkqUjfl_Idb_Pn30R&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=ZgWuu9LdfmqxUQcWvJbY6A&oh=00_AfZpgLsakWIjJqbFCEMT8vBWndR4lyUeTIuG983OCcARhw&oe=68D19C44",
  "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/538704355_122131411910921872_3754753443561731597_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHCQ85z61eA28R5KXIclsuBwOqRze59zIfA6pHN7n3Mhw27DHXyxJE2IvY2wx9TyUn57VBv6Bqp9Y8RHEibzkdm&_nc_ohc=a5okUTEs9j4Q7kNvwGG3WJs&_nc_oc=Adm-FVKX0PcXTc-SWDk-pP3WekxQxuRXFv4MGEOkT7RaVTBgZSOXDTqlV9lsu9wlASeeLBOwUqsaQ3BcSfJtIPV8&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=qSY9FI0koIJWDAMQ6Q8nRg&oh=00_Afana4AEgzqEMti1c5RBnmpp7_zg-3bcliIxTpCZVI24LQ&oe=68D196D8",
  "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/536278778_122131411412921872_1558724847387245332_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHted61KKHjj9NCLgJG7HYeNwpKf--xSlA3Ckp_77FKUFIn4dxAdHHXuSbWD3Z6IVXhdtV5O0uCkqPwNj7Ne5vp&_nc_ohc=EGVNgL6OpvAQ7kNvwGt2UYv&_nc_oc=AdnTedkhz1c4y_FiVhGOrHsr0WDYe0ie4pH99mFT_zqYSKwNZpH0j4pE4xveAurBDmXxZwF8TE-oTcceC7LlcZq_&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=jorwA251702Op_cir1UlMg&oh=00_AfaCDS2OpxuRccArCTmDL85dgqqCpMeNq20BzvyVuJS4LA&oe=68D1A099",
  "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/514282950_122131411898921872_3457442771948971581_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGM0gvRyQe69OzeFP-ytkT7RLRymV5WTl9EtHKZXlZOX0-iJr8ozKyjwGB74-NPT73BFrrIk-rAMJRxIdYlfOpE&_nc_ohc=d35h6oSKbT0Q7kNvwFlv_Jc&_nc_oc=AdkLV9qiKaROFphznKWlcBoLIbS4uqLSHYoSaMnsdTOaTXiufKSTPrWr9CXyqNDg3bb4DqI7nzb1kTn3uzCbyLFf&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=GcBbO8QDudPQCYBIyLU5UA&oh=00_Afaj1x9PCS6Zgm7hq694BDYW_oYP2KRVQYGQD3jyWi-lpA&oe=68D1BB20",
  "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/526950325_122126019800921872_4155991886320596436_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHXZJvhPptv6eGfSz48MFjcDLAKFOSfjwoMsAoU5J-PCrU4ZwuQZ6xRJVCkkAa2DTXuQrPwBIZeTuK4OmN86HAP&_nc_ohc=E91QB0GmRSoQ7kNvwF2XOHO&_nc_oc=AdkR3p0Yr6JbbdRYpl3kTu2zV5gg1AwfIYKzappq49KtaYsqUOER0UtM2ZEjz59Z6CmU2fcAM_I3AtxdJPtjuGp6&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=X78L9uoFVnR8LCmHZO4mqQ&oh=00_AfYjc6AULttQZ5-gOCfhfPrNT6uVD4574W9CSEyQB3pmCA&oe=68D19609",
  "https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/515501547_122126019812921872_4808404919815913686_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGSr1U1rXGz3mVQovwztabVN8eP88Dd_CY3x4_zwN38JgMDrJoM_RmPRMfpK8Hjns08OWsCnf28h8S4rA3wjEAA&_nc_ohc=SoFK5Ofr5lIQ7kNvwHXkN5I&_nc_oc=Admxeg3AhmAlVvts4txt-tSapCDVE_ol-hi-2MTJ8PKtVOkyW0dApM0iopC3_YYNpD7c_BG5GUxqotP4pOR-mkgY&_nc_zt=23&_nc_ht=scontent.fbwa1-1.fna&_nc_gid=IwwfhauW7ww1mqFtDGsrjg&oh=00_Afb2e6o-mpdIdviLfNwvY4OU0Dfu3seRNWTGUR9nVCQJow&oe=68D1C929",
];

const Gallery = ({ isDarkMode }) => {
  return (
    <section
      className={`py-20 px-4 ${
        isDarkMode ? "bg-[#1c1c1c] text-white" : "bg-gray-100 text-gray-900"
      }`}
      id="gallery"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Dynamic Educational Center Gallery
        </h2>
        <p className="max-w-2xl mx-auto text-lg">
          Explore highlights from our language classes, computer workshops, and
          student activities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 group"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              loading="lazy"
              className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Activity #{index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
