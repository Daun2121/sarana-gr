const ContactUs = () => {
  return (
    <div className="px-12 2xl:px-0 2xl:max-w-[1536px] mx-auto font-light text-[#ccc] text-center grid justify-items-center">
      <h1 className="text-[40px] font-monument text-[#FDC500]">Bagaimana kami bisa membantu Anda?</h1>
      <p className="w-[800px]">
        PT Sarana Gema Rekayasa selalu siap membantu kebutuhan Anda. Jika Anda memiliki pertanyaan, 
        permintaan, atau ingin mengetahui lebih lanjut tentang produk dan layanan kami, 
        jangan ragu untuk menghubungi kami dengan mengisi formulir di bawah ini:
      </p>
      <div className="grid grid-cols-2 w-full gap-10">
        {/* Form Box */}
        <form action="" className="p-[30px] grid grid-cols-2 gap-[25px] rounded-xl bg-[#323335]">
          {/* Name */}
          <input type="text" name="name" placeholder="Name" required className="py-3 px-4 rounded-xl"/>
          {/* Phone */}
          <input type="tel" name="phone" placeholder="Phone" required className="py-3 px-4 rounded-xl"/>
          {/* Email */}
          <input type="email" name="email" placeholder="Email" required className="py-3 px-4 rounded-xl col-span-full"/>
          {/* Messages */}
          <textarea name="message" placeholder="Messages" required className="py-3 px-4 rounded-xl col-span-full"/>
          {/* Submit Button */}
          <button className="col-span-full bg-[#FDC500] text-[#202124] font-bold py-3 px-4 rounded-xl hover:bg-[#695200] hover:text-[#ccc]">Submit</button>
        </form>
        {/* Map */}
        <iframe className="w-full h-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7534676446967!2d106.65046781436261!3d-6.163761895537463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f8c02a1d1bfb%3A0xde7f204aa172bd75!2sPT.+SHIBA+HIDROLIK+PRATAMA!5e0!3m2!1sen!2sid!4v1527308163646">
        </iframe>
      </div>
    </div>
  )
}

export default ContactUs