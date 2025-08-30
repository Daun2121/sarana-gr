import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form_contact_us = () => {
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
        <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-lg shadow-xs"
        >
            <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B4D8]"
                    placeholder="Your name"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B4D8]"
                    placeholder="your.email@example.com"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B4D8]"
                    placeholder="+628 (123) 456-7890"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#00B4D8]"
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
                    Thank you! Your message has been sent. We&aposll contact you
                    soon.
                </div>
            )}
        </form>
    );
};

export default Form_contact_us;
