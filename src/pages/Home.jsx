import product from "../assets/Sparepart.svg";
const Home = () => {
  return (
    // BG
    <div id="Home" 
      className="
        bg-white px-6 pt-[45px] 
        md:px-8
        xl:pt-[100px]
      ">
      {/* Frame */}
      <div className="
        mx-auto grid
        grid-cols-2 
        lg:justify-between
        2xl:max-w-[1536px] 
        ">
        {/* Start Title, Desc, & Button */}
        <div>
          {/* Title */}
          <h1 className="
            font-monument
            text-lg md:text-2xl lg:text-3xl xl:text-4xl
            ">
            Tertarik dengan produk berkualitas dari kami?
          </h1>
          {/* Desc */}
          <p className="
            my-4 lg:mb-12
            text-sm lg:text-base xl:text-lg
            ">
            Tim kami siap membantu anda menemukan solusi terbaik untuk kebutuhan
            anda. Jangan ragu untuk menghubungi kami
          </p>
          {/* Button Contact Us */}
          <a
            href="#ContactUs"
            className="
            font-monument underline underline-offset-1 
            text-lg md:text-2xl xl:text-3xl
            hover:text-[#00B4D8]
          "
          >
            Contact Us
          </a>
        </div>
        {/* End Title, Desc, & Button */}
        {/* Picture */}
        <img
          src={product}
          alt="Sparepart Image"
          className="
            z-10 justify-self-end
            w-[250px] sm:w-[290px] md:w-[400px] 
            lg:w-[450px] lg:justify-self-center
            xl:w-[500px]
          "
        />
      </div>
    </div>
  );
};

export default Home;
