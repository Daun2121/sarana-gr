import { NavLink } from "react-router-dom";
import ProductItemsHome  from './ProductItemsHome'

// images
import gear_pump from '../assets/images/products/gear_pump.png'
import flow from '../assets/images/products/flow_control_hydraulic.png'
import h_jack from '../assets/images/products/hydraulic_jack.png'
import h_c_valve from '../assets/images/products/hydraulic_control_valve.png'
import h_c_cap from '../assets/images/products/hydraulic_cylinder_cap_20.50.100_ton.png'
import tracker from '../assets/images/products/tracker_3_kaki_10per20_ton.png'
import cover from '../assets/images/products/cover_hydraulic.png'
import pressure from '../assets/images/products/pressure_gauge.png'
import bubut_1 from '../assets/images/products/bubut_1.png'
import bubut_2 from '../assets/images/products/bubut_2.png'
import clevis from '../assets/images/products/clevis.png'
// import ProductList from '../assets/products.json'

const ProductHome = () => {
  return (
    // <div className="mt-10 2xl:max-w-[1536px] mx-auto w-full">
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 280"><path fill="#957503" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,128C640,171,800,245,960,234.7C1120,224,1280,128,1360,80L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      {/* BG */}
      <div className="bg-gradient-to-b from-[#957503] via-[#202124] to-[#202124] ">
        {/* Frame */}
        <div className="w-full mx-auto 2xl:max-w-[1536px]">
          {/* Title & Desc */}
          <div className="px-5 pb-5 text-white">
            <NavLink to="/Products" className="text-[40px] font-bold hover:text-[#202124]">
              <h1 className="inline">Products</h1>
            </NavLink>
            <p className="w-full lg:w-1/2 mt-3 text-base">Temukan berbagai produk hidrolik dan pneumatik berkualitas tinggi yang dirancang untuk memenuhi kebutuhan industri Anda.</p>
          </div>
          {/* Product list */}
            
          <div id="Products" className="flex px-5 gap-5 h-auto items-center overflow-x-auto snap-x snap-mandatory ">
            {/* items */}
            <ProductItemsHome src={gear_pump}>Gear Pump</ProductItemsHome>
            <ProductItemsHome src={flow}>Flow Control Hydraulic</ProductItemsHome>
            <ProductItemsHome src={h_jack}>Hydraulic Jack</ProductItemsHome>
            <ProductItemsHome src={h_c_valve}>Hydraulic Control Valve</ProductItemsHome>
            <ProductItemsHome src={tracker}>Tracker</ProductItemsHome>
            <ProductItemsHome src={cover}>Cover Hydraulic</ProductItemsHome>
            <ProductItemsHome src={h_c_cap}>Hydraulic Cylinder Cap</ProductItemsHome>
            <ProductItemsHome src={pressure}>Pressure Gauge</ProductItemsHome>
            <ProductItemsHome src={bubut_1}>Gear Pump</ProductItemsHome>
            <ProductItemsHome src={bubut_2}>Gear Pump</ProductItemsHome>
            <ProductItemsHome src={clevis}>Clevis</ProductItemsHome>
            
            {/* {ProductList && ProductList.map(product => {
              return (
              <div key={product.id} className="snap-center rounded-md 
              bg-[#081923] h-96 grid items-center p-2 relative overflow-hidden">
                <img src={product.fileName} alt="" className='object-cover size-full mx-auto'/>
                <div className="bg-[#ffd500] text-center py-1">
                  <h1 className="text-[#202124] font-bold">{product.name}</h1>
                </div>
              </div>
              )
            })} */}

          </div>
          
        </div>
      </div>
    </>
  )
}

export default ProductHome