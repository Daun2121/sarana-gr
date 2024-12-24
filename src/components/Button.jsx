import React from 'react'

const Button = ({children, data_name="", cl =""}) => {
  return (
    <button data-name={data_name}
    className={`p-3 font-semibold rounded-md
    bg-[#fdc500] shadow-inner shadow-[#947403] ${cl}`}>
      {children}
    </button>
  )
}

export default Button