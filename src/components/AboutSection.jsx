const AboutSection = () => {
    return (
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                        <img
                            src="https://placehold.co/600x400"
                            alt="HydroTech manufacturing facility with state-of-the-art machinery and skilled technicians"
                            className="rounded-lg shadow-lg object-cover w-full h-auto"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-[#202124] mb-4">
                            About Sarana Gema Rekayasa
                        </h2>
                        <p className="text-gray-600 mb-6">
                            [Cari sejarah nya]Founded in 1995, HydroTech has been at the forefront
                            of hydraulic innovation, delivering
                            precision-engineered components to industries
                            ranging from heavy machinery to aerospace.
                        </p>
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-[#202124] mb-3">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 mb-4">
                                [Bikin dari visi misi missionnya]To provide reliable, high-performance hydraulic
                                solutions that drive industrial productivity
                                while maintaining the highest standards of
                                quality and safety.
                            </p>
                        </div>
                        {/* <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-[#00B4D8] font-bold text-2xl mb-2">
                                    25+
                                </div>
                                <div className="text-gray-600">
                                    Years in Business
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-[#00B4D8] font-bold text-2xl mb-2">
                                    500+
                                </div>
                                <div className="text-gray-600">
                                    Global Clients
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-[#00B4D8] font-bold text-2xl mb-2">
                                    10M+
                                </div>
                                <div className="text-gray-600">
                                    Components Manufactured
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <div className="text-[#00B4D8] font-bold text-2xl mb-2">
                                    ISO
                                </div>
                                <div className="text-gray-600">
                                    9001 Certified
                                </div>
                            </div>
                        </div>
                        <button className="bg-[#00B4D8] hover:bg-[#0096C7] text-white px-6 py-3 rounded-md font-medium transition">
                            Read Our Story
                        </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
