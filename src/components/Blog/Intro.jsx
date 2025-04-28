import React from "react";
import FormIntro from "../../assets/FormIntro.svg";
import { MAINNET_LINK } from "../../constant/app";
function Intro() {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-6">
      <div className="md:w-[50%] md:justify-start w-full flex justify-center items-center">
        <img src={FormIntro} alt="FormIntro" />
      </div>
      <div className="md:w-[50%] w-full flex flex-col justify-center gap-y-7">
        <span className="text-[24px] md:text-[36px] font-HelveticaNeueBold text-[#132337] md:leading-[52px] leading-[34px]">
          <span className="text-[#3B4EF4]">Easily</span> create{" "}
          <span className="text-[#3B4EF4]">surveys</span> and forms fast
        </span>
        <span className="md:text-[16px] text-[#5A6573] font-[400] text-[12px] md:leading-[26px] leading-[20px]">
          Ask the right questions with AI-powered guidance, logic, and so many
          question types. Or choose from 250+ expert-written survey templates
          you can easily customize.
        </span>
        <button
          className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] text-[#3B4EF4] font-[400] md:text-[16px] text-[14px] border border-[#5868F8] w-fit "
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

export default Intro;
