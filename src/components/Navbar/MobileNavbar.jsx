import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTrigger,
} from "../../@/components/ui/sheet";
import SurveybullLogo from "../../assets/SurveybullLogo.svg";
import { FiMenu } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Sheetpng from "../../assets/background/sheetpng.png";
import telegramLogo from "../../assets/FooterTelegram.svg";
import mailLogo from "../../assets/FooterMail.svg";
import twitterLogo from "../../assets/FooterTwitter.svg";
import discordLogo from "../../assets/Discord.svg";
import MenuButton from "../../assets/MenuButton.svg";
import { Link } from "react-router-dom";
import {
  DISCORD_LINK,
  TELEGRAM_LINK,
  MAINNET_LINK,
  TWITTER_LINK,
} from "../../constant/app";

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
      <Link to={"/"}>
        <img
          src={SurveybullLogo}
          alt="SurveybullLogo"
          width={150}
          height={150}
        ></img>
      </Link>
      <Sheet>
        <SheetTrigger>
          <img src={MenuButton} alt="MenuButton" />
        </SheetTrigger>
        <SheetContent className="overflow-auto bg-[url('./assets/background/sheetpng.png')] bg-cover bg-repeat-round bg-fixed">
          <div className="flex flex-col gap-y-6 mt-[2.5rem]">
            <div className="flex justify-evenly items-center">
              {/* <img src={mailLogo} width={20} height={20}></img> */}
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <img src={telegramLogo} alt="telegramLogo"></img>
              </a>
              <a href={TWITTER_LINK} target="_blank" rel="noopener noreferrer">
                <img src={twitterLogo} alt="twitterLogo"></img>
              </a>
              <a href={DISCORD_LINK} target="_blank" rel="noopener noreferrer">
                <img src={discordLogo} alt="discord" />
              </a>
            </div>
            <div className="py-3">
              <Link to={"/"}>
                <img
                  src={SurveybullLogo}
                  alt="SurveybullLogo"
                  width={140}
                  height={140}
                ></img>
              </Link>
            </div>
            <div className="flex flex-col gap-y-5">
              {NavbarData.map((option) =>
                option.childItem.length > 0 &&
                visitedPage == option.path.toLowerCase().split("/")[1] ? (
                  <div>
                    <div
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
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
                      {option.childItem.map((child, index) => (
                        <SheetClose>
                          <div
                            onClick={() => {
                              scrollToSection(child.id);
                            }}
                            className={`${
                              option.childItem.length - 1 == index
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
                  <Link
                    to={option.path}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <SheetClose className="flex justify-start w-full">
                      <div className="font-semibold">{option.title}</div>
                    </SheetClose>
                  </Link>
                )
              )}
              <Link
                onClick={() => {
                  window.open(
                    "https://surveybull.gitbook.io/surveybull-whitepaper"
                  );
                }}
              >
                <SheetClose className="flex justify-start w-full">
                  <div className="font-semibold">Docs</div>
                </SheetClose>
              </Link>
              <Link
                to={"/faqs"}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <SheetClose className="flex justify-start w-full">
                  <div className="font-semibold">{"FAQs"}</div>
                </SheetClose>
              </Link>
            </div>
            <div>
              <button
                className="gradient-bg shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] px-[30px] py-[12px] text-[#FFFFFF] font-HelveticaNeueMedium text-[16px]"
                onClick={() => {
                  window.open(MAINNET_LINK);
                }}
              >
                Launch App
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default MobileNavbar;
