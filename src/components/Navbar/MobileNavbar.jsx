import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "../../@/components/ui/sheet";
import SurveybullLogo from "../../../public/SurveybullLogo.svg";
import { FiMenu } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sheetpng from '../../../public/sheetpng.png'
import twitterLogo from '../../assets/twitterLogo.svg'
import mailLogo from '../../assets/mailLogo.svg'
import telegramLogo from '../../assets/telegramLogo.svg'
function MobileNavbar({ NavbarData }) {
  const [id, setId] = useState([]);
  return (
    <div className="flex items-center justify-between">
      <div>
        <img src={SurveybullLogo} width={150} height={150}></img>
      </div>
      <Sheet>
        <SheetTrigger>
          <FiMenu size={25} />
        </SheetTrigger>
        <SheetContent style={{ backgroundImage: `url(${Sheetpng})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="overflow-auto">
          <div className="flex flex-col gap-y-6 mt-[2.5rem]">
          <div className="flex justify-evenly items-center">
            <img src={mailLogo} width={20} height={20}></img>
            <img src={telegramLogo} width={20} height={20}></img>
            <img src={twitterLogo} width={20} height={20}></img>
          </div>
          <div className="py-3">
            <img src={SurveybullLogo} width={140} height={140}></img>
          </div>
          <div className="flex flex-col gap-y-5">
            {NavbarData.map((option) =>
              option.childItem.length > 0 ? (
                <div>
                  
                    <div
                    onClick={() => {
                      if (id?.includes(option.id)) {
                        setId(id?.filter((i) => i !== option.id));
                      } else {
                        setId([...id, option.id]);
                      }
                    }}
                    className="flex justify-between items-center hover:cursor-pointer font-semibold"
                  >
                    <span>{option.title}</span>
                    <MdOutlineKeyboardArrowDown  className={`${
                      id?.includes(option.id) ? "rotate-180" : "rotate-0"
                    }`} />
                  </div>
                  
                 
                  <div
                    className={`${
                      id?.includes(option.id) ? "flex flex-col pl-2 gap-y-1" : "hidden"
                    }`}
                  >
                    {option.childItem.map((child) => (
                     <SheetClose><div className={`${option.childItem.length - 1 == child.id ? "border-b-2 border-transparent" : "border-b-2 border-[#E7E9EB]" } flex flex-col gap-y-1 py-3 px-2 w-full hover:bg-[#EDEFFF] group`}><span className="text-start group-hover:text-[#3B4EF4] text-[#132337] font-[500] text-[14px]">{child.title}</span> <span className="text-start group-hover:text-[#132337] text-[#89919B] font-[400] text-[12px]">{child.subtitle}</span></div></SheetClose> 
                    ))}
                  </div>
                </div>
              ) : (
                <SheetClose className="flex justify-start">
                  <div className="font-semibold">{option.title}</div>
                </SheetClose>
              )
            )}
          </div>
          <div>
          <button className='bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] rounded-[7px] px-3 py-2 text-[#FFFFFF] font-[500] text-[16px]'>Get Started</button>
          </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
