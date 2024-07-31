import React, { useState } from "react";
import { useSliderStore, useSwitcherState } from "../../store/Calculator";
import { PossibleSwitch } from "../../constant/app";

function Switcher() {
  const { checkedState, toggleCheckbox } = useSwitcherState();
  const sliderValue = useSliderStore((state) => state.sliderValue);
  return (
    <div className=" flex flex-col gap-y-4 mt-5">
      <span className="text-[#132337] text-[14px] md:text-[18px]">
       Token Demography
      </span>
      <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PossibleSwitch.map((item, index) => (
          <div className="flex items-center gap-2">
            <span className="text-[#89919B] text-[12px] md:text-[14px] capitalize w-full text-left sm:text-right ">
              {item.title}
            </span>
            <label className="flex items-center relative w-max select-none rounded-full cursor-pointer">
              <input
                type="checkbox"
                className={`${
                  checkedState[index].isChecked
                    ? "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD]"
                    : "bg-transparent border border-[#D0D3D7]"
                } appearance-none transition-colors cursor-pointer w-[60px] h-8 rounded-full  `}
                onClick={() => {
                  toggleCheckbox(index);
                }}
              />
              <span className="absolute font-HelveticaNeueMedium text-[12px] right-2 text-[#D0D3D7] top-[8.5px]">
                No
              </span>
              <span className="absolute font-HelveticaNeueMedium text-[12px] right-[32px] text-[#E7E9EB] top-[8.5px]">
                Yes
              </span>

              <span
                className={`w-6 h-6  ${
                  checkedState[index].isChecked
                    ? "right-0 mr-[5.3px] bg-[#FFFFFF]"
                    : "right-8 -ml-1 bg-[#D0D3D7]"
                } absolute rounded-full transform transition-transform  shadow-[-1px_1px_8.1px_0px_rgba(255,255,255,0.25)] top-[4px]`}
              />
            </label>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
export default Switcher;
