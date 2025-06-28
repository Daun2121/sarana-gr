import { useState } from "react";
const ProductSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const products = [
        {
            id: 1,
            name: "High-Pressure Hydraulic Cylinders",
            description:
                "Designed for extreme conditions with up to 3000 PSI operating pressure.",
            image: "https://placehold.co/400x300",
        },
        {
            id: 2,
            name: "Precision Hydraulic Pumps",
            description:
                "Energy-efficient pumps with variable displacement for optimal performance.",
            image: "https://placehold.co/400x300",
        },
        {
            id: 3,
            name: "Hydraulic Valves & Controls",
            description:
                "Customizable electro-hydraulic controls for precision applications.",
            image: "https://placehold.co/400x300",
        },
        {
            id: 4,
            name: "Hydraulic Power Units",
            description:
                "Compact and powerful units for mobile and stationary applications.",
            image: "https://placehold.co/400x300",
        },
        {
            id: 5,
            name: "Hydraulic Filtration Systems",
            description:
                "Advanced filtration solutions to extend fluid and component life.",
            image: "https://placehold.co/400x300",
        },
        {
            id: 6,
            name: "Custom Hydraulic Solutions",
            description:
                "Bespoke designs tailored to your specific operational requirements.",
            image: "https://placehold.co/400x300",
        },
    ];
    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === products.length - 3 ? 0 : prev + 1
        );
    };
    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? products.length - 3 : prev - 1
        );
    }

        return (
            <section id="products" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#202124] mb-4">
                            Our Products
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Innovative hydraulic solutions engineered for
                            durability and peak performance in challenging
                            industrial environments.
                        </p>
                    </div>

                    <div className="relative overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentSlide * 33.33
                                }%)`,
                            }}
                        >
                            {products.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="product-card px-4 w-full sm:w-1/2 lg:w-1/3"
                                >
                                    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-full">
                                        <img
                                            src={product.image}
                                            alt={`${product.name} - ${product.description}`}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-[#202124] mb-2">
                                                {product.name}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {product.description}
                                            </p>
                                            {/* <button className="text-[#00B4D8] hover:text-[#0096C7] font-medium transition">
                                                Learn More →
                                            </button> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

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
                    </div>

                    <div className="flex justify-center mt-8">
                        {products
                            .slice(0, products.length - 2)
                            .map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full mx-1 ${
                                        currentSlide === index
                                            ? "bg-[#00B4D8]"
                                            : "bg-gray-300"
                                    }`}
                                />
                            ))}
                    </div>
                </div>
            </section>
        );
    };


export default ProductSection;
