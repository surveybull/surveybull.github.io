import React from 'react'
import SurveybullLogo from '../../../public/SurveybullLogo.svg'
import {Link} from 'react-router-dom'
function DesktopNavbar({NavbarData}) {
  return (
    <div className='flex items-center justify-between'>
       <div>
        <img src={SurveybullLogo} width={170} height={170}></img>
       </div>
       <div className='flex items-center gap-x-8'>
        {NavbarData.map((option)=>(
            <Link to={option.path}>{option.title}</Link>
        ))}
       </div>
       <div>
        <button className='bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] rounded-[7px] px-3 py-2'>Get Started</button>
       </div>
    </div>
  )
}

export default DesktopNavbar;