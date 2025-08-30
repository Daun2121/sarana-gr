import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form_contact_us from "../components/organisems/Form_contact_us";
import Our_headquaters from "../components/organisems/Our_headquaters";
const ContactSection = () => {
    
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
                        <Form_contact_us />
                    </div>

                    <div className="lg:w-1/2">
                        <Our_headquaters />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default ContactSection;
