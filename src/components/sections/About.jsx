import profileImage from "../../assets/profile-pic.jpg";

export const About = () => {
  return (
    <div
      id="about"
      className="relative flex flex-col items-center justify-start overflow-hidden bg-[#1d1d1d] py-24 px-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90 z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl w-full gap-16">
        
        <div className="relative flex items-center justify-center shrink-0">
          <div className="relative w-80 h-80 rounded-full border-4 border-teal-400 shadow-2xl overflow-hidden">
            <img
              src={profileImage}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
            <span className="text-black font-bold text-xl">JS</span>
          </div>
          
          <div className="absolute top-1/3 -left-8 w-14 h-14 bg-orange-500 rounded-lg flex items-center justify-center shadow-lg border-4 border-black">
            <span className="text-white font-bold text-lg">HTML</span>
          </div>
          
          <div className="absolute bottom-8 -left-4 w-12 h-12 bg-teal-400 rounded-full flex items-center justify-center shadow-lg border-4 border-black">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>
          
          <div className="absolute bottom-1/4 -right-8 w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg border-4 border-black">
            <span className="text-white font-bold text-sm">CSS</span>
          </div>
        </div>

        <div className="text-white max-w-2xl">
          <h4 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            MY BIO
          </h4>
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-teal-400">me.</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
             I’m Rachna Dhoke, a results-driven Full Stack Developer with over 3+ years of experience building scalable web applications and architecting enterprise solutions. With a strong foundation in Angular, React, Node.js, and RESTful APIs, I specialize in developing modular front-end architectures and high-performing back-end services.
            </p>
            <p>
              I’ve led end-to-end development of SEO-optimized platforms, integrated headless CMS solutions, and implemented state management using NgRx and Redux. My passion for clean code and user-centric design is backed by hands-on experience in micro frontend architecture, CI/CD pipelines, and agile methodologies. Whether crafting intuitive UI/UX interfaces or optimizing backend processes, I focus on delivering impactful, maintainable, and future-ready solutions.
            </p>
          </div>

          <a 
            className="inline-flex items-center gap-2 px-6 py-3 mt-8 bg-teal-400 text-black rounded-lg hover:bg-teal-300 transition font-medium" 
            href="/rachna-portfolio/RachnaCV.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-24 max-w-7xl w-full px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <div className="lg:w-1/2">
            <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
              SKILLS
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">
              Technical <span className="text-teal-400">skills.</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
             I specialize in full-stack web development with a strong foundation in both frontend and backend technologies. I have hands-on experience in building scalable, high-performance applications using modern JavaScript frameworks, state management libraries, and API integrations.
            </p>
            <p className="text-gray-300 leading-relaxed">Languages & Tools: JavaScript, TypeScript, HTML5, CSS3, Bootstrap 5, Tailwind CSS, RESTful APIs, JSON, API integration with third-party services</p>
            <p className="text-gray-300 leading-relaxed">Frameworks: Angular (13–16), React.js, Node.js, Express.js</p>
            <p className="text-gray-300 leading-relaxed">State Management: NgRx, ReduxL</p>
            <p className="text-gray-300 leading-relaxed">Micro Frontend Architecture: Designed modular, reusable components for enterprise-scale projects</p>
            <p className="text-gray-300 leading-relaxed">Database: MongoDB, MySQL</p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-3 gap-4 max-w-sm">
              <div className="w-20 h-20 border-2 border-teal-400 rounded-full flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                HTML5
              </div>
              <div className="col-span-2 h-20 border-2 border-teal-400 rounded-2xl flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                JAVASCRIPT
              </div>
              <div className="w-20 h-20 border-2 border-teal-400 rounded-full flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                CSS3
              </div>
              <div className="h-20 border-2 border-teal-400 rounded-2xl flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                TypeScript
              </div>
              <div className="h-20 border-2 border-teal-400 rounded-2xl flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                TAILWIND
              </div>
              <div className="h-20 border-2 border-teal-400 rounded-2xl flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                REACTJS
              </div>
              <div className="w-20 h-20 border-2 border-teal-400 rounded-full flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                Angular
              </div>
              <div className="w-20 h-20 border-2 border-teal-400 rounded-full flex items-center justify-center text-gray-300 text-sm font-medium hover:bg-teal-400 hover:text-black transition-all duration-300 cursor-pointer">
                NODE
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};