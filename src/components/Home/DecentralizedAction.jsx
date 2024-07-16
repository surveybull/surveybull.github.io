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
        text: "Develop smart contracts for user eligibility verification before survey ",
      },
      {
        text: "Define eligibility criteria like token ownership or participation history. ",
      },
      {
        text: "Implement validation functions within contracts to assess user credentials.",
      },
      {
        text: "Proceed with survey submission if criteria met, reject otherwise ",
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
        text: "Set triggers for post-submission actions, like token distribution or airdrops, based on conditions. ",
      },
      {
        text: "Define triggering conditions such as response thresholds or specific outcomes.",
      },
      {
        text: "Monitor submission progress and verify conditions for action triggers.",
      },
      {
        text: "Execute predefined actions, like distributing tokens, using smart contracts upon meeting conditions.",
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
          alt=""
        />
      </div>
      <div className="relative h-min flex  pt-7 mt-3 px-2 pb-8">
        <div className="absolute  w-[3px]  h-[30%] mx-2 group-hover:h-[60%] transition-height duration-500 ease-in-out  bg-[#3B4EF4]"></div>
        <div className="text-gray-700 group-hover:text-[#3B4EF4] ml-5">
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
      <div data-aos={"fade-up"} className="  flex align-middle">
        <img src={imageSrc} alt={imageAlt} />
      </div>
    </div>
  );

  const MobileViewCard = ({ data }) => {
    return (
      <div className=" my-3 mx-6 mt-8">
        <div className="px-5 py-3">
          <div className="text-center   text-lg ">{data.title}</div>
          <div className="flex justify-center">
            <div className=" flex justify-center w-full h-full mt-5 ">
              <img src={data.imageSrc} alt={"preHook"} />
            </div>
          </div>
          <div className="my-4 py-4">
            {data.sections.map((x, index) => {
              return <SmartContractStep description={x.text} />;
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" my-[4rem]">
      <div className=" text-4xl font-HelveticaNeueBold leading-9 tracking-wider md:text-4xl   text-center mx-24">
        {"Decentralized Actions: Elevating "}
        <span className=" text-[rgba(59,78,244,1)]">
          {" Survey Engagement "}
        </span>{" "}
        in Crypto Products
      </div>
      <div className="flex justify-center">
        <div className="mt-10 text-center max-w-[1000px] px-2 flex justify-center font-[400] tracking-wide text-[#5A6573]">
          At SurveyBull, we value your opinions and insights. That's why we've
          created an opportunity for you to earn tokens simply by sharing your
          thoughts through surveys. Our platform offers a seamless experience
          where your contributions are not only appreciated but also rewarded.
          Here's how it works
        </div>
      </div>
      <div className="hidden xl:block">
        {data.map((element) => {
          return (
            <div>
              <div className="text-center text-[28px] mt-14 font-[500] ">
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
