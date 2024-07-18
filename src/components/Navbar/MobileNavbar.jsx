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
import Sheetpng from "../../assets/background/sheetpng.png";
import twitterLogo from "../../assets/twitterLogo.svg";
import mailLogo from "../../assets/mailLogo.svg";
import telegramLogo from "../../assets/telegramLogo.svg";
import { Link } from "react-router-dom";

function MobileNavbar({ NavbarData, visitedPage }) {
  const [id, setId] = useState([]);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center justify-between mx-auto w-full px-7 py-4 ">
      <div>
        <img src={SurveybullLogo} width={150} height={150}></img>
      </div>
      <Sheet>
        <SheetTrigger>
          <FiMenu size={25} />
        </SheetTrigger>
        <SheetContent
          style={{
            backgroundImage: `url(${Sheetpng})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="overflow-auto"
        >
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
                option.childItem.length > 0 &&
                visitedPage == option.path.toLowerCase() ? (
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
                      <MdOutlineKeyboardArrowDown
                        className={`${
                          id?.includes(option.id) ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>

                    <div
                      className={`${
                        id?.includes(option.id)
                          ? "flex flex-col pl-2 gap-y-1"
                          : "hidden"
                      }`}
                    >
                      {option.childItem.map((child) => (
                        <SheetClose>
                          <div
                            onClick={() => {
                              scrollToSection(child.id);
                            }}
                            className={`${
                              option.childItem.length - 1 == child.id
                                ? "border-b-2 border-transparent"
                                : "border-b-2 border-[#E7E9EB]"
                            } flex flex-col gap-y-1 py-3 px-2 w-full hover:bg-[#EDEFFF] group`}
                          >
                            <span className="text-start group-hover:text-[#3B4EF4] text-[#132337] font-HelveticaNeueMedium text-[14px]">
                              {child.title}
                            </span>{" "}
                            <span className="text-start group-hover:text-[#132337] text-[#89919B] font-[400] text-[12px]">
                              {child.subtitle}
                            </span>
                          </div>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link to={option.path}>
                    <SheetClose className="flex justify-start w-full">
                      <div className="font-semibold">{option.title}</div>
                    </SheetClose>
                  </Link>
                )
              )}
            </div>
            <div>
              <button className="bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] px-[30px] py-[12px] text-[#FFFFFF] font-HelveticaNeueMedium text-[16px]">
                Get Started
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
