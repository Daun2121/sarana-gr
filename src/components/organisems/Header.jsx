import { useState, useEffect } from "react";

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
                    <div className="text-[#00B4D8] font-bold text-lg mr-8">
                        Sarana Gema Rekayasa
                    </div>
                </div>

                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                <nav
                    className={`${
                        mobileMenuOpen ? "block" : "hidden"
                    } md:block absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#202124] md:bg-transparent`}
                >
                    <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 p-4 md:p-0">
                        <li>
                            <a
                                href="#home"
                                onClick={() => scrollToSection("home")}
                                className="text-white hover:text-[#00B4D8] transition"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#services"
                                onClick={() => scrollToSection("services")}
                                className="text-white hover:text-[#00B4D8] transition"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                onClick={() => scrollToSection("about")}
                                className="text-white hover:text-[#00B4D8] transition"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={() => scrollToSection("contact")}
                                className="text-white hover:text-[#00B4D8] transition"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
