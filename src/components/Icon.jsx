// import {useState} from 'react'

const Icon = ({ children, linkApps }) => {
  // const [hovered, setHovered] = useState(false)

  return (
    <a href={linkApps} className={`flex text-[40px] hover:text-white`}>
      {children}
    </a>
  );
};

export default Icon;
