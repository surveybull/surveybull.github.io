import preHook from "../../assets/onChainPre.svg";
import postHook from "../../assets/onChainPost.svg";
import bluetick from "../../assets/bluetick.svg";

const data = [
  {
    imageSrc: preHook,
    imageAlt: "preHook",
    title: "On Chain Pre Verification Hooks",
    sections: [
      {
        text: "Craft smart contracts to verify user eligibility before survey participation",
      },
      {
        text: "Define criteria such as token ownership or participation history ",
      },
      {
        text: "Implement validation functions within contracts to evaluate user credentials",
      },
      {
        text: "Facilitate seamless survey submissions upon meeting criteria, ensuring efficiency and accuracy",
      },
    ],
    reverse: false,
  },
  {
    imageSrc: postHook,
    imageAlt: "postHook",
    title: "On Chain Post Action Hooks",
    sections: [
      {
        text: "Establish triggers for post-submission actions, such as token distribution or airdrops, governed by specified conditions. ",
      },
      {
        text: "Define conditions like response thresholds or specific outcomes to activate triggers.",
      },
      {
        text: "Monitor submission progress and verify conditions for trigger activation.",
      },
      {
        text: "Utilize smart contracts to automatically execute defined actions, such as distributing tokens, upon meeting the specified conditions",
      },
    ],
    reverse: true,
  },
];

const SmartContractStep = ({ description }) => {
  return (
    <div className=" m-3 group mt-14 xl:mt-3   relative rounded-[10px] bg-white shadow-[8px_8px_30px_0px_rgba(151,143,253,0.1)]">
      <div className=" top-[-14px] left-[15px] absolute ">
        <img
          className="h-[34px] w-[34px] group-hover:scale-125 transition duration-500 ease-in-out mx-2"
          src={bluetick}
          alt="blue tick"
        />
      </div>
      <div className="relative h-min flex  pt-7 mt-3 px-2 pb-8">
        <div className="absolute  w-[3px]  h-[30%] mx-2 group-hover:h-[60%] transition-height duration-500 ease-in-out  bg-[#3B4EF4]"></div>
        <div className="text-gray-700 group-hover:text-[#3B4EF4] ml-5 md:text-[16px] text-[14px] leading-[24px] md:leading-[26px]">
          {description}
        </div>
      </div>
    </div>
  );
};

const DecentralizedAction = () => {
  const contentContainerClass = "max-w-xl";

  const ContentComponent = ({
    imageSrc,
    imageAlt,
    title,
    subTitle,
    sections,
    reverse,
  }) => (
    <div
      className={
        reverse
          ? "flex flex-row-reverse justify-between py-[30px]"
          : "flex flex-row justify-between "
      }
    >
      <div className={contentContainerClass}>
        {/* <div className={titleClass}>{title}</div> */}
        <div className="my-5">
          <div className="lg:py-6 grid grid-cols-2  ">
            <div className="flex flex-col ">
              <SmartContractStep description={sections[0].text} />
              <SmartContractStep description={sections[1].text} />
            </div>
            <div className="flex flex-col md:mt-12">
              <SmartContractStep description={sections[2].text} />
              <SmartContractStep description={sections[3].text} />
            </div>
          </div>
        </div>
      </div>
      <div className="  flex align-middle">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );

  const MobileViewCard = ({ data }) => {
    return (
      <div className=" my-3 mx-6 mt-8">
        <div className="text-center text-lg ">{data.title}</div>
        <div className="flex justify-center">
          <div className=" flex justify-center w-full h-full mt-5 ">
            <img src={data.imageSrc} alt={"preHook"} />
          </div>
        </div>
        <div className="py-4">
          {data.sections.map((x, index) => {
            return <SmartContractStep description={x.text} />;
          })}
        </div>
      </div>
    );
  };

  return (
    <div className=" mt-[4.5rem]">
      <div className=" text-[24px] font-HelveticaNeueBold leading-[40px] tracking-wider md:text-4xl md:leading-[52px] mx-0 sm:mx-24   text-center ">
        {"Decentralized Actions: Elevating "}
        <span className=" text-[rgba(59,78,244,1)]">
          {" Survey Engagement "}
        </span>{" "}
        in Crypto Products
      </div>
      <div className="flex justify-center">
        <div className="mt-10 text-center max-w-[1100px] leading-[24px] m:leading-[26px] px-2 flex justify-center text-[14px] md:text-[16px] font-[400] tracking-wide text-[#5A6573]">
        SurveyBull elevates survey engagement for crypto products by integrating pre-conditions such as token ownership or staking. Participants who meet these criteria can earn exclusive rewards, token distributions, and NFT giveaways. This approach not only drives higher participation rates but also enhances the value of involvement, aligning incentives with the unique ecosystem of crypto products.
        </div>
      </div>
      <div className="hidden xl:block">
        {data.map((element) => {
          return (
            <div>
              <div className="text-center text-[18px] md:text-[28px] mt-14 font-HelveticaNeueMedium ">
                {element.title}
              </div>
              <ContentComponent
                imageSrc={element.imageSrc}
                imageAlt={element.imageAlt}
                title={element.title}
                subTitle={element.subTitle}
                sections={element.sections}
                reverse={element.reverse}
              />
            </div>
          );
        })}
      </div>
      <div className="xl:hidden">
        {data.map((element) => {
          return <MobileViewCard data={element} />;
        })}
      </div>
    </div>
  );
};

export default DecentralizedAction;
