import background from "../../assets/about-bg.jpg";
import profileImage from "../../assets/profile-pic.jpg";

export const About = () => {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center justify-start overflow-hidden bg-gray-900 py-24 px-4"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(10px)",
          transform: "scale(1.1)",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 bg-opacity-80 z-0"
        style={{
          mixBlendMode: "multiply",
          opacity: 0.85,
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl w-full gap-16">
        <div className="relative w-72 h-72 rounded-full border-4 border-teal-400 shadow-lg overflow-hidden shrink-0">
          <img
            src={profileImage}
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-white max-w-2xl">
          <h4 className="text-sm uppercase tracking-widest text-gray-200 mb-2">
            MY BIO
          </h4>
          <h2 className="text-3xl font-bold mb-4">
            About <span className="text-teal-400">me.</span>
          </h2>
          <p className="text-gray-300 mb-4">
            I'm a passionate Full Stack Developer with expertise in Angular,
            Node.js, and RESTful APIs. I specialize in building scalable web
            applications, implementing Microfrontend architecture, and
            optimizing performance with NgRx state management.
          </p>
          <p className="text-gray-300 mb-4">
            I enjoy solving real-world problems through clean code and intuitive
            UI/UX. With experience in SEO, headless CMS integrations, and agile
            methodologies, I deliver full-stack solutions that scale.
          </p>

          <a
            href="/resume.pdf"
            className="inline-block px-6 py-2 mt-2 bg-teal-500 text-black rounded hover:bg-teal-400 transition font-medium"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="z-10 mt-20 max-w-7xl w-full px-4 flex">
        <div className="col-8">
          <p className="text-sm tracking-widest text-gray-400 uppercase">
            Skills
          </p>
          <h2 className="text-2xl font-bold text-white mb-4">
            Technical <span className="text-teal-400">skills.</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mb-6">
            Proficient in full stack development with strong command over modern
            frontend and backend technologies.
          </p>
        </div>
        <div className="ml-2 col-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
            <span className="border border-teal-400 text-black bg-teal-400 px-6 py-2 rounded-full hover:bg-teal-500 hover:text-black transition ">
              HTML5
            </span>
            <span className="border border-teal-400 text-black bg-teal-400 px-6 py-2 rounded hover:bg-teal-500 hover:text-black transition">
              JAVASCRIPT
            </span>
            <span className="border border-teal-400 text-black bg-teal-400 px-6 py-2 rounded-full hover:bg-teal-500 hover:text-black transition">
              CSS3
            </span>
            <span className="border border-teal-400 text-black bg-teal-400 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-black transition">
              REACT
            </span>
            <span
              className="border border-teal-400 text-black 
            bg-teal-400 px-6 py-2 rounded-md hover:bg-teal-500 hover:text-black transition"
            >
              TAILWIND
            </span>
            <span
              className="border border-teal-400 text-black
            bg-teal-400 px-6 py-2 rounded-lg hover:bg-teal-500 hover:text-black transition"
            >
              UI DESIGN
            </span>
            <span
              className="border border-teal-400 text-black
            bg-teal-400 px-6 py-2 rounded-full hover:bg-teal-500 hover:text-black transition"
            >
              TYPESCRIPT
            </span>
            <span
              className="border border-teal-400 text-black
            bg-teal-400 px-6 py-2 rounded-full hover:bg-teal-500 hover:text-black transition"
            >
                NODEJS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
