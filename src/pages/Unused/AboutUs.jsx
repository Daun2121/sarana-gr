import React from 'react'
import Visi from '../assets/images/elements/Visi.svg'
import Misi from '../assets/images/elements/Misi.svg'
const AboutUs = () => {
  return (
    <div>
      <div className='pb-20 grid gap-5
      bg-gradient-to-r from-[#02132e] to-[#194561]'>
        <span className='justify-self-center text-[120px] pt-20
        bg-gradient-to-b from-[#c7e6fd] to-[#1A4561] bg-clip-text text-transparent'
        >About Us</span>
        <p className='text-center text-xl text-gray-300 justify-self-center w-1/2'>
          PT. Sarana Gema Rekayasa adalah perusahaan manufaktur komponen hidrolik yang 
          dilengkapi dengan fasilitas mesin CNC modern dan peralatan lengkap. 
          Didukung oleh tenaga ahli berpengalaman, khususnya di bidang teknik, 
          kami berkomitmen untuk menyelesaikan setiap pesanan sesuai dengan kebutuhan 
          pelanggan. Fokus kami adalah memberikan produk dan layanan terbaik, sehingga 
          kepuasan pelanggan selalu tercapai.</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 260" className="-z-10" style={{ transform: "rotate(180deg)" }}>
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#194561" /> 
            <stop offset="100%" stopColor="#02132e" /> 
          </linearGradient>
        </defs>
        <path
          fill="url(#myGradient)"
          fillOpacity="1"
          d="M0,288L40,266.7C80,245,160,203,240,186.7C320,171,400,181,480,197.3C560,213,640,235,720,256C800,277,880,299,960,261.3C1040,224,1120,128,1200,90.7C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>

      <div className='grid w-full mx-auto 2xl:max-w-[1536px]'>
        <span className='justify-self-center text-[120px] font-semibold
          bg-gradient-to-b from-[#063D94] to-[#02132e] bg-clip-text text-transparent'
        >Visi Misi</span>
        <div className='grid grid-cols-2 text-center place-items-center'>
          <div className='grid place-content-center px-20'>
            <h1 className='text-[70px] font-semibold text-[#2258b2]'>Visi</h1>
            <p className='text-[#02132e] text-xl'>Mengembangkan industri permesinan dengan teknologi dan menejemen manufaktur modern 
              sehingga menghasilkan produk yang berkualitas tinggi, harga yang kompetitif, 
              dan ketepatan waktu pengiriman.</p>
          </div>
          {/* images Visi */}
          <img src={Visi} alt="" />
          {/* images Misi */}
          <img src={Misi} alt="" />
          <div className='grid place-content-center px-20'>
            <h1 className='text-[70px] font-semibold text-[#2da1ea]'>Misi</h1>
            <p className='text-[#02132e] text-xl'>Menjalin kemitraan untuk kesejahteraan dan kesuksesan bersama.</p>
          </div>
        </div>
      </div>

      


      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 60 1440 260" className="z-50">
        <path fill="#142a4d" fillOpacity="1" d="M0,288L40,266.7C80,245,160,203,240,186.7C320,171,400,181,480,197.3C560,213,640,235,720,256C800,277,880,299,960,261.3C1040,224,1120,128,1200,90.7C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
      </svg>
    </div>
  )
}

export default AboutUs