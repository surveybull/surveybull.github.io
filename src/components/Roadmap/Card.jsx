import React from "react";

function Card({ data }) {
  return (
    <div className="flex flex-col max-w-[400px] rounded-[12px] shadow-[3px_9px_35px_0px_rgba(19,35,55,0.06)]">
      <div className="flex justify-between items-center gap-x-2 p-3 gradient-bg rounded-t-[12px]">
        <span className="text-[#FFFFFF] font-[500] md:text-[18px] text-[14px]">
          {data.heading}
        </span>
        <span
          className={` ${
            data.status.toLowerCase() == "done"
              ? "bg-[#6CD46A]"
              : data.status.toLowerCase() == "in-progress"
              ? "bg-[#E5A72F]"
              : "bg-[#EC864D]"
          } px-[20px] py-[6px] text-[#FFFFFF] rounded-[4px] text-[14px]`}
        >
          {data.status}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-y-3 bg-[#FFFFFF] rounded-b-[12px]">
        {data.description.map((card) => (
          <div className="flex flex-col gap-y-3">
            <span className="text-[#132337] text-[14px] font-[400]">
              {card.heading}
            </span>
            <ul className="ml-[1.75rem] text-[#5A6573] text-[12px] font-[400] flex flex-col gap-y-3 leading-[18px]">
              {card.description.map((des) => (
                <li className="list-disc">{des}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
