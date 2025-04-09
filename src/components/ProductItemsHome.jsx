const ProductItemsHome = ({ src, children }) => {
  return (
    <div
      className="
      p-2 
      grid place-content-center justify-items-center
      bg-[#202124]/25 
      border-2 border-[#202124]/25
      snap-center 
      rounded-md 
      w-40 md:w-[200px]
      aspect-[3/4]"
    >
      {/* Image */}
      <img
        src={src}
        alt={children}
        className="object-contain 
        h-40 md:h-60
        max-w-32 md:max-w-48
      "
      />
      {/* Frame Button */}
      <div className="w-full">
        {/* Button Name */}
        <h1
          className="
          px-3 py-1 mt-1 
          text-center text-[#ededed] font-semibold bg-[#00B4D8] 
          rounded-md 
          shadow-[inset_0_0_5px_5px_rgba(0,0,0,0.25)]
          whitespace-nowrap
          "
        >
          {children}
        </h1>
      </div>
    </div>
  );
};

export default ProductItemsHome;
