import React from "react";
import Calculation from "./Calculation";
import SliderSection from "./SliderSection";
import Switcher from "./Switcher";
import TokenSwitcher from "./TokenSwitcher";

function Calculator() {
  return (
    <>
      <div className="text-center md:text-4xl text-2xl font-HelveticaNeueBold pb-10">
        Pricing <span className="gradient-text inline-block"> Calculator </span>
      </div>
      <div className="flex flex-col mb-10">
        <div className="flex md:flex-row flex-col p-7 gap-10 bg-[#FFFFFF] border border-[#E7E9EB] rounded-t-[22.94px] shadow-[2px_7px_25px_0px_rgba(151,143,253,0.14)]">
          <div className="flex flex-col gap-y-9 flex-1">
            <SliderSection />
            <Switcher />
          </div>
          <div className="flex-1">
            <Calculation />
          </div>
        </div>
        <div className="bg-[#EDEFFF] rounded-b-[22.94px] border border-[#D0D3D7] flex sm:justify-between justify-center gap-x-[3.5rem] gap-y-5 flex-wrap py-4 px-7">
          <TokenSwitcher />
        </div>
      </div>
    </>
  );
}

export default Calculator;
