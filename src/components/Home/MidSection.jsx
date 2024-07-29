import bluetick from "../../assets/bluetick.svg";
import intro from "../../assets/Intro.svg";
import Staking from "../../assets/Staking.svg";
import Effortless from "../../assets/gif/Effortless.gif";
import EarnTokenGif from "../../assets/gif/EarnToken.gif";
import Refer from "../../assets/gif/Earn&Refer.gif";
const SurveyBuilding = () => {
  const FeatureItem = ({ text }) => (
    <div className="sm:text-base text-[14px] py-2 flex items-center border-l-2 hover:border-l-[#3B4EF4] hover:text-[#3B4EF4] transition-colors duration-500 ease-in-out">
      <img
        className="sm:h-[28px] sm:w-[28px] h-[20px] w-[20px] mx-2"
        src={bluetick}
        alt=""
      />
      {text}
    </div>
  );

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:my-14 my-9 gap-[2rem] ">
      <div className="lg:w-[50%] w-full">
        <div className="md:text-4xl md:leading-[52px]  lg:text-start text-center text-2xl leading-[40px] font-HelveticaNeueBold">
          <span className=" text-[rgba(59,78,244,1)]">
            {"Effortless Survey"}
          </span>
          &nbsp;{"Building With SurveyBull"}
        </div>
        <div className=" text-[14px] md:text-[16px] md:leading-[26px] leading-[24px] font-HelveticaNeueLight text-[rgba(90,101,115,1)] lg:text-start text-center mt-[1.5rem] ">
          SurveyBull's intuitive tools and robust features simplify the survey
          creation process, empowering users of all experience levels. Our
          platform delivers a seamless, effortless experience from start to
          finish, whether you're a seasoned researcher or new to survey
          building.
        </div>
        <div className="w-full flex items-center justify-center lg:hidden mt-5">
          <img src={Effortless} alt="intro" className="max-h-[450px] " />
        </div>
        <div className=" mb-12 mt-8 grid sm:grid-cols-2 grid-cols-1 gap-5">
          <div className="">
            <FeatureItem text="User-Friendly Interface" />
            <div className="text-base py-2 flex items-center border-l-2 h-2"></div>
            <FeatureItem text="Advanced Analytical Tools" />
            <div className="text-base py-2 flex items-center border-l-2 h-2"></div>
            <FeatureItem text="Dynamic Logic and Branching" />
          </div>
          <div className="">
            <FeatureItem text="Flexible Question Types" />
            <div className="text-base py-2 flex items-center border-l-2 h-2"></div>
            <FeatureItem text="Multi - Platform Compatibility" />
            <div className="text-base py-2 flex items-center border-l-2 h-2"></div>
            <FeatureItem text="Automated Distribution " />
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:flex lg:justify-end hidden items-center">
        <img src={Effortless} alt="intro" className="h-fit " />
      </div>
    </div>
  );
};

const EarnToken = () => {
  const sections = [
    {
      title: "Participation Rewards",
      description:
        "Earn tokens by participating in surveys on our platform. Our smart contracts ensure transparent and fair reward distribution, guaranteeing you fair compensation for your contributions. Trust us to provide a rewarding survey experience.",
    },
    {
      title: "Transparent Process",
      description:
        "Our smart contract-based reward system securely holds tokens until they are distributed to participants. Once surveys close, the system automatically calculates rewards based on predefined criteria such as response quality and completeness, ensuring a transparent and efficient distribution process.",
    },
    {
      title: "Claiming Your Rewards",
      description:
        "Once a survey closes, participants on the SurveyBull platform are notified of the available rewards. Claiming these rewards is straightforward - simply interact with the smart contract through our intuitive user interface to get started. You can trust that our transparent and deterministic distribution process will ensure you receive the appropriate token allocation based on your contributions.",
    },
  ];

  const Section = ({ title, description }) => (
    <div className="">
      <div className="md:text-xl text-[14px] font-medium font-HelveticaNeueMedium text-[rgba(59,78,244,1)] px-2 border-l-2 border-l-[#3B4EF4]">
        {title}
      </div>
      <div className="md:text-sm text-[12px] font-HelveticaNeueLight text-[rgba(90,101,115,1)] border-l-2 px-2 py-5 leading-[20px]">
        {description}
      </div>
    </div>
  );

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:my-14 my-9 gap-[2rem]">
      <div className="lg:w-[50%] w-full">
        <div className="md:text-4xl md:leading-[52px] text-2xl leading-[40px] text-center lg:text-start font-HelveticaNeueBold">
          <span className="text-[#3B4EF4]">Earn Tokens</span> For{" "}
          <span className="text-[#3B4EF4]">Sharing</span> Your Thoughts
        </div>
        <div className=" md:text-base md:leading-[26px] text-[14px] leading-[24px] font-HelveticaNeueLight text-[rgba(90,101,115,1)] mt-[1.5rem] text-center lg:text-start">
          At SurveyBull, we deeply value your opinions and insights. We've
          created a unique opportunity for you to earn rewards by sharing your
          thoughts through surveys. Our platform provides a seamless experience
          where your contributions are not only appreciated, but also generously
          rewarded.
        </div>
        <div className="w-full flex items-center justify-center lg:hidden mt-8">
          <img src={EarnTokenGif} alt="intro" className="max-h-[600px]" />
        </div>
        <div className=" mt-10 mb-6 ">
          <div className="">
            {sections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                description={section.description}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-[50%] lg:flex lg:justify-end hidden items-center">
        <img src={EarnTokenGif} alt="intro" className="h-fit" />
      </div>
    </div>
  );
};

