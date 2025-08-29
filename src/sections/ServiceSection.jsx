import { useState, useEffect } from "react";
// import Products from "../products.json";
import Services from "../services.json";
import Card_services from "../components/molecules/Card_services";
const ServiceSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);

    const checkScreenSize = () => {
        setIsMobileView(window.innerWidth <= 1024);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === Services.length - 1 ? 0 : prev + 1
        );
    };
    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? Services.length - 1 : prev - 1
        );
    };

    return (
        <section id="services" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#202124] mb-4">
                        Our Services
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Innovative hydraulic solutions engineered for durability
                        and peak performance in challenging industrial
                        environments.
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * 50}%)`,
                        }}
                    >
                        {Services.map((service) => (
                            <Card_services
                                key={service.id}
                                image={service.image}
                                name={service.name}
                                desc={service.description}
                            />
                        ))}
                    </div>
                    {isMobileView && (
                        <>
                            {/* Prev */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10 ml-2"
                            >
                                <svg
                                    className="w-6 h-6 text-[#202124]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            {/* Next */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10 mr-2"
                            >
                                <svg
                                    className="w-6 h-6 text-[#202124]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </>
                    )}
                </div>
                {isMobileView && (
                    <>
                        <div className="flex justify-center mt-8">
                            {Services.slice(0, Services.length).map(
                                (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full mx-1 ${
                                            currentSlide === index
                                                ? "bg-[#00B4D8]"
                                                : "bg-gray-300"
                                        }`}
                                    />
                                )
                            )}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default ServiceSection;
