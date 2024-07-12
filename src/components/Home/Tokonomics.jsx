import tokonomics from "../../assets/tokonomics.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    title: "Founders",
    text: "6",
    tokens: "600,000,000",
    tge: "10%",
    cliff: "2m",
    color: "#23CE6B",
  },
  {
    title: "Marketing",
    text: "5",
    tokens: "500,000,000",
    tge: "10%",
    cliff: "1m",
    color: "#EC4AA1",
  },
  {
    title: "Partnership & Growth",
    text: "10",
    tokens: "1,000,000,000",
    tge: "10%",
    cliff: "3m",
    color: "#FDEE6D",
  },
  {
    title: "Ecosystem & Devlopment",
    text: "10",
    tokens: "1,000,000,000",
    tge: "10%",
    cliff: "2m",
    color: "#006DF2",
  },
  {
    title: "Staking & Community Incentive ",
    text: "15",
    tokens: "1,500,000,000",
    cliff: "7d",
    color: "#FE6B43",
  },
  {
    title: "Liquidity",
    text: "54",
    tokens: "5,400,000,000",
    color: "#9133EE",
  },
];

const Card = ({ data }) => {
  return (
    <div
      data-aos={"fade-up"}
      className={`w-full mt-4 border border-l-4 shadow-xl rounded-xl `}
      style={{ borderLeftColor: data.color }}
    >
      <div className="px-4 py-2 font-semibold">{data.title}</div>
      <div className="flex justify-between pr-3">
        <div className="px-4 py-2">{data.text}% Allocation</div>
        <div className="px-4 py-2">{data.tokens} Tokens</div>
      </div>
      {(data?.tge || data?.cliff) && (
        <div className="flex justify-between pr-3">
          {data?.cliff ? (
            <div className="px-4 py-2">{data.cliff} Cliff</div>
          ) : (
            <div></div>
          )}
          {data?.tge ? (
            <div className="px-4 py-2">{data.tge} TGE</div>
          ) : (
            <div></div>
          )}
        </div>
      )}
    </div>
  );
};

const Tokonomics = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className=" my-[6rem]">
      <h1
        data-aos={"fade-up"}
        className="text-2xl md:text-4xl flex justify-center text-center   tracking-wide  text-[#484848] "
      >
        Tokenomics
      </h1>
      <div className="md:flex mt-20 px-2  ">
        <div data-aos={"fade-up"} className="w-full flex items-center">
          <img src={tokonomics} />
        </div>
        <div className=" max-w-[500px] px-3 md:pl-6 w-full">
          {cardData.map((item) => {
            return <Card data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Tokonomics;
