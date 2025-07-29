import BlockchainTransparency from "../../assets/BlockchainTransparency.svg?react";
import CompliancewithRegulations from "../../assets/CompliancewithRegulations.svg?react";
import FairCompensation from "../../assets/FairCompensation.svg?react";
import InclusiveApproach from "../../assets/InclusiveApproach.svg?react";
import IndustryCollaboration from "../../assets/IndustryCollaboration.svg?react";
import SeamlessIntegration from "../../assets/SeamlessIntegration.svg?react";
import TokenGatedSurveys from "../../assets/TokenGatedSurveys.svg?react";
import WorldCoin from "../../assets/worldCoin.svg?react";

const Why = () => {
  const columnItem = [
    {
      id: "1",
      img: (
        <BlockchainTransparency className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Blockchain Transparency",
      description:
        "We leverage decentralized blockchain technology to ensure transparency and accountability in data transactions.",
    },
    {
      id: "2",
      img: (
        <WorldCoin className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Verified Human Contributors ",
      description:
        "Through the integration of the WorldCoin protocol, we authenticate each data contributor, eliminating the risk of fake or duplicate submissions and ensuring the integrity of the data.",
    },
    {
      id: "3",
      title: "Fair Compensation",
      img: (
        <FairCompensation className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),

      description:
        "Our platform rewards data providers fairly and promptly with ETH and WLD tokens, providing tangible incentives for their valuable contributions and promoting a sustainable data economy.",
    },
    {
      id: "4",
      img: (
        <TokenGatedSurveys className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Token Gated Surveys",
      description:
        "Our platform employs a technique wherein only individuals possessing a specific token, along with the requisite amount, are permitted to participate in the survey.",
    },
    {
      id: "5",
      img: (
        <InclusiveApproach className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Inclusive Approach",
      description:
        " From traditional platforms to emerging Web3 applications, we empower a diverse range of platforms to embrace transparent and decentralized survey mechanisms.",
    },
    {
      id: "6",
      img: (
        <IndustryCollaboration className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Industry Collaboration",
      description:
        "We facilitate collaboration with existing data brokers, incentivizing their adoption of our system and ensuring a sustainable decentralized survey ecosystem.",
    },
    {
      id: "7",
      img: (
        <CompliancewithRegulations className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Compliance with Regulations",
      description:
        "Our platform adheres to stringent data protection regulations like GDPR, safeguarding user rights and privacy.",
    },
    {
      id: "8",
      img: (
        <SeamlessIntegration className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Seamless Integration",
      description:
        "Our SDK enables easy integration of decentralized surveys into any Web2 or Web3 product, ensuring a smooth transition.",
    },
  ];

  const Card = ({ imageSrc, title, description,id }) => {
    return (
      <div
        class={`min-h-[356px] group rounded-xl max-w-[272px] shadow-[8px_8px_30px_0_rgba(151,143,253,0.1)] bg-white border border-transparent hover:border-purple-600/60 transition-colors duration-700 ease-in-out ${
          Number(id) % 2 == 0 && "xl:relative xl:top-[2rem]"
        }`}
      >
        <div className="px-4 ">
          <div className="mt-8">
            <div className="w-[70px] h-[70px] rounded-full shadow-[5px_10px_30px_0_rgba(237,239,255,1)] bg-[#EDEFFF] gradient-bg-hover transition-colors duration-700 ease-in-out flex justify-center items-center">
              {imageSrc}
            </div>
          </div>
          <div className="w-fit mt-8 font-HelveticaNeueMedium gradient-text-groupHover text-[14px] md:text-[16px] md:leading-[16px] leading-[14px] ">
            {title}{" "}
          </div>
          <div className="mt-8 font-HelveticaNeueLight text-[12px] md:text-[14px] text-[#5A6573]  md:leading-[24px] leading-[20px]  ">
            {description}{" "}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="xl:mb-[5rem] sm:mb-[1rem]">
      <h1 className=" text-2xl md:text-4xl flex justify-center font-medium font-HelveticaNeueBold md:leading-9 leading-[24px] mb-[2.75rem] tracking-wider text-[#484848]">
        {"Why"}&nbsp;
        <span className="gradient-text inline-block">SurveyBull</span>&nbsp;?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-7">
        {columnItem.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-[30px] mb-[30px] xl:mb-[0px] ${
              index % 2 === 0 ? "xl:mb-[30px]" : "xl:mt-[30px]"
            }`}
          >
            <Card
              imageSrc={item.img}
              title={item.title}
              description={item.description}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
