// import React from 'react'
import ProductList from '../assets/products.json'

const Box = ({urlImg, data_name}) => {
  // console.log(urlImg, data_name);
  return (
    <a className="group rounded-lg">
      <span className="">
        {data_name}
      </span>
      <img src={urlImg} alt="" />
    </a>

    // <a className='relative inline-block group rounded-lg overflow-hidden'>
    //   <span className='absolute inset-0 z-10 flex items-center justify-center text-center text-xl font-semibold text-white bg-black bg-opacity-25 opacity-0 hover:opacity-100 transition'
    //   >{data_name}</span>
    //   <img src={`../assets/images/products/${urlImg}`} alt="" 
    //   className='object-cover transition group-hover:scale-105'/>
    // </a>
  )
}

export default Box