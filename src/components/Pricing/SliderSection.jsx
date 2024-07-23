import React from 'react'
import { useSliderStore } from '../../store/Calculator';
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
function SliderSection() {
    const [sliderValue, setSliderValue] = useSliderStore((state) => [
      state.sliderValue,
      state.setSliderValue,
    ]);
  
    return (
      <div className="w-full flex flex-col gap-y-2">
        <span className="font-HelveticaNeueBold bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] bg-clip-text text-transparent text-[24px] leading-normal">
          Pricing Calculator
        </span>
        <span className="text-[#132337] text-[18px] ">Number of Survey Responses</span>
        <span className="text-[22px] font-HelveticaNeueBold text-[#132337]">{sliderValue}</span>
        <Slider
          value={sliderValue}
          min={1}
          dotStyle={{ visibility: "hidden" }}
          max={10000}
          defaultValue={sliderValue}
          step={1}
          marks={{
            1: { style: { color: "#89919B", left: "3px",fontWeight:"bold", fontSize:"14px" }, label: "1" },
            10000: { style: { color: "#89919B",fontWeight:"bold", fontSize:"14px" }, label: "10,000" },
          }}
          onChange={(value) => {
            setSliderValue(value);
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
              marginLeft: sliderValue >5000 ? 0 : 4,
              backgroundColor: "#3B4EF4",
              marginTop: -4,
              borderColor: "#3B4EF4",
              touchAction: "none",
            }),
          }}
        />
      </div>
    );
  }

export default SliderSection