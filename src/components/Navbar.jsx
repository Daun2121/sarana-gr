import { useState } from "react";
import "../App.css"; // Pastikan Anda memuat file CSS Anda

const Navbar = () => {
  // State untuk mengelola status checkbox
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi untuk menangani klik pada menu
  const handleMenuToggle = () => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <header
      className="
      top-0 left-0 sticky z-50 w-full 
      px-6 py-1 
      md:px-8
      bg-[#202124] text-[#00B4D8] 
      shadow-md 
      transition-all duration-300 ease-in-out border-b border-gray-300 
      "
    >
      <nav className="mx-auto lg:flex justify-between items-center 2xl:max-w-[1536px] font-monument">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#Home"
            className="
            text-[24px] whitespace-nowrap 
            md:text-[28px]
            lg:text-[24px]
            xl:text-[32px] 
            "
          >
            PT. SARANA GEMA REKAYASA
          </a>

          {/* Menu toggle button */}
          <input className="hidden peer" type="checkbox" />
          <label
            aria-expanded={menuOpen}
            onClick={handleMenuToggle}
            className="w-10 h-10 cursor-pointer flex flex-col items-center justify-center lg:hidden"
          >
            {/* Bar 1 */}
            <div
              className={`
                w-[65%] h-[3px] 
                bg-white rounded-sm 
                translate-y-[0.65rem] 
                transition-all duration-300 origin-left 
                lg:hidden
              ${menuOpen ? "rotate-[-45deg]" : ""}`}
            ></div>
            {/* Bar 2 */}
            <div
              className={`
                w-[65%] h-[3px] 
                bg-white rounded-md 
                transition-all duration-300 origin-center 
                lg:hidden
                ${menuOpen ? "hidden" : ""}`}
            ></div>
            {/* Bar 3 */}
            <div
              className={`
                w-[65%] h-[3px] bg-white rounded-md 
                -translate-y-[0.65rem] transition-all duration-300 origin-left 
                lg:hidden
                ${menuOpen ? "rotate-[45deg]" : ""}`}
            ></div>
          </label>
        </div>

        {/* Menu items */}
        <ul
          className={`${
            menuOpen ? "top-[55px] opacity-100 grid bg-[#202124]" : "hidden"
          } 
          z-[1] p-2 px-2 right-0 w-full absolute 
          text-base whitespace-nowrap
          rounded-b-md 
          gap-3
          transition-all 
          lg:w-auto lg:flex lg:top-0 lg:p-0 
          lg:z-auto lg:static 
          lg:opacity-100 lg:scale-100
          lg:gap-4 
          xl:gap-10 
          `}
        >
          <a href="#Products" className="flex flex-col items-center gap-1">
            Products
          </a>
          <a href="#AboutUs" className="flex flex-col items-center gap-1">
            About Us
          </a>
          <a href="#ContactUs" className="flex flex-col items-center gap-1">
            Contact Us
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
