import { useState } from 'react';
import '../App.css'; // Pastikan Anda memuat file CSS Anda

const Navbar = () => {
  // State untuk mengelola status checkbox
  const [menuOpen, setMenuOpen] = useState(false);

  // Fungsi untuk menangani klik pada menu
  const handleMenuToggle = () => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
    console.log(menuOpen)
  };


  return (
    <header className="top-0 left-0 sticky z-50 w-full px-12 py-4 bg-[#202124] text-[#FDC500] shadow-md transition-all duration-300 ease-in-out">
      <nav className="mx-auto lg:flex justify-between items-center 2xl:max-w-[1536px] font-monument">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href='/' className="text-[40px]"><p>PT. SARANA GEMA REKAYASA</p></a>

          {/* Menu toggle button */}
          <input className="hidden peer" type="checkbox"/>
          <label aria-expanded={menuOpen} onClick={handleMenuToggle} 
          className='w-10 h-9 cursor-pointer flex flex-col items-center justify-center lg:hidden'>
            <div className={`w-[65%] h-[3px] translate-y-[0.65rem] bg-white rounded-sm transition-all duration-300 origin-left lg:hidden
            ${menuOpen ? 'rotate-[-45deg]' : ''}`}></div>
            <div className={`w-[65%] h-[3px] bg-white rounded-md transition-all duration-300 origin-center lg:hidden
            ${menuOpen ? 'hidden' : ''}`}></div>
            <div className={`w-[65%] h-[3px] -translate-y-[0.65rem] bg-white rounded-md transition-all duration-300 origin-left lg:hidden
            ${menuOpen ? 'rotate-[45deg]' : ''}`}></div>
          </label>
        </div>

        {/* Menu items */}
        <ul className={`${menuOpen ? 'top-[60px] opacity-100 grid bg-[#202124]' : 'hidden'} 
        right-0 w-full text-base gap-3 z-[1] p-2 px-2 absolute rounded-b-md transition-all 
        lg:w-auto lg:flex lg:gap-10 lg:z-auto lg:static lg:p-0 lg:opacity-100 lg:top-0 lg:scale-100`}>
          <a href='/Products' className="flex flex-col items-center gap-1"><p>Products</p></a>
          <a href='/AboutUs' className="flex flex-col items-center gap-1"><p>About Us</p></a>
          <a href='/AboutUs' className="flex flex-col items-center gap-1"><p>Contact Us</p></a>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
