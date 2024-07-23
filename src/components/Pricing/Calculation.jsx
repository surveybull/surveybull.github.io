import React from "react";
import {
  useAgeSwitcher,
  useGenderSwitcher,
  useLocationSwitcher,
  useSliderStore,
} from "../../store/Calculator";
import { getPerResponseFees } from "../../helper/getPerResponseFees";
import { getFormateNumber } from "../../helper/getFormateNumber";

function Calculation() {
  const isAgeChecked = useAgeSwitcher((state) => state.isChecked);
  const isLocationChecked = useLocationSwitcher((state) => state.isChecked);
  const isGenderChecked = useGenderSwitcher((state) => state.isChecked);
  const sliderValue = useSliderStore((state) => state.sliderValue);
  const SurveyResponseCost =
    sliderValue > 25
      ? getFormateNumber(
          (
            Number(sliderValue) * Number(getPerResponseFees(sliderValue))
          ).toString()
        )
      : 0;
  const AgeCost =
    sliderValue > 25 && isAgeChecked
      ? getFormateNumber((Number(SurveyResponseCost) * 0.1).toString())
      : 0;
  const LocationCost =
    sliderValue > 25 && isLocationChecked
      ? getFormateNumber((Number(SurveyResponseCost) * 0.2).toString())
      : 0;
  const GenderCost =
    sliderValue > 25 && isGenderChecked
      ? getFormateNumber((Number(SurveyResponseCost) * 0.3).toString())
      : 0;
  const TotalCost = getFormateNumber(
    (
      Number(SurveyResponseCost) +
      Number(AgeCost) +
      Number(LocationCost) +
      Number(GenderCost)
    ).toString()
  );
  return (
    <div className="flex flex-col gap-y-4 p-4 bg-[#EDEFFF] rounded-[10px] border border-[#E7E9EB]">
      <span className="font-HelveticaNeueBold bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] bg-clip-text text-transparent text-[16px] leading-normal">
        How Pricing Works
      </span>
      <div className="flex flex-col space-y-3 divide-y divide-[#E7E9EB]">
        <div className="flex flex-col gap-1">
          <span className="text-[14px] font-HelveticaNeueBold text-[#132337]">
            Survey Responses : {sliderValue}
          </span>
          <div className="flex justify-between items-center gap-1">
            <span className="text-[#89919B] text-[12px] font-HelveticaNeueMedium">
              Total Survey Responses Price ({sliderValue} × $
              {Number(getPerResponseFees(sliderValue)).toFixed(2)} USD)
            </span>
            <span className="text-[#5868F8] font-HelveticaNeueBold">
              ${SurveyResponseCost}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-1 pt-3">
          <span className="text-[14px] font-HelveticaNeueBold text-[#132337]">
            Additional Attribute Cost
          </span>
          <div className="flex justify-between gap-1 items-center">
            <span className="text-[#89919B] text-[12px] font-HelveticaNeueMedium">
              Age ({SurveyResponseCost} × 0.1 USD)
            </span>
            <span className="text-[#5868F8] font-HelveticaNeueBold">
              ${AgeCost}
            </span>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <span className="text-[#89919B] text-[12px] font-HelveticaNeueMedium">
              Location ({SurveyResponseCost} × 0.2 USD)
            </span>
            <span className="text-[#5868F8] font-HelveticaNeueBold">
              ${LocationCost}
            </span>
          </div>
          <div className="flex justify-between gap-1 items-center">
            <span className="text-[#89919B] text-[12px] font-HelveticaNeueMedium">
              Gender ({SurveyResponseCost} × 0.3 USD)
            </span>
            <span className="text-[#5868F8] font-HelveticaNeueBold">
              ${GenderCost}
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-1 items-center pt-3">
          <span className="text-[14px] font-HelveticaNeueBold text-[#132337]">
            Total Amount
          </span>
          <span className="text-[#5868F8] font-HelveticaNeueBold">
            ${TotalCost}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Calculation;
