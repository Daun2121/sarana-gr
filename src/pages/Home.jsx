import product from '../assets/images/product.png';
const Home = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full pt-20 px-[50px] 
      flex gap-10 relative justify-end items-center
      2xl:max-w-[1536px]">
        <div className="grid lg:grid-cols-2">
          <img src={product} alt="" className='w-[600px] z-10 
          lg:place-self-end lg:order-last'/>
          <div className="self-center">
            <h1 className="text-[40px] font-monument">Tertarik dengan produk berkualitas dari kami?</h1>
            <p className="text-base my-4 font-light">
              Tim kami siap membantu anda menemukan solusi terbaik untuk kebutuhan anda. 
              <br/>
              Jangan ragu untuk menghubungi kami
            </p>
            <a href="#ContactUs" className="font-monument underline underline-offset-1 text-3xl hover:text-[#fdc500]">Contact Us</a>    
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
