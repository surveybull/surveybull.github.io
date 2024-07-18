import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import noData from "../../../public/noData.png"
function Questions(
  {faqs}
) {
  
  return (
    
      faqs.length > 0 ?  <Accordion type="multiple" className="flex flex-col gap-y-7 py-10 md:py-20">
      {faqs.map((data, index) => (
        <AccordionItem
          value={index + 1}
          className="border-[1px] border-[#D0D3D7] rounded-[10px]"
        >
          <AccordionTrigger className="group hover:no-underline data-[state=open]:bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] data-[state=open]:rounded-t-[9px] data-[state=open]:rounded-b-none rounded-[10px] data-[state=closed]:bg-[#FFFFFF] px-10 md:text-[16px] data-[state=open]:font-HelveticaNeueBold font-[400] data-[state=open]:text-[#FFFFFF] text-[#132337] text-[14px]">
            <div className="flex justify-between items-center w-full gap-x-2">
              <span className="text-start">{data.que}</span>
              <LuPlus
                className="group-data-[state=closed]:block hidden min-w-5 min-h-5"
                fill="#132337"
              />
              <LuMinus
                className="group-data-[state=closed]:hidden block min-w-5 min-h-5"
                fill="#FFFFFF"
              />
            </div>
          </AccordionTrigger>
          <AccordionContent className="bg-[#FFFFFF] rounded-[9px] px-10 py-6 font-[400] text-[#5A6573] md:text-[16px] text-[12px] leading-[26px]">
            {data.ans}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion> : <div className="flex flex-col justify-center items-center w-full mt-20">
      <img src={noData} alt="noData" height={170} width={170}/>
      <span className="text-[5A6573] md:text-[34px] text-[24px] font-semibold">No Question Found</span>
    </div>
    
   
  );
}

export default Questions;
// border-[2px] border-[#D0D3D7] rounded-[8px]

//className="data-[state=open]:bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] data-[state=open]:border-[2px] data-[state=open]:border-r-none data-[state=open]:border-l-none data-[state=open]:border-y-transparent border-[2px] border-[#D0D3D7] rounded-[8px] data-[state=open]:rounded-b-none data-[state=open]:border-l-[#3B4EF4] data-[state=open]:border-r-[#978FFD] px-[20px]
