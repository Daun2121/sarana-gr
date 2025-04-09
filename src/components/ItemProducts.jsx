import ProductItemsHome from '../components/ProductItemsHome'

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

const ItemProducts = () => {
  return (
    <div id="Products" 
    className="
      h-auto
      flex items-center gap-3 md:gap-5
      px-6 md:px-8 2xl:px-0
      overflow-x-auto snap-x snap-mandatory 
      ">
      {/* items */}
      <ProductItemsHome src={gear_pump}>Gear Pump</ProductItemsHome>
      <ProductItemsHome src={flow}>Flow Control</ProductItemsHome>
      <ProductItemsHome src={h_jack}>Hydraulic Jack</ProductItemsHome>
      <ProductItemsHome src={h_c_valve}>Control Valve</ProductItemsHome>
      <ProductItemsHome src={tracker}>Tracker</ProductItemsHome>
      <ProductItemsHome src={cover}>Cover Hydraulic</ProductItemsHome>
      <ProductItemsHome src={h_c_cap}>Cylinder Cap</ProductItemsHome>
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
  )
}

export default ItemProducts