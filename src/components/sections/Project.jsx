import { useState } from "react";

export const Project = () => {
    const [activeCard, setActiveCard] = useState(null);

    const projects = [
        {
            title: "Crossover",
            description: "Crossover is a global talent platform that connects top-tier professionals with full-time, remote jobs at leading companies worldwide. It specializes in finding highly skilled candidates for roles in software engineering, marketing, finance, and operations, offering competitive salaries and long-term career growth—all while working remotely.",
            url: "https://www.crossover.com/",
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format"
        },
        {
            title: "Braveheart Nation",
            description: "BraveHeartNation is a personal growth and learning platform that connects users with expert practitioners through courses, matchmaking, and community tools. It helps individuals improve their well-being, mindset, and professional development—all in one app",
            url: "https://app.braveheartnation.com/",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&auto=format"
        },
        {
            title: "Tournament Edition",
            description: "Tournament Edition is a comprehensive esports tournament management platform developed by VGroup Inc. It offers advanced tools for organizing and managing gaming competitions, catering to both organizers and players",
            url: "https://tournamentedition.com/",
            image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&auto=format"
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
            <div className="relative z-10 text-center px-6 max-w-7xl w-full">
                <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">PORTFOLIO</p>
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-16">
                    Featured <span className="text-teal-400">projects.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-gray-900/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-400/20 border border-gray-800 hover:border-teal-400/50 ${
                                activeCard === index ? "border-teal-400" : ""
                            }`}
                            onClick={() => handleClick(index, project.url)}
                        >
                            <div className="relative h-64 bg-gradient-to-br from-teal-400/10 to-blue-500/10 p-8">
                                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    <div className="absolute top-4 left-4 flex space-x-2">
                                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                    </div>
                                    
                                    {/* Profile Card Mock */}
                                    <div className="absolute top-8 right-4 w-20 h-16 bg-white rounded-lg shadow-lg p-2">
                                        <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto mb-1"></div>
                                        <div className="w-12 h-1 bg-gray-300 rounded mx-auto mb-1"></div>
                                        <div className="w-8 h-1 bg-gray-300 rounded mx-auto"></div>
                                    </div>

                                    {/* Dashboard Elements */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="bg-white rounded-lg p-3 shadow-lg">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="w-16 h-2 bg-gray-300 rounded"></div>
                                                <div className="w-12 h-12 border-4 border-teal-400 rounded-full flex items-center justify-center">
                                                    <div className="text-xs font-bold text-teal-400">78%</div>
                                                </div>
                                            </div>
                                            <div className="flex space-x-1">
                                                <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
                                                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                                                <div className="w-6 h-6 bg-green-400 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};