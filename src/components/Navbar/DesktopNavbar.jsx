import React from 'react'
import SurveybullLogo from '../../../public/SurveybullLogo.svg'
import {Link} from 'react-router-dom'
import DropDownMenu from './DropDownMenu';
function DesktopNavbar({NavbarData,visitedPage}) {
  return (
    <div className='flex items-center justify-between'>
       <div>
        <img src={SurveybullLogo} width={170} height={170}></img>
       </div>
       <div className='flex items-center gap-x-8'>
        {NavbarData.map((option)=>(
           option.childItem.length > 0 ? (<DropDownMenu option={option} visitedPage={visitedPage}/>):(<div className='flex flex-col justify-center items-center gap-y-1'>
            <Link to={option.path} className={`${visitedPage == option.title ? "text-[#3B4EF4] font-[500]":"text-[#132337]"} font-[400] text-[18px]`}>{option.title}</Link>
            <hr className={`${visitedPage == option.title ? "bg-[#3B4EF4] h-[2.5px] rounded-full w-[17px]" : "bg-none h-[2.5px]"}`}></hr>
         </div>)
          
           
        ))}
       </div>
       <div>
        <button className='bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] rounded-[7px] px-3 py-2 text-[#FFFFFF] font-[500] text-[16px]'>Get Started</button>
       </div>
    </div>
  )
}

export default DesktopNavbar;