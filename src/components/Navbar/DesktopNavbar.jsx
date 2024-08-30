import React from "react";
import SurveybullLogo from "../../assets/SurveybullLogo.svg";

import { Link } from "react-router-dom";
import DropDownMenu from "./DropDownMenu";
import { TESTNET_LINK } from "../../constant/app";
function DesktopNavbar({ NavbarData, visitedPage }) {
  return (
    <div className="flex items-center justify-between xl:max-w-[1300px] mx-auto w-full px-7 py-4">
      <Link to={"/"}>
        <img
          src={SurveybullLogo}
          alt="SurveybullLogo"
          width={170}
          height={170}
        ></img>
      </Link>
      <div className="flex items-center  gap-x-4 lg:gap-x-8">
        {NavbarData.map((option) =>
          option.childItem.length > 0 ? (
            <DropDownMenu option={option} visitedPage={visitedPage} />
          ) : (
            <div className="flex flex-col justify-center items-center gap-y-1">
              <Link
                to={option.path}
                className={`${
                  visitedPage == option.path.toLowerCase().split("/")[1]
                    ? "text-[#3B4EF4] font-[500]"
                    : "text-[#132337]"
                } font-[400] text-[16px] lg:text-[18px]`}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {option.title}
              </Link>
              <div
                className={`${
                  visitedPage == option.path.toLowerCase().split("/")[1]
                    ? "bg-[#3B4EF4] h-[2.5px] rounded-full w-[17px]"
                    : "bg-none h-[2.5px]"
                }`}
              ></div>
            </div>
          )
        )}
        <div className="flex flex-col justify-center items-center gap-y-1">
          <a
            // to={"/"}
            className={`${
              false ? "text-[#3B4EF4] font-[500]" : "text-[#132337]"
            } font-[400] text-[16px] lg:text-[18px] cursor-pointer`}
            onClick={() => {
              window.open(
                "https://surveybull.gitbook.io/surveybull-whitepaper"
              );
            }}
          >
            Docs
          </a>
          <div
            className={`${
              false
                ? "bg-[#3B4EF4] h-[2.5px] rounded-full w-[17px]"
                : "bg-none h-[2.5px]"
            }`}
          ></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-1">
          <Link
            to={"/faqs"}
            className={`${
              visitedPage == "/faqs".toLowerCase().split("/")[1]
                ? "text-[#3B4EF4] font-[500]"
                : "text-[#132337]"
            } font-[400] text-[16px] lg:text-[18px]`}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {"FAQs"}
          </Link>
          <div
            className={`${
              visitedPage == "/faqs".toLowerCase().split("/")[1]
                ? "bg-[#3B4EF4] h-[2.5px] rounded-full w-[17px]"
                : "bg-none h-[2.5px]"
            }`}
          ></div>
        </div>
      </div>
      <div>
        <button
          className="bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] px-[30px] py-[12px] text-[#FFFFFF] font-[500] text-[16px] "
          onClick={() => {
            //window.open(TESTNET_LINK);
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default DesktopNavbar;
