const ProductItemsHome = ({src, children}) => {
  return (
    <div className="snap-center bg-[#343538] grid items-center 
    justify-items-center p-2 rounded-md aspect-square">
      <img src={src} alt="" className='object-contain h-56 max-w-48'/>
      <h1 className="bg-[#fdc500] text-center rounded-md w-full px-3 py-1 mt-1 
      text-[#202124] font-bold hover:bg-[#957503] whitespace-nowrap">
        {children}
      </h1>
    </div>
  )
}

export default ProductItemsHome