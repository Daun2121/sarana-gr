import product from '../assets/images/product.png';
const Home = () => {
  return (
    // BG
    <div 
      id='Home'
      className="bg-white px-12 pt-[100px]">
      {/* Frame */}
      <div className="mx-auto grid justify-between 
      lg:grid-cols-2 2xl:max-w-[1536px]">
        {/* Picture */}
        <img 
          src={product} 
          alt="Sparepart Image" 
          className='w-[600px] z-10 lg:order-last justify-self-end'/>
        {/* Title, Desc, & Button */}
        <div>
          <h1 className="text-4xl font-monument">Tertarik dengan produk berkualitas dari kami?</h1>
          <p className="text-lg my-4 font-light">
            Tim kami siap membantu anda menemukan solusi terbaik untuk kebutuhan anda. 
            Jangan ragu untuk menghubungi kami
          </p>
          <a 
            href="#ContactUs" 
            className="
              text-3xl 
              font-monument underline underline-offset-1 
              hover:text-[#00B4D8]
              ">
                Contact Us
          </a>    
        </div>
      </div>
    </div>
  );
};

export default Home;
