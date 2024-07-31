import React from "react";
import BlogHeader from "../../assets/BlogHeader.svg";
import { TESTNET_LINK } from "../../constant/app";
function Header() {
  return (
    <div className="flex md:flex-row flex-col py-4 mt-[2rem] md:mt-[3rem] gap-6">
      <div className="md:w-[50%] w-full flex flex-col justify-center sm:gap-y-7 gap-y-4">
        <span className="text-[26px] md:text-[40px] leading-[34px] md:leading-[74px] lg:text-[56px] font-HelveticaNeueBold text-[#132337]">
          Create your own <span className="text-[#3B4EF4]">surveys</span>
        </span>
        <span className="md:text-[20px] text-[#132337] font-[400] text-[14px] md:leading-[30px] leading-[20px]">
          Explore the platform to find out how easy it is to find the answers
          you need with surveys and forms.
        </span>
        <div className="flex items-center sm:gap-5 gap-3">
          <button
            className="bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] text-[#FFFFFF] font-HelveticaNeueMedium md:text-[16px] text-[14px] "
            onClick={() => {
              window.open(TESTNET_LINK);
            }}
          >
            Sign up free
          </button>
          <button className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] text-[#3B4EF4] font-HelveticaNeueMedium md:text-[16px] text-[14px] border border-[#5868F8] ">
            Explore templates
          </button>
        </div>
      </div>
      <div className="md:w-[50%] w-full flex justify-center items-center">
        <img src={BlogHeader} alt="BlogHeader" />
      </div>
    </div>
  );
}

export default Header;
