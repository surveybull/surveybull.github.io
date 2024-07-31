import { useLocation } from "react-router-dom";
import tokonomics from "../../assets/tokonomicsChart.svg";
import { useEffect } from "react";
import { transferGivenRoute } from "../../helper/transferGivenRoute";
const cardData = [
  {
    title: "Marketing",
    text: "5",
    tokens: "500,000,000",
    tge: "10%",
    cliff: "1m",
    textColor: "#F35B72",
    startColor: "#E590C4",
    endColor: "#F35B72",
  },
  {
    title: "Founders",
    text: "6",
    tokens: "600,000,000",
    tge: "10%",
    cliff: "2m",
    textColor: "#F37B51",
    startColor: "#FCA283",
    endColor: "#F37B51",
  },

  {
    title: "Partnership & Growth",
    text: "10",
    tokens: "1,000,000,000",
    tge: "10%",
    textColor: "#997CF4",
    startColor: "#C6B9EF",
    endColor: "#997CF4",
  },
  {
    title: "Ecosystem & Devlopment",
    text: "10",
    tokens: "1,000,000,000",
    tge: "10%",
    cliff: "2m",
    textColor: "#5CF1B1",
    startColor: "#A7ECFF",
    endColor: "#5CF1B1",
  },
  {
    title: "Staking & Community Incentive ",
    text: "15",
    tokens: "1,500,000,000",
    cliff: "7d",
    textColor: "#FFCB69",
    startColor: "#FFCB69",
    endColor: "#FFDB9A",
  },
  {
    title: "Liquidity",
    text: "54",
    tokens: "5,400,000,000",
    textColor: "#7C91FF",
    startColor: "#7C91FF",
    endColor: "#41AFFF",
  },
];

const Card = ({ data }) => {
  return (
    <div
      className={`w-full border-r-[2px] border-t-[2px] border-b-[2px] border-[#FFFFFF14] shadow-xl relative rounded-xl `}
    >
      <div
        className="absolute left-[3px] md:left-[2px] top-[-2px] bottom-[-2px] w-2"
        style={{
          background: `linear-gradient(to bottom, ${data.startColor}, ${data.endColor})`,
          borderRadius: "12px 0px 0 12px",
        }}
      ></div>
      <div className="h-full w-full flex flex-col justify-evenly pl-6 pr-4 py-3 gap-y-5 rounded-xl">
        <div className="flex justify-between items-center">
          <span
            className="text-[14px] md:text-[16px] font-[500]"
            style={{ color: data.textColor }}
          >
            {data.title}
          </span>
          <span className="md:text-[14px] text-[12px] font-[400] text-[#B8BDC3] text-end">
            {data.text}% allocation
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="md:text-[14px] text-[12px] text-[#E7E9EB] font-[500]">
            {data.tokens} Tokens
          </span>
          <div className="md:text-[14px] text-[12px] font-[400] text-[#B8BDC3] text-end">
            {data.cliff && <span>{data.cliff} CLIFF</span>}
            {data.cliff && data.tge && <span>, </span>}
            {data.tge && <span>{data.tge} TGE</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tokonomics = () => {
 
  return (
    <div className="skew-y-6 xl:skew-y-3 py-16">
      <h1
        className="flex justify-center text-center text-[#FFFFFF] md:text-[36px] text-[24px] font-HelveticaNeueBold"
        
      >
        Tokenomics
      </h1>
      <div
        className="flex gap-8 lg:flex-row flex-col sm:mt-10 mt-6 rounded-[25px] sm:p-10 p-5  bg-[#FFFFFF0A] border-2 border-[#FFFFFF0A] 
 "
      >
        <div className="flex items-center justify-center">
          <img
            src={tokonomics}
            className="md:min-w-[600px] md:min-h-[600px] min-w-[200px] min-h-[200px]"
          />
        </div>
        <div className="w-full grid lg:grid-cols-1 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {cardData.map((item) => {
            return <Card data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tokonomics;
