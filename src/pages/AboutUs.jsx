import Visi from "../assets/Visi.svg";
import Misi from "../assets/Misi.svg";

const AboutUs = () => {
  return (
    <div
      id="AboutUs"
      className="text-[#ccc] text-center pt-[75px] md:pt-[100px] lg:pt-[150px]"
    >
      {/* About Us */}
      {/* Title & Desc*/}
      <div className="bg-gradient-to-b from-[#202124] to-[#00B4D8]">
        {/* Frame */}
        <div
          className="grid justify-items-center gap-4 mx-auto 
        px-6 md:px-8 2xl:px-0
        2xl:max-w-[1536px]"
        >
          {/* Title */}
          <h1
            className="
            font-monument 
            text-3xl xl:text-4xl
            bg-gradient-to-r from-white to-[#00B4D8] bg-clip-text text-transparent
            "
          >
            About Us
          </h1>
          {/* Desc */}
          <p
            className="text-sm lg:text-base xl:text-lg lg:w-3/4
          bg-gradient-to-r from-white to-[#C8c8c8] bg-clip-text text-transparent
          "
          >
            PT. Sarana Gema Rekayasa adalah perusahaan manufaktur komponen
            hidrolik yang dilengkapi dengan fasilitas mesin CNC modern dan
            peralatan lengkap. Didukung oleh tenaga ahli berpengalaman,
            khususnya di bidang teknik, kami berkomitmen untuk menyelesaikan
            setiap pesanan sesuai dengan kebutuhan pelanggan. Fokus kami adalah
            memberikan produk dan layanan terbaik, sehingga kepuasan pelanggan
            selalu tercapai.
          </p>
        </div>
      </div>
      {/* WAVE */}
      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 40 1440 140"
        fill="none"
      >
        <path
          d="M702.087 114.436C436.738 178.846 123.467 141.273 0 114.436V0H1440V114.436C1304.59 87.5981 967.435 50.0254 702.087 114.436Z"
          fill="#00B4D8"
        />
      </svg>

      {/* Visi & Misi */}
      {/* Frame Visi Misi */}
      <div className="w-full mx-auto mt-5 2xl:max-w-[1536px]">
        {/* Title Visi Misi */}
        <h1 className="text-3xl xl:text-4xl font-monument text-[#00B4D8]">
          Visi Misi
        </h1>
        {/* Pembungkus kotak Visi & Misi*/}
        <div
          className="grid grid-cols-2 
        gap-3 md:gap-7 
        px-6 md:px-8 2xl:px-0 
        mt-6 md:mt-12
        "
        >
          {/* VISI Box*/}
          <div className="grid justify-items-center gap-2 p-5 border border-[#ccc] rounded-[10px]">
            {/* Gambar Visi */}
            <img
              src={Visi}
              className="w-[100px] lg:w-[150px]"
              alt="Visi Images"
            />
            {/* Judul Visi */}
            <h2
              className="font-monument
              text-[18px] md:text-[24px] xl:text-[36px]
              "
            >
              Visi
            </h2>
            {/* Desc Visi */}
            <p className="text-[12px] md:text-[14px] lg:text-base xl:text-[18px] font-light">
              Inovasi mesin dengan teknologi & manajemen modern, berfokus pada
              kualitas, harga kompetitif, dan ketepatan pengiriman.
            </p>
          </div>
          {/* MISI Box*/}
          <div className="grid justify-items-center gap-2 p-5 border border-[#ccc] rounded-[10px]">
            {/* Gambar Misi */}
            <img
              src={Misi}
              className="w-[100px] lg:w-[150px]"
              alt="Misi Images"
            />
            {/* Judul Misi */}
            <h2
              className="font-monument
              text-[18px] md:text-[24px] xl:text-[36px]
              "
            >
              Misi
            </h2>
            {/* Desc Misi */}
            <p className="text-[12px] md:text-[14px] lg:text-base xl:text-[18px] font-light">
              Menjalin kemitraan untuk kesejahteraan dan kesuksesan bersama.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
