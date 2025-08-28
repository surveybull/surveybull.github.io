import React from "react";
import FormIntro from "../../assets/FormIntro.svg";
import { MAINNET_LINK } from "../../constant/app";
function Intro() {
  return (
    <div className="flex md:flex-row flex-col-reverse gap-6">
      <div className="md:w-[50%] md:justify-start w-full flex justify-center items-center">
        <img src={FormIntro} alt="FormIntro" loading="lazy" />
      </div>
      <div className="md:w-[50%] w-full flex flex-col justify-center gap-y-7">
        <h2 className="text-[24px] md:text-[36px] font-HelveticaNeueBold text-[#132337] md:leading-[52px] leading-[34px]">
          <span className="gradient-text inline-block">Easily</span> create{" "}
          <span className="gradient-text inline-block">surveys</span> and forms fast
        </h2>
        <span className="md:text-[16px] text-[#5A6573] font-[400] text-[12px] md:leading-[26px] leading-[20px]">
          Ask the right questions with AI-powered guidance, logic, and so many
          question types. Or choose from 250+ expert-written survey templates
          you can easily customize.
        </span>
        <button
          className="mainnet-button rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] gradient-text font-[400] md:text-[16px] text-[14px] border border-[#9333EA] w-fit "
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
