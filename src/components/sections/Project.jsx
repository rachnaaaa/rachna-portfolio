import { useState } from "react";

export const Project = () => {
    const [activeCard, setActiveCard] = useState(null);

    const projects = [
        {
            title: "Crossover",
            description: "Remote jobs platform for top talent and global companies.",
            url: "https://www.crossover.com/",
        },
        {
            title: "Braveheart Nation",
            description: "Athlete performance and recruitment management app.",
            url: "https://app.braveheartnation.com/",
        },
        {
            title: "Tournament Edition",
            description: "Platform for managing and organizing competitive tournaments.",
            url: "https://tournamentedition.com/",
        },
        {
            title: "SmartEquip",
            description: "Equipment lifecycle and service management demo platform.",
            url: "https://www.smartequip.com/schedule-demo/",
        },
    ];

    const handleClick = (index, url) => {
        setActiveCard(index);
        window.open(url, "_blank");
    };

    return (
        <div
            id="projects"
            className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-20"
        >
            <div className="relative z-10 text-center px-6 max-w-6xl">
                <h3 className="text-sm uppercase tracking-widest text-gray-200 mb-2">Projects</h3>
                <h1 className="mt-4 text-4xl text-white font-bold">
                    Featured <span className="text-teal-300">projects</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`bg-[#262626] p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 border ${
                                activeCard === index
                                    ? "border-teal-400"
                                    : "border-transparent hover:border-teal-400 hover:shadow-teal-500/30 transition-all duration-300 cursor-pointer"
                            }`}
                            onClick={() => handleClick(index, project.url)}
                        >
                            <h3 className="text-xl font-semibold text-teal-400">
                                {project.title}
                            </h3>
                            <p className="mt-4 text-gray-300">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
