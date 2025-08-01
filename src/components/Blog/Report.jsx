import React from "react";
import Reportimg from "../../assets/Report.svg";
import { MAINNET_LINK } from "../../constant/app";
function Report() {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-6">
      <div className="md:w-[50%] md:justify-start w-full flex justify-center items-center">
        <img src={Reportimg} alt="Report" />
      </div>
      <div className="md:w-[50%] w-full flex flex-col justify-center gap-y-7">
        <span className="text-[24px] md:text-[36px] font-HelveticaNeueBold text-[#132337] md:leading-[52px] leading-[34px]">
          <span className="gradient-text inline-block">Uncover insights</span> that you can
          act on quickly
        </span>
        <span className="md:text-[16px] text-[#5A6573] font-[400] text-[12px] md:leading-[26px] leading-[20px]">
          Analyze responses at scale using simple, built-in reports or advanced
          dashboards that you can customize and share with your team. Or export
          and analyze your data in your favorite software.
        </span>
        <button
          className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] gradient-text font-[400] md:text-[16px] text-[14px] border border-[#9333EA] w-fit "
          onClick={() => {
            window.open(MAINNET_LINK);
          }}
        >
          Sign up free
        </button>
      </div>
    </div>
  );
}

export default Report;
