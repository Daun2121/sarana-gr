// import { Whatsapp} from 'assets/images/elements/wa.svg';
import Icon from './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div className="
      w-full grid
      mx-auto mb-16 
      px-6 md:px-8 
      2xl:max-w-[1536px] 2xl:px-0 
      ">
      {/* Title Perusahaan */}
      <span 
        className="
          font-monument text-[#00B4D8]/10 text-center 
          
          text-[53px]
          sm:text-[30px]
          md:text-[36px]
          lg:text-[51px] 
          xl:text-[66px] 
          2xl:text-[86px] 

          justify-self-center 
          whitespace-nowrap
          cursor-default select-none pointer-events-none
        ">
          SARANA GEMA&nbsp; <br />
          <span className=''>
            REKAYASA
          </span>
      </span>

      {/* Footer Information */}
      <div 
        className="
          text-white/50 text-[14px] lg:text-[16px] xl:text-[18px]
          font-light 
          mt-[100px]
          grid grid-cols-2 gap-2
          ">
        {/* Icons */}
        <div className='flex gap-4 col-span-full'>
          <Icon linkApps="https://wa.me/6281381453455">
            <FontAwesomeIcon icon={faWhatsapp}/>
          </Icon>
          <Icon linkApps="https://www.instagram.com/saranagemarekayasa?igsh=MWp3aW83OGZxMWxnbQ==">
            <FontAwesomeIcon icon={faInstagram}/>
          </Icon>
          <Icon linkApps="https://www.facebook.com/profile.php?id=100083162147789&mibextid=ZbWKwL" >
            <FontAwesomeIcon icon={faFacebook}/>
          </Icon>
          <Icon linkApps="mailto:spresisi@yahoo.com">
            <FontAwesomeIcon icon={faEnvelope}/>
          </Icon>
        </div>
        {/* Email & Phone */}
        <div>
          {/* Email */}
          <a 
            href="mailto:@spresisi@yahoo.com" 
            className="inline-block w-max">
              spresisi@yahoo.com
          </a>
          {/* No HP */}
          <div className="flex gap-4">
            <p>0858 9284 4434</p>
            <p>0813 8145 3455</p>
          </div>
        </div>
        {/* Address */}
        <p className='text-right'>
          Pergudangan Lio Baru Kav. 33 Blok AA1, Jl. Bouraq Lio Baru, Batusari, Kec. Batuceper, Tangerang, Banten.
        </p>
        {/* Bar */}
        <span className="bg-white/10 h-[1px] w-full col-span-full"></span>
        {/* Copyright */}
        <p className='col-span-full'>© SARANA GEMA REKAYASA 2025 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer