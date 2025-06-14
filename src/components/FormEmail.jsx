import { useState } from "react";
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormEmail = () => {

  const [name, setName] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_vxig6df';
    const templateId = 'template_tnahzz3';
    const publicKey = '55vSfEafeh6IkONm7';

    // Buat objek baru berisi data untuk params di template email
    const templateParams = {
      from_name: name,
      from_phoneNum: phoneNum,
      from_email: email,
      to_name: 'SGR',
      message: message,
    };

    // Kirim email with EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Berhasil masku', response);
        toast.success('Message sent successfully👌', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, // Durasi toast (dalam milidetik)
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setName('');
        setPhoneNum('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('Ada error nih:', error);
        
        toast.error('Failed to send email, please try again', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        p-[10px] lg:p-[20px]
        grid grid-cols-2 
        gap-[10px] lg:gap-5
        rounded-xl bg-[#323335] [box-shadow:inset_0_0_5px_2px_rgb(0,0,0,0.25)]
      "
    >
      {/* Name */}
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
        className="py-3 px-4 rounded-lg bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"
      />
      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={phoneNum}
        onChange={(e) => setPhoneNum(e.target.value)}
        required
        className="py-3 px-4 rounded-lg bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"
      />
      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="py-3 px-4 rounded-lg col-span-full bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"
      />
      {/* Messages */}
      <textarea
        name="message"
        placeholder="Messages"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="py-3 px-4 rounded-lg col-span-full bg-[#202124]/10 [box-shadow:inset_0_0_5px_0_rgb(0,0,0,0.25)]"
      />
      {/* Submit Button */}
      <button
        type="submit"
        className="col-span-full bg-[#00B4D8] text-[#202124] font-bold py-3 px-4 rounded-lg hover:bg-[#164f5c] hover:text-white"
      >
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};

export default FormEmail;
