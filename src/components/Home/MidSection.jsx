import bluetick from "../../assets/bluetick.svg";
import intro from "../../assets/Intro.svg";
import Staking from "../../assets/Staking.svg";
import Effortless from "../../assets/gif/Effortless.gif";
import EarnTokenGif from "../../assets/gif/EarnToken.gif";
import Refer from "../../assets/gif/Earn&Refer.gif";
const SurveyBuilding = () => {
  const FeatureItem = ({ text }) => (
    <div className="text-base py-2 flex items-center border-l-2 hover:border-l-[#3B4EF4] hover:text-[#3B4EF4] transition-colors duration-500 ease-in-out">
      <img className="h-[28px] w-[28px] mx-2" src={bluetick} alt="" />
      {text}
    </div>
  );

  return (
    <div className="flex md:flex-row flex-col-reverse my-14 gap-12 ">
      <div className="md:w-[50%] w-full">
        <div className="md:text-4xl text-2xl font-HelveticaNeueBold">
          <span className=" text-[rgba(59,78,244,1)]">
            {"Effortless Survey"}
          </span>
          &nbsp;{"Building With SurveyBull"}---
        </div>
        <div className=" text-base font-HelveticaNeueLight text-[rgba(90,101,115,1)] mt-12 mr-20 ">
        SurveyBull's intuitive tools and robust features simplify the survey creation process, empowering users of all experience levels. Our platform delivers a seamless, effortless experience from start to finish, whether you're a seasoned researcher or new to survey building.

        </div>
        <div className=" my-12 grid grid-cols-2">
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
      <div className="md:w-[50%] w-full flex md:justify-end items-center justify-center ">
        <img src={Effortless} alt="intro" />
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
      <div className="text-xl font-medium font-HelveticaNeueMedium text-[rgba(59,78,244,1)] px-2 border-l-2 border-l-[#3B4EF4]">
        {title}
      </div>
      <div className="text-sm font-HelveticaNeueLight text-[rgba(90,101,115,1)] border-l-2 px-2 py-5">
        {description}
      </div>
    </div>
  );

  return (
    <div className="flex md:flex-row flex-col-reverse my-15 gap-12">
      <div className="md:w-[50%] w-full">
        <div className="md:text-4xl text-2xl font-HelveticaNeueBold">
          <span className=" text-[rgba(59,78,244,1)]">{"Earn Tokens"}</span>
          &nbsp;{"For"}&nbsp;
          <span className=" text-[rgba(59,78,244,1)]">{"Sharing"}</span>
          &nbsp;{"Your Thoughts"}
        </div>
        <div className=" text-base font-HelveticaNeueLight text-[rgba(90,101,115,1)] mt-12 mr-20 ">
        At SurveyBull, we deeply value your opinions and insights. We've created a unique opportunity for you to earn rewards by sharing your thoughts through surveys. Our platform provides a seamless experience where your contributions are not only appreciated, but also generously rewarded.
        </div>
        <div className=" my-12 mr-10 ">
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
      <div className="md:w-[50%] w-full flex md:justify-end items-center justify-center">
        <img src={EarnTokenGif} alt="intro" />
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
    <div className="px-3 py-5 border rounded-md shadow-[3px_9px_35px_0px_rgba(19,35,55,0.06)] border-l-[#3B4EF4] border-l-4 my-5 hover:border-[#384ef4]">
      <div className="font-HelveticaNeueMedium text-[#384ef4] text-lg">
        {title}
      </div>
      <div className="mr-4 text-sm text-[#5A6573] my-2">{description}</div>
    </div>
  );

  return (
    <div className="flex md:flex-row flex-col-reverse my-14 gap-12 ">
      <div className="md:w-[50%] w-full">
        <div className="md:text-4xl text-2xl font-HelveticaNeueBold">
          Grow With Us:&nbsp;
          <span className=" text-[rgba(59,78,244,1)]">{"Refer & Earn"}</span>
        </div>
        <div className=" text-base  text-[rgba(90,101,115,1)] mt-10 mr-20 ">
          Invite others to join the SurveyBull community and reap the rewards
          through our referral program. Here's how you can benefit:
        </div>
        <div className="my-12">
          {referralSections.map((section, index) => (
            <ReferralCard
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] w-full flex md:justify-end items-center justify-center ">
        <img src={Refer} alt="intro" />
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
    <div className="px-3 py-5 border rounded-md shadow-[3px_9px_35px_0px_rgba(19,35,55,0.06)] border-l-[#3B4EF4] border-l-4 my-5 hover:border-[#384ef4]">
      <div className="font-HelveticaNeueMedium text-[#384ef4] text-lg">
        {title}
      </div>
      <div className="mr-4 text-sm text-[#5A6573] my-2">{description}</div>
    </div>
  );

  return (
    <div className="flex md:flex-row flex-col-reverse my-14 gap-12">
      <div className="md:w-[50%] w-full">
        <div className="md:text-4xl text-2xl font-HelveticaNeueBold">
          Boost Your Rewards With Staking&nbsp;
          <span className=" text-[rgba(59,78,244,1)]">{"Staking"}</span>
        </div>
        <div className=" text-base  text-[rgba(90,101,115,1)] mt-12 mr-20 ">
          By staking your BULL Tokens, you not only contribute to the stability
          and growth of the SurveyBull ecosystem but also unlock a stream of
          additional rewards. Here's how staking works:
        </div>
        <div className="my-12">
          {sections.map((section, index) => (
            <Card
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
      <div className="md:w-[50%] w-full flex md:justify-end items-center justify-center">
        <img src={Staking} alt="intro" />
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
