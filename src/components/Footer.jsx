// import { Whatsapp} from 'assets/images/elements/wa.svg';
import Icon from './Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Footer = () => {
  return (
    <div className="bg-[#202124] grid px-5 pb-3">
      <div className="mx-auto 2xl:max-w-[1536px] w-full grid">
        {/* Title Perusahaan */}
        <span className=" text-[60px] 2xl:text-[126px] font-gendy 
        justify-self-center text-center my-20
        text-[#3e371c]">
          SARANA GEMA REKAYASA
        </span>
        <div className="text-white text-xl grid gap-1">
          <div className='flex justify-between'>
            {/* No HP */}
            <div className="flex gap-5">
              <p>0857 9678 1454</p>
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
          <p className="text-white text-xl text-center">© SARANA GEMA REKAYASA 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer