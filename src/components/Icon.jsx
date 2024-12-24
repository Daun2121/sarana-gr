// import {useState} from 'react'

const Icon = ({children, linkApps}) => {
  // const [hovered, setHovered] = useState(false)
  
  return (
    <a href={linkApps}
    className={`flex text-4xl hover:text-[#d1dae0]`}>
      {children}
    </a>
  )
}

export default Icon