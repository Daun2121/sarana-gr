import { useState, useEffect } from "react";
import Nav_item from "../atoms/Nav_item";
import Hum_icon from "../atoms/Hum_icon";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };
    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-[#202124] shadow-lg py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center">
                    <a
                        href="#home"
                        className="text-[#00B4D8] font-bold text-lg mr-8"
                    >
                        Sarana Gema Rekayasa
                    </a>
                </div>

                <button
                    className="md:hidden text-white focus:outline-hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Hum_icon />
                </button>

                <nav
                    className={`${mobileMenuOpen ? "block" : "hidden"} 
                    ${
                        scrolled
                            ? "top-11 bg-[#202124]"
                            : "top-14 bg-linear-to-r from-[#202124] to-gray-800 md:bg-none md:bg-transparent shadow md:shadow-none"
                    } 
                    md:block absolute md:relative md:top-0 left-0 w-full md:w-auto transition-all duration-100`}
                >
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 p-4 md:p-0">
                        <Nav_item
                            to="#home"
                            name="Home"
                            setMMO={scrollToSection}
                        />
                        <Nav_item
                            to="#services"
                            name="Services"
                            setMMO={scrollToSection}
                        />
                        <Nav_item
                            to="#about"
                            name="About Us"
                            setMMO={scrollToSection}
                        />
                        <Nav_item
                            to="#contact"
                            name="Contact"
                            setMMO={scrollToSection}
                        />
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
