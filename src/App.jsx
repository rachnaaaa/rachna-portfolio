import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/sections/Home";
import { Service } from "./components/sections/Service";
import { Project } from "./components/sections/Project";
import { About } from "./components/sections/About";

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }  text-gray-100`}
      >
        <Navbar />
        <Home />
        <Service />
        <Project />
        <About />
      </div>
    </>
  );
};

export default App;
