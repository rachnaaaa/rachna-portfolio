import { useState } from "react";

const Service = () => {
    const [activeCard, setActiveCard] = useState(0);

    const services = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            title: "Web Development",
            desc: "I use my knowledge of various programming languages such as HTML5, CSS, JAVASCRIPT, TAILWIND to build digital solutions for users."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                </svg>
            ),
            title: "UI Design",
            desc: "Crafting user-centric digital experiences that seamlessly blend aesthetics and functionality. Expert in user-centered design and responsive interfaces."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.035a2.5 2.5 0 113.536 3.536L6.5 21.01H3v-3.572L16.732 3.732z" />
                </svg>
            ),
            title: "Content Writing", 
            desc: "Weaving impactful narratives and delivering engaging content that resonates with readers. Skillfully combining creativity with research to create compelling pieces."
        }
    ];

    return (
        <div
            id="service"
            className="relative flex flex-col items-center justify-center overflow-hidden bg-black py-20"
        >
            <div className="relative z-10 text-center px-6 max-w-6xl">
                <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-2">Services</h3>
                <h1 className="mt-4 text-4xl text-white font-bold mb-16">
                    What <span className="text-teal-400">I do</span>.
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => setActiveCard(index)}
                            className={`
                                relative p-8 rounded-2xl cursor-pointer transition-all duration-300 border-2
                                ${activeCard === index 
                                    ? 'bg-gradient-to-br from-teal-400 to-cyan-500 border-teal-400 text-black' 
                                    : 'bg-gray-800 border-gray-700 text-white hover:border-gray-600 hover:bg-gray-750'
                                }
                            `}
                        >
                            <div className={`
                                absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                                ${activeCard === index 
                                    ? 'bg-black/20 text-black/70' 
                                    : 'bg-gray-700 text-gray-500'
                                }
                            `}>
                                0{index + 1}
                            </div>

                            <div className={`
                                mb-6 
                                ${activeCard === index ? 'text-black' : 'text-gray-400'}
                            `}>
                                {service.icon}
                            </div>

                            <h3 className={`
                                text-xl font-bold mb-4 text-left
                                ${activeCard === index ? 'text-black' : 'text-white'}
                            `}>
                                {service.title}
                            </h3>

                            <div className={`
                                w-12 h-0.5 mb-4
                                ${activeCard === index ? 'bg-black/30' : 'bg-gray-600'}
                            `}></div>

                            <p className={`
                                text-left leading-relaxed
                                ${activeCard === index ? 'text-black/80' : 'text-gray-300'}
                            `}>
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;