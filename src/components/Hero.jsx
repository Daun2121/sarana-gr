import { NavLink } from "react-router-dom";
import cylinder from '../assets/images/cylinder.png';

const Hero = () => {
  return (
    <div className="mx-auto w-full pt-28 px-5 gap-10 2xl:max-w-[1536px] relative flex justify-end items-center">
      <div className="grid lg:grid-cols-2">
        <img src={cylinder} alt="" className='w-full z-10 
        lg:order-last lg:relative'/>
        <div className="self-center">
          <h1 className="text-6xl font-bold">Tertarik dengan produk berkualitas dari kami?</h1>
          <p className="text-2xl my-4">Tim kami siap membantu anda menemukan solusi terbaik untuk kebutuhan anda. <br />Jangan ragu untuk menghubungi kami</p>
          <NavLink to='/ContactUs' className="font-bold text-3xl hover:text-[#fdc500]">
            <p className="inline">Contact Us</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Hero