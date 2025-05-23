export const Service = () => {
    return (
        <div
            id="service"
            className="relative flex flex-col items-center justify-center overflow-hidden bg-[#131313] py-20"
        >
            <div className="relative z-10 text-center px-6 max-w-4xl">
                <h3 className="text-sm uppercase tracking-widest text-gray-200 mb-2">Services</h3>
                <h1 className="mt-4 text-4xl text-white font-bold">
                    What <span className="text-teal-300">I do</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {[
                        {
                            title: "Full Stack Development",
                            desc: "Crafting scalable web applications with Angular, Node.js, and RESTful APIs using clean architecture and micro frontend design.",
                        },
                        {
                            title: "State Management & Optimization",
                            desc: "Implementing NgRx and Redux patterns to handle complex workflows, enhance performance, and improve app scalability.",
                        },
                        {
                            title: "CMS & SEO Integration",
                            desc: "Integrating headless CMS platforms (like Kontent AI) and applying SEO strategies to boost online visibility and content flexibility.",
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#262626] p-6 rounded-lg border border-teal-200 shadow-lg hover:border-teal-400 hover:shadow-teal-500/30 transition-all duration-300 cursor-pointer"
                        >
                            <h3 className="text-xl font-semibold text-teal-400">{service.title}</h3>
                            <p className="mt-4 text-gray-300">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
