import Visi from '../assets/Visi.svg'
import Misi from '../assets/Misi.svg'

const AboutUs = () => {
  return (
    <div className="text-[#ccc] text-center w-full mx-auto 2xl:max-w-[1536px]">
      {/* About Us */}
      <div className="grid justify-center bg-gradient-to-b from-[#202124] to-[#6D590E]">
        <h1 className="text-[40px] font-monument bg-gradient-to-r from-white via-[#D6A600] to-[#D6A600] bg-clip-text text-transparent">About Us</h1>
        <p className="text-base font-light w-[700px]">PT. Sarana Gema Rekayasa adalah perusahaan manufaktur komponen hidrolik yang 
          dilengkapi dengan fasilitas mesin CNC modern dan peralatan lengkap. Didukung oleh tenaga ahli berpengalaman, 
          khususnya di bidang teknik, kami berkomitmen untuk menyelesaikan setiap pesanan sesuai dengan kebutuhan pelanggan. 
          Fokus kami adalah memberikan produk dan layanan terbaik, sehingga kepuasan pelanggan selalu tercapai.
        </p>
      </div>
      {/* WAVE */}
      <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 75 1440 80" fill="none">
        <path d="M702.087 114.436C436.738 178.846 123.467 141.273 0 114.436V0H1440V114.436C1304.59 87.5981 967.435 50.0254 702.087 114.436Z" fill="#6D590E"/>
      </svg>

      {/* Visi & Misi */}
      <h1 className="text-[40px] font-monument text-[#FDC500]">Visi Misi</h1>
      {/* Frame */}
      <div className="grid grid-cols-2 px-12 2xl:px-0 gap-10 my-10">
        {/* VISI */}
        <div className="grid justify-items-center gap-2 p-5 border border-[#ccc] rounded-[10px]">
          {/* Gambar Visi */}
          <img src={Visi} className='w-[100px]' alt="Visi Images"/>
          <h2 className="text-[24px] font-monument">Visi</h2>
          <p className="text-base font-light">Mengembangkan industri permesinan dengan teknologi dan 
            menejemen manufaktur modern sehingga menghasilkan produk yang berkualitas tinggi, 
            harga yang kompetitif, dan ketepatan waktu pengiriman.
          </p>
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
  )
}

export default AboutUs