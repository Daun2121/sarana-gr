const ProductItemsHome = ({src, children}) => {
  return (
    <div className="snap-center bg-[#202124]/25 grid items-center border-2 border-[#202124]/25
    justify-items-center p-2 rounded-md aspect-square">
      <img src={src} alt="" className='object-contain h-56 max-w-48'/>
      <div className="w-full  ">

        <h1 className="bg-[#00B4D8] text-center rounded-md px-3 py-1 mt-1 shadow-[inset_0_0_5px_5px_rgba(0,0,0,0.25)]
        text-[#ededed] font-semibold hover:bg-[#164f5c] hover:text-white whitespace-nowrap">
          {children}
        </h1>
      </div>
    </div>
  )
}

export default ProductItemsHome