import ItemProducts from "../components/ItemProducts"

const ProductHome = () => {
  return (
    // BG for Wave
    <div 
      id="Products"
      className='bg-white'>
      {/* Wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 210">
        <path fill="#00B4D8" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,
        128C640,171,800,245,960,234.7C1120,224,1280,128,1360,80L1440,32L1440,
        320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
      {/* BG */}
      <div className="bg-gradient-to-b from-[#00B4D8] to-[#202124]">
        {/* Frame */}
        <div className="w-full mx-auto 2xl:max-w-[1536px]">
          {/* Title & Desc */}
          <div className="
            px-6 pb-5 text-white
            md:px-8
            2xl:px-0 
            ">
            {/* Title */}
            <h1 className="font-monument
              text-3xl xl:text-4xl
              ">
              Products
            </h1>
            {/* Desc */}
            <p className="
              mt-3 font-light
              w-full lg:w-2/3
              text-sm lg:text-base xl:text-lg
              ">
              Temukan berbagai produk hidrolik dan pneumatik berkualitas tinggi yang dirancang untuk memenuhi kebutuhan industri Anda.
            </p>
          </div>
          {/* Product list */}
          <ItemProducts/> 
        </div>
      </div>
    </div>
  )
}

export default ProductHome