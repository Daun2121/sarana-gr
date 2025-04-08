const ContactUs = () => {
  return (
    <div 
      id="ContactUs"
      className="pb-20 pt-[100px]">
      {/* BG */}
      <div className="bg-gradient-to-b from-[#202124] via-[#00B4D8] to-[#202124] ">
        {/* Frame */}
        <div 
          className="
            px-12 mx-auto 
            grid justify-items-center gap-5
            font-light text-white text-center 
            2xl:px-0 2xl:max-w-[1536px] 
            ">
          {/* Title */}
          <h1 className="text-3xl font-monument text-[#00B4D8]">
            Bagaimana kami bisa membantu Anda?
          </h1>
          {/* Description */}
          <p className="w-[800px]">
            PT Sarana Gema Rekayasa selalu siap membantu kebutuhan Anda. Jika Anda memiliki pertanyaan, 
            permintaan, atau ingin mengetahui lebih lanjut tentang produk dan layanan kami, 
            jangan ragu untuk menghubungi kami dengan mengisi formulir di bawah ini:
          </p>
          {/* Form Box & Maps */}
          <div className="grid grid-cols-2 w-full gap-10 mt-10">
            {/* Form Box */}
            <form action="" className="p-[30px] grid grid-cols-2 gap-[25px] rounded-xl bg-[#323335] [box-shadow:inset_0_0_5px_2px_rgb(0,0,0,0.25)]">
              {/* Name */}
              <input type="text" name="name" placeholder="Name" required className="py-3 px-4 rounded-lg bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"/>
              {/* Phone */}
              <input type="tel" name="phone" placeholder="Phone" required className="py-3 px-4 rounded-lg bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"/>
              {/* Email */}
              <input type="email" name="email" placeholder="Email" required className="py-3 px-4 rounded-lg col-span-full bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"/>
              {/* Messages */}
              <textarea name="message" placeholder="Messages" required className="py-3 px-4 rounded-lg col-span-full bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"/>
              {/* Submit Button */}
              <button className="col-span-full bg-[#00B4D8] text-[#202124] font-bold py-3 px-4 rounded-lg hover:bg-[#164f5c] hover:text-white">Submit</button>
            </form>
            {/* Map */}
            <iframe className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7534676446967!2d106.65046781436261!3d-6.163761895537463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8c02a1d1bfb%3A0xde7f204aa172bd75!2sPT.+SHIBA+HIDROLIK+PRATAMA!5e0!3m2!1sen!2sid!4v1527308163646">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs