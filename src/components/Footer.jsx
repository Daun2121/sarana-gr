// import { Whatsapp} from 'assets/images/elements/wa.svg';
import Icon from './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div className="mx-auto 2xl:max-w-[1536px] 2xl:px-0 px-12 w-full grid">
      {/* Title Perusahaan */}
      {/* <span className=" 2xl:text-[85px] font-monument justify-self-center text-center my-20 text-[#3e371c]"> */}
      <span className="font-monument justify-self-center text-center text-[#3e371c]
      2xl:text-[86px] xl:text-[66px] lg:text-[51px] md:text-[36px] sm:text-[29px] text-29px">
        SARANA GEMA REKAYASA
      </span>
      <div className="text-white font-light grid gap-1">
        <div className='flex justify-between items-center'>
          {/* No HP */}
          <div className="flex gap-5">
            <p>0858 9284 4434</p>
            <p>0813 8145 3455</p>
          </div>
          {/* Icons */}
          <div className='flex gap-4'>
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
        </div>
        {/* Email */}
        <a href="mailto:@spresisi@yahoo.com" className="inline-block w-max">spresisi@yahoo.com</a>
        <p>Pergudangan Lio Baru Kav. 33 Blok AA1, Jl. Bouraq Lio Baru, Batusari, Kec. Batuceper, Tangerang, Banten.</p>
        <span className="bg-white h-[2px] w-full"></span>
        <p className="text-white text-xl text-center">© SARANA GEMA REKAYASA 2025 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer