import React from 'react'

const Humberger = ({handleMenuToggle, menuOpen}) => {
  return (
    <div>
      <input className="hidden peer" type="checkbox" />
        <label
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
          className="w-4 h-5 cursor-pointer flex flex-col items-center justify-center lg:hidden gap-1"
        >
          {/* Bar 1 */}
          <div
            className={`
              w-full h-0.5 bg-primary rounded-sm 
              
              transition-all duration-300 origin-left lg:hidden
            ${menuOpen ? "rotate-[45deg]" : ""}`}
          ></div>
          {/* Bar 2 */}
          <div
            className={`
              w-full  h-0.5 bg-primary rounded-md 
              transition-all duration-300 origin-center lg:hidden 
              ${menuOpen ? "hidden" : ""}`}
          ></div>
          {/* Bar 3 */}
          <div
            className={`
              w-full  h-0.5 bg-primary rounded-md 
              transition-all duration-300 origin-left lg:hidden
              ${menuOpen ? "rotate-[-45deg]" : ""}`}
          ></div>
        </label>
    </div>
  )
}

export default Humberger