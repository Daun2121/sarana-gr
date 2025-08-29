const Card_services = ({ key, image, name, desc }) => {
    return (
        <div key={key} className="service-card px-4 w-full md:w-[45%] lg:w-1/3">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition h-full">
                <img
                    src={image}
                    alt={`${name} - ${desc}`}
                    className="w-full h-48 object-cover"
                />
                <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#202124] mb-2">
                        {name}
                    </h3>
                    <p className="text-gray-600 mb-4">{desc}</p>
                    {/* <button className="text-[#00B4D8] hover:text-[#0096C7] font-medium transition">
                        Learn More →
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default Card_services;
