import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
import noData from "../../../public/noData.png";
import { Link } from "react-router-dom";
function Questions({ faqs }) {
  const [accordion, setAccordion] = useState();

  return faqs.length > 0 ? (
    <Accordion
      type="multiple"
      defaultValue={["Item-1"]}
      className="flex flex-col gap-y-7 pt-10 md:pt-12"
    >
      {faqs.map((data, index) => (
        <AccordionItem
          value={`Item-${data.id}`}
          className="border-[1px] border-[#D0D3D7] rounded-[10px]"
        >
          <AccordionTrigger className="group hover:no-underline data-[state=open]:bg-gradient-to-r from-[#5465f7] to-purple-600 data-[state=open]:rounded-t-[9px] data-[state=open]:rounded-b-none rounded-[10px] data-[state=closed]:bg-[#FFFFFF] px-10 md:text-[16px] data-[state=open]:font-HelveticaNeueBold font-[400] data-[state=open]:text-[#FFFFFF] text-[#132337] text-[14px]">
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
            <div>{data.ans}</div>
            <Link to={"/pricing/#calculator"} className="text-[#5868F8]">
              {data.link && data.link}
            </Link>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  ) : (
    <div className="flex flex-col justify-center items-center w-full mt-20">
      <img src={noData} alt="noData" height={170} width={170} />
      <span className="text-[5A6573] md:text-[34px] text-[24px] font-semibold">
        No Question Found
      </span>
    </div>
  );
}

export default Questions;
