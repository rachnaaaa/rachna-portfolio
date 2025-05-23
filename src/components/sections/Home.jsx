import background from "../../assets/home-background.jpg";

export const Home = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center h-[80vh] overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "blur(4px)",
          transform: "scale(1.1)",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, oklch(0.15 0.02 266.09), oklch(0.11 0.01 262.25))`,
          opacity: 0.9,
          mixBlendMode: "multiply",
        }}
      ></div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-teal-400">Rachna Dhoke</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300">
        Full Stack Developer crafting scalable, high-performance web solutions from concept to deployment. Let’s bring your vision to life!
        </p>

        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://github.com/rachnaaaa"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="mailto:rachnadhoke373@gmail.com"
            className=" bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
            aria-label="Email Me"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/rachna-dhoke/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          <a
            href="https://twitter.com/YourTwitterUsername"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-300"
            aria-label="Twitter Profile"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
