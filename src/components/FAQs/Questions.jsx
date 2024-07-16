import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../@/components/ui/accordion";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";
function Questions() {
  const faqs = [
    {
      que: "What is SurveyBull?",
      ans: "SurveyBull is an online platform designed to connect survey creators with participants. It provides a convenient space for surveyors to craft and distribute surveys across various topics and demographics. Participants can take part in these surveys and claim rewards upon completion as an incentive for their involvement.",
    },
    {
      que: "How can SurveyBull help surveyors gain feedback?",
      ans: "SurveyBull assists surveyors in gaining valuable feedback through: Wide Reach, Customization Options, Targeting Specific Audiences, User-Friendly Interface, Incentivized Participation, Real-Time Analytics, Secure and Reliable Data Handling",
    },
    {
      que: "How does SurveyBull ensure unique responses from participants?",
      ans: "SurveyBull uses various verification levels, such as WorldID-Device level and WorldID Orb level, to verify users and maintain the uniqueness of responses.",
    },
    {
      que: "What is WorldID Verification and how does SurveyBull use it?",
      ans: "WorldID provides two levels of verification: [1]. Device Level: Users are verified based on their device. [2]. Orb Level: Users are verified based on their retina.",
    },
    {
      que: "Can I fill surveys on the SurveyBull platform without WorldID-Orb verification?",
      ans: "Yes, you can participate in surveys if the survey creators do not require Orb-level verification for their participants.",
    },
    {
      que: "What are the benefits of providing my personal details to SurveyBull?",
      ans: "Surveyors target participants based on specific attributes. By filling in your personal details, you increase your chances of being part of targeted audience groups, allowing you to earn more rewards by completing more surveys.",
    },
    {
      que: "Should I stake my BULL tokens?",
      ans: " Definitely. Staking your BULL tokens can be beneficial as 20% of the survey fees are rewarded to stakers after each survey is completed. Additionally, 35% of the survey fees are distributed based on the participant's staking weight.",
    },
    {
      que: "As a surveyor, can I target people with specific professional and demographic conditions?",
      ans: "Yes, SurveyBull helps surveyors target their audience based on various geographical, professional, and cultural characteristics.",
    },
    {
      que: "As a surveyor, can I target people who hold specific ERC20, ERC721, or ERC1155 tokens?",
      ans: "Yes, as a Web3 product, SurveyBull offers a pre-check functionality to filter the target audience based on token-gated filters.",
    },
    {
      que: "As a surveyor, can I incentivize my participants to motivate them to complete the survey?",
      ans: " Yes, SurveyBull allows surveyors to incentivize participants post-response with any ERC20, ERC721, or ERC1155 tokens.",
    },
    {
      que: "Why should I refer others to the SurveyBull platform?",
      ans: "Referring others to SurveyBull can earn you more rewards, as 7% of the survey fees are rewarded to participants based on their referral weight. The higher your referral weight, the more BULL tokens you earn.",
    },
    {
      que: "How does SurveyBull ensure the BULL token remains in demand?",
      ans: "SurveyBull burns 5% of the survey fees for each survey. Over time, this creates high demand but limited supply for BULL tokens.",
    },
    {
      que: "How does SurveyBull charge surveyors for creating surveys?",
      ans: "SurveyBull charges surveyors based on the number of responses they seek and the filters they apply. If a survey is closed before reaching the response limit, SurveyBull allows surveyors to redeem the excess fees. This means surveyors only pay for the responses they receive and can get back the excess amount.",
    },
  ];
  return (
    <Accordion type="multiple" className="flex flex-col gap-y-7 py-10 md:py-20">
      {faqs.map((data, index) => (
        <AccordionItem
          value={index + 1}
          className="border-[1px] border-[#D0D3D7] rounded-[10px]"
        >
          <AccordionTrigger className="group hover:no-underline data-[state=open]:bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] data-[state=open]:rounded-t-[9px] data-[state=open]:rounded-b-none rounded-[10px] data-[state=closed]:bg-[#FFFFFF] px-10 md:text-[16px] data-[state=open]:font-[700] font-[400] data-[state=open]:text-[#FFFFFF] text-[#132337] text-[14px]">
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
    </Accordion>
  );
}

export default Questions;
// border-[2px] border-[#D0D3D7] rounded-[8px]

//className="data-[state=open]:bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] data-[state=open]:border-[2px] data-[state=open]:border-r-none data-[state=open]:border-l-none data-[state=open]:border-y-transparent border-[2px] border-[#D0D3D7] rounded-[8px] data-[state=open]:rounded-b-none data-[state=open]:border-l-[#3B4EF4] data-[state=open]:border-r-[#978FFD] px-[20px]
