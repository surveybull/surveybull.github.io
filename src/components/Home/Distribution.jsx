import distribution from "../../assets/distribution.svg";
import Staker from "../../assets/Stakers.svg";
import Referral from "../../assets/Referral.svg";
import Participants from "../../assets/Participants.svg";
import Company from "../../assets/Company.svg";
import Staker_prts from "../../assets/Staker_prts.svg";
const rewardData = [
  {
    title: "Stakers(30%)",
    description:
      "Reserved for people who staked their BULL tokens, supporting the platform and earning additional incentives.",
    imgSrc: Staker,
  },
  {
    title: "Referral Participants(20%)",
    description:
      "Encourages community growth and network expansion by rewarding participants who have refered others to the platform, with rewards allocated based on their referrals.",
    imgSrc: Referral,
  },

  {
    title: "Participants(20%)",
    description:
      "Directly allocated based on their engagement level and the quality of their responses. The more actively involved participants are, the greater their share of rewards.",
    imgSrc: Participants,
  },
  {
    title: "Company(10%)",
    description:
      "Allocated to support platform development, operations, and future initiatives, ensuring continuous improvement and sustainability.",
    imgSrc: Company,
  },
  {
    title: "Staker Participants(20%)",
    description:
      "Participants who staked their BULL tokens receive an additional portion of rewards, calculated based on their stake weight. This incentivizes long-term engagement and commitment to the platform.",
    imgSrc: Staker_prts,
  },
];

const Distribution = () => {
  return (
    <div className="flex flex-col items-start gap-y-7 skew-y-6 xl:skew-y-3 py-16">
      <h1 className="md:text-[36px] text-[24px] font-HelveticaNeueBold text-[#FFFFFF] leading-[34px] md:leading-[52px] ">
        Weighted <span className="text-[#978FFD]">Revenue Sharing</span>{" "}
        Mechanism
      </h1>
      <div className="text-[14px] leading-[26px] max-w-[1000px] font-[400] text-[#89919B] md:text-[16px]">
        SurveyBull employs a sophisticated reward distribution mechanism,
        meticulously designed to ensure fairness and to uphold our commitment to
        rewarding participation while nurturing community growth. Our weighted
        approach to distributing rewards benefits both participants and
        stakeholders alike. Here's a breakdown of how it operates:
      </div>
      <div className="flex justify-center items-center p-5 w-full">
        <img src={distribution} alt="sharing" className="max-h-[600px] " />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {rewardData.map((data) => (
          <div className="flex flex-col gap-y-3">
            <div className="flex gap-2 items-center">
              <img src={data.imgSrc} alt="rewardData" />
              <span className="text-[#FFFFFF] md:text-[18px] text-[14px] font-[500]">
                {data.title}
              </span>
            </div>
            <div className="md:text-[16px] text-[12px] font-[400] text-[#89919B] md:leading-[26px] leading-[20px]">
              {data.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Distribution;
