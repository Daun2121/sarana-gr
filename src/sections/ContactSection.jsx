import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    //  Variabel utk template email
    const templateParams = {
        from_name: formData.name,
        from_phoneNum: formData.phone,
        from_email: formData.email,
        to_name: "Sarana Gema Rekayasa",
        message: formData.message,
    };

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend

        // EmailJS service ID, template ID, and Public Key
        const serviceId = "service_vxig6df";
        const templateId = "template_tnahzz3";
        const publicKey = "55vSfEafeh6IkONm7";

        console.log("Form submitted:", formData);
        setIsSubmitted(true);
        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
        setTimeout(() => setIsSubmitted(false), 5000);

        // Kirim email with EmailJS
        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log("Berhasil masku", response);
                toast.success("Message sent successfully", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000, // Durasi toast (dalam milidetik)
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                });
            })
            .catch((error) => {
                console.log("Ada error nih:", error);

                toast.error("Failed to send email, please try again", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#202124] mb-4">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Get in touch with our team for hydraulic spare part
                        solutions tailored to your needs.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-1/2">
                        <form
                            onSubmit={handleSubmit}
                            className="bg-gray-50 p-8 rounded-lg shadow-sm"
                        >
                            <div className="mb-6">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 mb-2"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 mb-2"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="phone"
                                    className="block text-gray-700 mb-2"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                                    placeholder="+628 (123) 456-7890"
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 mb-2"
                                >
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
                                    placeholder="Tell us about your hydraulic requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#00B4D8] hover:bg-[#0096C7] text-white py-3 rounded-md font-medium transition"
                            >
                                Submit Inquiry
                            </button>

                            {isSubmitted && (
                                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
                                    Thank you! Your message has been sent.
                                    We&aposll contact you soon.
                                </div>
                            )}
                        </form>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-gray-50 p-8 rounded-lg shadow-sm h-full">
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
                                        Pergudangan Lio Baru Kav. 33 Blok AA1,
                                        Jl. BouroqLio Baru, Batusari Batuceper
                                        Tangerang Banten.
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
                                    <span className="text-gray-600">
                                        0877-7854-9587
                                    </span>
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
                                    <span className="text-gray-600">
                                        spresisi@yahoo.com
                                    </span>
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
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ContactSection;
