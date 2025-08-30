const Our_headquaters = () => {
    return (
        <div className="bg-gray-50 p-8 rounded-lg shadow-xs h-full">
            <h3 className="text-xl font-semibold text-[#202124] mb-6">
                Our Headquarters
            </h3>

            <div className="mb-6">
                <div className="flex items-center mb-2">
                    <svg
                        className="w-5 h-5 text-[#00B4D8] mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                    </svg>
                    <span className="text-gray-600">
                        Pergudangan Lio Baru Kav. 33 Blok AA1, Jl. BouroqLio
                        Baru, Batusari Batuceper Tangerang Banten.
                    </span>
                </div>

                <a
                    href="wa.me/6287778549587"
                    className="flex items-center mb-2 w-fit"
                >
                    <svg
                        className="w-5 h-5 text-[#00B4D8] mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                    </svg>
                    <span className="text-gray-600">0877-7854-9587</span>
                </a>

                <a
                    href="mailto:spresisi@yahoo.com"
                    className="flex items-center"
                >
                    <svg
                        className="w-5 h-5 text-[#00B4D8] mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                    </svg>
                    <span className="text-gray-600">spresisi@yahoo.com</span>
                </a>
            </div>

            <div className="map-container">
                <iframe
                    className="map-iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7662893381735!2d106.65208507570073!3d-6.162046793825158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8c02a1d1bfb%3A0xde7f204aa172bd75!2sPT.%20SHIBA%20HIDROLIK%20PRATAMA!5e0!3m2!1sen!2sid!4v1756379689992!5m2!1sen!2sid"
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map of HydroTech Headquarters"
                ></iframe>
            </div>

            <div className="mt-6">
                <h4 className="text-lg font-semibold text-[#202124] mb-3">
                    Business Hours
                </h4>
                <div className="flex justify-between text-gray-600 mb-1">
                    <span>Monday-Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Sunday</span>
                    <span>Closed</span>
                </div>
            </div>
        </div>
    );
};

export default Our_headquaters;
