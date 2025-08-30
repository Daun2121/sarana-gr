import hero from "../assets/images/hero.webp";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="pt-24 pb-16 md:pt-32 md:pb-24 bg-linear-to-r from-[#202124] to-gray-800 text-white"
        >
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 animate-fadeIn">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                        Fast & Reliable Hydraulic Spare Parts Solutions
                    </h1>
                    <p className="text-lg mb-8 text-gray-300">
                        Sarana Gema Rekayasa delivers hydraulic spare parts and repair services with exceptional speed without compromising on quality. Trust our experienced team to handle your needs with precision and professionalism.
                    </p>
                    <div className="flex space-x-4">
                        <button
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                            className="bg-[#00B4D8] hover:bg-[#0096C7] text-white px-6 py-3 rounded-md font-medium transition"
                        >
                            Contact Our Experts
                        </button>
                        <button
                            onClick={() =>
                                document
                                    .getElementById("services")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                            className="border border-white hover:bg-white hover:text-[#202124] text-white px-6 py-3 rounded-md font-medium transition"
                        >
                            View Services
                        </button>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={hero}
                        alt="Industrial facility showcasing hydraulic machinery and components with workers in safety gear inspecting equipment"
                        className="rounded-lg object-cover w-full h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
