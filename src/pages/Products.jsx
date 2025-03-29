import ItemProducts from "../components/ItemProducts"

const ProductHome = () => {
  return (
    // <div className="mt-10 2xl:max-w-[1536px] mx-auto w-full">
    // BG
    <div className='bg-white'>
      {/* Wave */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 280">
        <path fill="#957503" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,
        128C640,171,800,245,960,234.7C1120,224,1280,128,1360,80L1440,32L1440,
        320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
        </path>
      </svg>
      {/* BG */}
      <div className="bg-gradient-to-b from-[#957503] via-[#202124] to-[#202124] ">
        {/* Frame */}
        <div className="w-full mx-auto 2xl:max-w-[1536px]">
          {/* Title & Desc */}
          <div className="px-[50px] pb-5 text-white">
            <h1 className="text-[40px] font-monument">Products</h1>
            <p className="w-full lg:w-1/2 mt-3 text-base font-light">Temukan berbagai produk hidrolik dan pneumatik berkualitas tinggi yang dirancang untuk memenuhi kebutuhan industri Anda.</p>
          </div>
          {/* Product list */}
          <ItemProducts/> 
        </div>
      </div>
    </div>
  )
}

export default ProductHome