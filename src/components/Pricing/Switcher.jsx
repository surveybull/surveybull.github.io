import React from "react";
import {
  useAgeSwitcher,
  useGenderSwitcher,
  useLocationSwitcher,
  useSliderStore,
} from "../../store/Calculator";

function Switcher() {
  const PossibleSwitch = ["Age", "Location", "Gender"];
  const sliderValue = useSliderStore((state) => state.sliderValue);

  const [isAgeChecked, setIsAgeChecked] = useAgeSwitcher((state) => [
    state.isChecked,
    state.setIsChecked,
  ]);
  const [isLocationChecked, setisLocationChecked] = useLocationSwitcher(
    (state) => [state.isChecked, state.setIsChecked]
  );
  const [isGenderChecked, setIsGenderChecked] = useGenderSwitcher((state) => [
    state.isChecked,
    state.setIsChecked,
  ]);
  return (
    <div className=" flex flex-col gap-y-3 mt-5">
      <span className="text-[#132337] text-[18px]">
        Additional Attribute Cost
      </span>
      <div className="flex justify-between flex-wrap md:flex-nowrap gap-x-2 gap-y-4">
        {PossibleSwitch.map((item) => (
          <div className="flex items-center gap-2">
            <span className="text-[#89919B] text-[14px] ">{item}</span>
            <label
              className={`flex items-center relative w-max select-none rounded-full ${
                sliderValue > 25 ? "cursor-pointer" : "cursor-not-allowed"
              }`}
            >
              <input
                disabled={sliderValue > 25 ? false : true}
                type="checkbox"
                className={`${
                  item.toLowerCase() === "age"
                    ? !isAgeChecked
                      ? "bg-transparent border border-[#D0D3D7]"
                      : "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD]"
                    : item.toLowerCase() === "location"
                    ? !isLocationChecked
                      ? "bg-transparent border border-[#D0D3D7]"
                      : "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD]"
                    : !isGenderChecked
                    ? "bg-transparent border border-[#D0D3D7]"
                    : "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD]"
                } appearance-none transition-colors cursor-pointer w-[60px] h-8 rounded-full  disabled:opacity-70 disabled:cursor-not-allowed`}
                onClick={() => {
                  if (item == "Age") {
                    setIsAgeChecked(!isAgeChecked);
                  } else if (item == "Location") {
                    setisLocationChecked(!isLocationChecked);
                  } else {
                    setIsGenderChecked(!isGenderChecked);
                  }
                }}
              />
              <span className="absolute font-HelveticaNeueMedium text-[12px] uppercase right-2 text-[#D0D3D7] top-[9px]">
                No
              </span>
              <span className="absolute font-HelveticaNeueMedium text-[12px] uppercase right-[32px] text-[#E7E9EB] top-[9px]">
                Yes
              </span>

              <span
                className={`w-6 h-6  ${
                  item.toLowerCase() === "age"
                    ? !isAgeChecked
                      ? "right-8 -ml-1 bg-[#D0D3D7]"
                      : "right-0 mr-[5.3px] bg-[#FFFFFF]"
                    : item.toLowerCase() === "location"
                    ? !isLocationChecked
                      ? "right-8 -ml-1 bg-[#D0D3D7]"
                      : "right-0 mr-[5.3px] bg-[#FFFFFF]"
                    : !isGenderChecked
                    ? "right-8 -ml-1 bg-[#D0D3D7]"
                    : "right-0 mr-[5.3px] bg-[#FFFFFF]"
                } absolute rounded-full transform transition-transform  shadow-[-1px_1px_8.1px_0px_rgba(255,255,255,0.25)]`}
              />
            </label>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
export default Switcher;
