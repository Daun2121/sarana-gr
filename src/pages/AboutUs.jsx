import Visi from '../assets/Visi.svg'
import Misi from '../assets/Misi.svg'

const AboutUs = () => {
  return (
    <div 
      id="AboutUs"
      className="text-white text-center pt-[175px]">
      {/* About Us */}
      {/* Title & Desc*/}
      <div className='bg-gradient-to-b from-[#202124] to-[#00B4D8]'>
        {/* Frame */}
        <div className="grid justify-center gap-4 w-full mx-auto 2xl:max-w-[1536px]">
          {/* Title */}
          <h1 className="text-4xl font-monument bg-gradient-to-r from-white to-[#00B4D8] bg-clip-text text-transparent">
            About Us
          </h1>
          {/* Desc */}
          <p className="text-lg w-[1120px]">PT. Sarana Gema Rekayasa adalah perusahaan manufaktur komponen hidrolik yang 
            dilengkapi dengan fasilitas mesin CNC modern dan peralatan lengkap. Didukung oleh tenaga ahli berpengalaman, 
            khususnya di bidang teknik, kami berkomitmen untuk menyelesaikan setiap pesanan sesuai dengan kebutuhan pelanggan. 
            Fokus kami adalah memberikan produk dan layanan terbaik, sehingga kepuasan pelanggan selalu tercapai.
          </p>
        </div>
      </div>
      {/* WAVE */}
      <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 40 1440 140" fill="none">
        <path d="M702.087 114.436C436.738 178.846 123.467 141.273 0 114.436V0H1440V114.436C1304.59 87.5981 967.435 50.0254 702.087 114.436Z" fill="#00B4D8"/>
      </svg>

      {/* Visi & Misi */}
      {/* Frame Visi Misi */}
      <div className='w-full mx-auto mt-5 2xl:max-w-[1536px]'>
        <h1 className="text-4xl font-monument text-[#00B4D8]">Visi Misi</h1>
        {/* Pembungkus kotak Visi & Misi*/}
        <div className="grid grid-cols-2 px-12 2xl:px-0 gap-10 mt-12">
          {/* VISI */}
          <div className="grid justify-items-center gap-2 p-5 border border-[#ccc] rounded-[10px]">
            {/* Gambar Visi */}
            <img src={Visi} className='w-[100px]' alt="Visi Images"/>
            <h2 className="text-[24px] font-monument">Visi</h2>
            <p className="text-base font-light">Inovasi mesin dengan teknologi & manajemen modern, berfokus pada kualitas, harga kompetitif, dan ketepatan pengiriman.</p>
          </div>
          {/* MISI */}
          <div className="grid justify-items-center gap-2 p-5 border border-[#ccc] rounded-[10px]">
            {/* Gambar Misi */}
            <img src={Misi} className='w-[100px]' alt="Misi Images"/>
            <h2 className="text-[24px] font-monument">Misi</h2>
            <p className="text-base font-light">Menjalin kemitraan untuk kesejahteraan dan kesuksesan bersama.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs