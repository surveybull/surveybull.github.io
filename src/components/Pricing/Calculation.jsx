import React, { useEffect, useState } from "react";
import {
  useSliderStore,
  useSwitcherState,
  useTotalCost,
} from "../../store/Calculator";
import { getPerResponseFees } from "../../helper/getPerResponseFees";
import { getFormateNumber } from "../../helper/getFormateNumber";

import { getOneAttributreCost } from "../../helper/getOneAttributeCost";
import { PossibleSwitch } from "../../constant/app";
import { getDecimalSeparateNum } from "../../helper/getDecimalSeparateNum";

function Calculation() {
  const sliderValue = useSliderStore((state) => state.sliderValue);
  const [setTotalCost] = useTotalCost((state) => [state.setTotalCost]);
  const { checkedState, toggleCheckbox } = useSwitcherState();
  const allUnchecked = checkedState.every((checkbox) => !checkbox.isChecked);

  const SurveyResponseCost =
    sliderValue > 25
      ? getFormateNumber(
          (
            Number(sliderValue) * Number(getPerResponseFees(sliderValue))
          ).toString()
        )
      : 0;

  const totalAttributeCost = PossibleSwitch.filter(
    (_, index) => checkedState[index]?.isChecked
  ).reduce((sum, data, index) => {
    const cost =
      sliderValue > 25 ? getOneAttributreCost(SurveyResponseCost, data.mul) : 0;
    return sum + Number(cost);
  }, 0);
  const TotalCost = getFormateNumber(
    (Number(SurveyResponseCost) + Number(totalAttributeCost)).toString()
  );
  useEffect(() => {
    setTotalCost(TotalCost);
  }, [TotalCost]);
  return (
    <div className="flex flex-col gap-y-4 p-4 bg-[#EDEFFF] rounded-[10px] border border-[#E7E9EB] h-full">
      <span className="font-HelveticaNeueBold bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] bg-clip-text text-transparent text-[16px] leading-normal">
        How Pricing Works
      </span>
      <div className="flex flex-col space-y-3 divide-y divide-[#E7E9EB] h-full">
        <div className="flex flex-col gap-1">
          <span className="text-[14px] font-HelveticaNeueBold text-[#132337]">
            Survey Responses : {getDecimalSeparateNum(sliderValue)}
          </span>
          <div className="flex justify-between items-center gap-1">
            <span className="text-[#89919B] text-[12px] font-HelveticaNeueMedium">
              Total Survey Responses Price ({getDecimalSeparateNum(sliderValue)}{" "}
              × ${Number(getPerResponseFees(sliderValue)).toFixed(2)} USD)
            </span>
            <span className="text-[#5868F8] font-HelveticaNeueBold">
              {sliderValue > 25
                ? `$${getDecimalSeparateNum(Number(SurveyResponseCost))}`
                : "Free"}
            </span>
          </div>
        </div>
        {!allUnchecked && (
          <div className="flex flex-col gap-y-1 pt-3">
            <span className="text-[14px] font-HelveticaNeueBold text-[#132337]">
              Token Demography Cost
            </span>
            <div className="flex flex-col gap-y-1">
              {PossibleSwitch.map(
                (data, index) =>
                  checkedState[index].isChecked && (
                    <div className="flex justify-between gap-1 items-center">
                      <span className="text-[#89919B] text-[12px] font-HelveticaNeueMedium capitalize">
                        {data.title} ({SurveyResponseCost} × {data.mul} USD)
                      </span>

                      <span className="text-[#5868F8] font-HelveticaNeueBold">
                       
                        {sliderValue > 25 ?
                          `$${getDecimalSeparateNum(
                            Number(
                              getOneAttributreCost(SurveyResponseCost, data.mul)
                            )
                          )}` : "Free"}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        )}
        <div className="flex justify-between gap-1 items-end pt-3 h-full">
          <span className="text-[14px] font-HelveticaNeueBold text-[#132337]">
            Total Amount
          </span>
          <span className="text-[#5868F8] font-HelveticaNeueBold">
            {sliderValue > 25 ? `$${getDecimalSeparateNum(TotalCost)}` : "Free"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Calculation;
