import React, { useState } from "react";
import { useSliderStore } from "../../store/Calculator";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { getDecimalSeparateNum } from "../../helper/getDecimalSeparateNum";
import { MAX_RESPONSES } from "../../constant/app";

function SliderSection() {
  const [inputValue, setInputValue] = useState("1000");
  const [sliderValue, setSliderValue] = useSliderStore((state) => [
    state.sliderValue,
    state.setSliderValue,
  ]);

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      setInputValue(
        newValue < 1 ? "" : newValue > MAX_RESPONSES ? MAX_RESPONSES : newValue
      );
      setSliderValue(newValue < 1 ? 1 : newValue > MAX_RESPONSES ? MAX_RESPONSES : newValue);
    }
  };
  return (
    <div className="w-full flex flex-col gap-y-3">
      <span className="text-[#132337] text-[16px] md:text-[18px] ">
        Number of Survey Responses
      </span>
      <div className="text-[20px] md:text-[22px]  text-[#132337] flex justify-between gap-3 items-center">
        <span className="font-HelveticaNeueBold">
          {getDecimalSeparateNum(sliderValue)}
        </span>
        <div className="bg-gradient-to-b from-[#FFFFFFB2] to-[#FFFFFF33] shadow-[3px_9px_35px_0_rgb(19,35,55,0.06)] rounded-[7px] p-[2px] border lg:hidden md:block sm:hidden block ">
          <div className="flex gap-4 items-center justify-between px-3 py-1 bg-white w-full rounded-[5px]">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="outline-none md:text-[18px] text-[16px] bg-transparent ring-0 border-none max-w-[100px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <Slider
          value={sliderValue}
          min={1}
          dotStyle={{ visibility: "hidden" }}
          max={MAX_RESPONSES}
          defaultValue={sliderValue}
          step={5}
          marks={{
            1: {
              style: {
                color: "#89919B",
                left: "3px",
                fontWeight: "bold",
                fontSize: "13px",
              },
              label: "1",
            },
            10000: {
              style: { color: "#89919B", fontWeight: "bold", fontSize: "13px" },
              label: "10,000",
            },
          }}
          onChange={(value) => {
            setSliderValue(value);
            setInputValue(value);
          }}
          styles={{
            track: {
              backgroundColor: "#5868F8",
              height: 5,
            },
            rail: {
              height: 5,
              backgroundColor: "#E7E9EB",
            },
            handle: (focus = {
              boxShadow: "none",
              height: 12,
              width: 12,
              marginLeft: sliderValue > 5000 ? 0 : 4,
              backgroundColor: "#3B4EF4",
              marginTop: -4,
              borderColor: "#3B4EF4",
              touchAction: "none",
            }),
          }}
        />
        <div className="bg-gradient-to-b from-[#FFFFFFB2] to-[#FFFFFF33] shadow-[3px_9px_35px_0_rgb(19,35,55,0.06)] rounded-[7px] p-[2px] border lg:block md:hidden sm:block hidden -mt-[16px] ">
          <div className="flex gap-4 items-center justify-between px-3 py-1 bg-white w-full rounded-[5px]">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="outline-none md:text-[18px] text-[16px] bg-transparent ring-0 border-none max-w-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderSection;
