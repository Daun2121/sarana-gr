import {useState, useEffect } from 'react'
import Button from '../../components/Button'
import Box from '../../components/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import ProductList from '../../assets/products.json'


const Products = () => {
  return (
    <>
    <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#343538_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className='grid bg-gradient-to-r from-[#957503] via-[#2E2B20] to-[#202124]'>
        <span className='justify-self-center text-[120px] pt-20 font-semibold
        bg-gradient-to-r from-[#ccc] to-[#6C570E] bg-clip-text text-transparent'
        >Our Product</span>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 160 1440 130" className="-z-10" style={{ transform: "rotate(180deg)" }}>
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#202124" /> 
            <stop offset="50%" stopColor="#2E2B20" /> 
            <stop offset="100%" stopColor="#957503" /> 
          </linearGradient>
        </defs>
        <path
          fill="url(#myGradient)"
          fillOpacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,250.7C640,256,800,224,960,224C1120,224,1280,256,1360,272L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <div className='grid w-full mx-auto 2xl:max-w-[1536px] px-5'>
        {/* Filter */}
        <div className='flex justify-between text-[#202124]'>
          <ul className='flex gap-4'>
            <Button data_name="latheMachining">Lathe & Machining</Button>
            <Button data_name="powerPack">Power Pack</Button>
            <Button data_name="HPU">HPU</Button>
            <Button data_name="accessories">Accessories</Button>
          </ul>
          <a href="../assets/catalog SGR.pdf" download> 
            <Button cl=" flex items-center gap-2">
              <FontAwesomeIcon icon={faFileLines} className='text-2xl'/>
              Catalog
            </Button>
          </a>
        </div>

        {/* Show Products */}
        <div className='py-5 md:py-10 mx-auto columns-2 gap-5 sm:columns-3 lg:columns-4 xl:columns-5 
        lg:gap-8 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8'>
          {
            ProductList && ProductList.map(product => {
              return (
                <a key={product.id} className="relative inline-block group rounded-lg 
                overflow-hidden bg-[#343538] mt-5">
                  <span className="absolute inset-0 z-10 flex items-center justify-center 
                  text-center text-xl font-semibold text-white bg-black 
                  bg-opacity-25 opacity-0 group-hover:opacity-100">
                    {product.name}
                  </span>
                  <img src={product.fileName} alt="" 
                  className='object-cover transition group-hover:scale-105'/>
                </a>
              )
            })
          }

        </div>

      </div>
    </>
  )
}

export default Products