const Grow = () => {
  const referralSections = [
    {
      title: "Expand the Community",
      description:
        "Encourage your friends, colleagues, and network to join SurveyBull and contribute to our vibrant community of participants.",
    },
    {
      title: "Earn Rewards",
      description:
        "For every successful referral, you'll earn rewards based on the referral's activity on the platform. The more referrals you bring in, the more you stand to earn.",
    },
    {
      title: "Foster Network Growth",
      description:
        "By actively promoting SurveyBull and sharing your positive experiences, you'll play a pivotal role in expanding our network and fostering community growth.",
    },
  ];

  const ReferralCard = ({ title, description }) => (
    <div className="px-3 py-5 border rounded-md shadow-[3px_9px_35px_0px_rgba(19,35,55,0.06)] border-l-[#3B4EF4] border-l-4 my-5 hover:border-[#384ef4] transition-colors duration-700 ease-in-out">
      <div className="font-HelveticaNeueMedium text-[#384ef4] text-[14px] md:text-lg">
        {title}
      </div>
      <div className="mr-4 text-[12px] md:text-sm text-[#5A6573] my-2 leading-[20px]">
        {description}
      </div>
    </div>
  );

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:my-14 my-9 gap-[2rem] ">
      <div className="lg:w-[50%] w-full">
        <div className="md:text-4xl md:leading-[52px] text-2xl leading-[40px] font-HelveticaNeueBold text-center lg:text-start">
          Grow With Us:&nbsp;
          <span className=" text-[rgba(59,78,244,1)]">{"Refer & Earn"}</span>
        </div>
        <div className=" md:text-base md:leading-[26px] text-[14px] leading-[24px] lg:text-start text-center  text-[rgba(90,101,115,1)] mt-[1.5rem] ">
          Invite others to join the SurveyBull community and reap the rewards
          through our referral program. Here's how you can benefit:
        </div>
        <div className="w-full flex items-center justify-center lg:hidden mt-8">
          <img src={Refer} alt="intro" className="max-h-[570px]" />
        </div>
        <div className="my-10">
          {referralSections.map((section, index) => (
            <ReferralCard
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-[50%] lg:flex lg:justify-end hidden items-center">
        <img src={Refer} alt="intro" className="h-fit" />
      </div>
    </div>
  );
};

const Boost = () => {
  const sections = [
    {
      title: "Support Platform Growth",
      description:
        "Staking your BULL Tokens demonstrates your commitment to the SurveyBull platform, contributing to its long-term sustainability and success.",
    },
    {
      title: "Earn Additional Incentives",
      description:
        "As a token staker, you become eligible to earn a share of rewards reserved specifically for participants who stake their tokens. The more tokens you stake, the greater your potential rewards.",
    },
    {
      title: "Participate in Governance",
      description:
        "Stakers may also have the opportunity to participate in governance decisions, helping shape the future direction of the platform.",
    },
  ];

  const Card = ({ title, description }) => (
    <div className="px-3 py-5 border rounded-md shadow-[3px_9px_35px_0px_rgba(19,35,55,0.06)] border-l-[#3B4EF4] border-l-4 my-5 hover:border-[#384ef4] transition-colors duration-700 ease-in-out">
      <div className="font-HelveticaNeueMedium text-[#384ef4] md:text-[18px] text-[14px]">
        {title}
      </div>
      <div className="mr-4 text-[12px] md:text-sm text-[#5A6573] my-2 leading-[20px]">
        {description}
      </div>
    </div>
  );

  return (
    <div className="flex lg:flex-row flex-col-reverse lg:mt-14 lg:mb-8 mb-4 mt-9 gap-[2rem]">
      <div className="lg:w-[50%] w-full">
        <div className="md:text-4xl md:leading-[52px] text-2xl leading-[40px] lg:text-start text-center font-HelveticaNeueBold">
          Boost Your Rewards With&nbsp;
          <span className=" text-[rgba(59,78,244,1)]">{"Staking"}</span>
        </div>
        <div className=" md:text-base md:leading-[26px] text-[14px] leading-[24px] text-center lg:text-start text-[rgba(90,101,115,1)] mt-[1.5rem]">
          By staking your BULL Tokens, you not only contribute to the stability
          and growth of the SurveyBull ecosystem but also unlock a stream of
          additional rewards. Here's how staking works:
        </div>
        <div className="w-full flex items-center justify-center lg:hidden mt-8 ">
          <img src={Staking} alt="intro" className="max-h-[500px]" />
        </div>
        <div className="my-10">
          {sections.map((section, index) => (
            <Card
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
      <div className="lg:w-[50%] w-full lg:flex lg:justify-end items-center  hidden">
        <img src={Staking} alt="intro" className="h-fit" />
      </div>
    </div>
  );
};

const MidSection = () => {
  return (
    <div>
      <SurveyBuilding />
      <EarnToken />
      <Grow />
      <Boost />
    </div>
  );
};

export default MidSection;
