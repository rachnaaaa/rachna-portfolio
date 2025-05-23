import { useState, useEffect } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "") || "home";
    setActiveSection(hash);
    
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "contact"];
      let currentSection = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#0a0a0a] shadow-lg">
      <div className="mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-2xl font-bold text-white">
            Rachna Dhoke
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden flex flex-col justify-between"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
          </div>

          <div className="hidden md:flex items-center space-x-10 ml-[45%]">
            <a
              href="#home"
              className={`transition-colors relative ${
                activeSection === "home" 
                  ? "text-teal-400 font-medium after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-teal-400" 
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveSection("home")}
            >
              Home
            </a>
            <a
              href="#projects"
              className={`transition-colors relative ${
                activeSection === "projects" 
                  ? "text-teal-400 font-medium after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-teal-400" 
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveSection("projects")}
            >
              Featured projects
            </a>
            <a
              href="#about"
              className={`transition-colors relative ${
                activeSection === "about" 
                  ? "text-teal-400 font-medium after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-teal-400" 
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveSection("about")}
            >
              About me
            </a>
            <a
              href="#contact"
              className={`transition-colors relative ${
                activeSection === "contact" 
                  ? "text-teal-400 font-medium after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-teal-400" 
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveSection("contact")}
            >
              Contact me
            </a>
          </div>

          <div className="hidden md:block">
            <a
              href="/rachna-portfolio/RachnaCV.pdf"
              className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>

          <div 
            className={`md:hidden fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col items-start p-8 mt-16 space-y-8">
              <a
                href="#home"
                className={`text-xl pb-1 transition-all w-full border-b-2 ${
                  activeSection === "home"
                    ? "text-teal-400 border-teal-400 font-medium"
                    : "text-gray-300 border-transparent hover:border-teal-400"
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection("home");
                }}
              >
                Home
              </a>
              <a
                href="#projects"
                className={`text-xl pb-1 transition-all w-full border-b-2 ${
                  activeSection === "projects"
                    ? "text-teal-400 border-teal-400 font-medium"
                    : "text-gray-300 border-transparent hover:border-teal-400"
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection("projects");
                }}
              >
                Featured projects
              </a>
              <a
                href="#about"
                className={`text-xl pb-1 transition-all w-full border-b-2 ${
                  activeSection === "about"
                    ? "text-teal-400 border-teal-400 font-medium"
                    : "text-gray-300 border-transparent hover:border-teal-400"
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection("about");
                }}
              >
                About me
              </a>
              <a
                href="#contact"
                className={`text-xl pb-1 transition-all w-full border-b-2 ${
                  activeSection === "contact"
                    ? "text-teal-400 border-teal-400 font-medium"
                    : "text-gray-300 border-transparent hover:border-teal-400"
                }`}
                onClick={() => {
                  setMenuOpen(false);
                  setActiveSection("contact");
                }}
              >
                Contact me
              </a>
              <a
                href="/rachna-portfolio/RachnaCV.pdf"
                className="bg-teal-500 hover:bg-teal-400 text-white py-2 px-4 rounded flex items-center mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </div>
          </div>

          {menuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
              onClick={() => setMenuOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};