import blockchain from "../../assets/BlockchainAdoption.svg";
import userprofile from "../../assets/User_Satisfaction_Surveys.svg";
import health from "../../assets/Healthcare_Research_Consortium.svg";
import crypto from "../../assets/Cryptocurrency_Education_&_Awareness.svg";
import investor from "../../assets/STO_Investor_Sentiment_Analysis.svg";
import marketTrend from "../../assets/Crypto_Market_Trends_and_Predictions.svg";
import realestate from "../../assets/RealEstate.svg";
import Political_Engagement_Tracker from "../../assets/Political_Engagement_Tracker.svg";
import TokenGatedSurvey from "../../assets/TokenGatedSurvey.svg";
import Airdrop from "../../assets/Airdrop.svg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SurveyCard = ({ imageSrc, title, description }) => {
  return (
    <div className="flex h-full flex-col justify-start sm:max-w-[20rem] w-full gap-y-4 mx-auto group hover:cursor-pointer">
      <div>
        <img src={imageSrc} alt="" />
      </div>
      <div className="flex h-max gap-2 w-full relative">
        <div className="h-[30%] bg-[#3B4EF4] group-hover:h-full w-[1px] transition-height duration-500 ease-in-out absolute left-[-10px]"></div>
        <div className="flex flex-col gap-y-2">
          <span className="text-[#132337] text-[16px] font-HelveticaNeueMedium group-hover:text-[#3B4EF4] transition-height duration-500 ease-in-out">
            {title}
          </span>
          <span className="text-[#5A6573] text-[14px] font-[400]">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

const Cases = () => {
  return (
    <div className="flex flex-col gap-y-10 py-[80px]">
      <h1 className="flex justify-center text-[#132337] sm:text-[36px] text-[24px] font-[700] ">
        Applications
      </h1>
      <div className="flex flex-col gap-y-12 justify-center items-center">
        <div className="xl:flex grid sm:grid-cols-2 grid-cols-1 justify-evenly gap-12 ">
          <SurveyCard
            imageSrc={Airdrop}
            title="Token Airdrops"
            description="Revamp the crypto airdrop process by collecting feedback from prospective cryptocurrency product users"
          />
          <SurveyCard
            imageSrc={TokenGatedSurvey}
            title="Token Gated Surveys"
            description="Our platform employs a technique wherein only individuals possessing a specific token, along with the requisite amount, are permitted to participate in the survey."
          />
          <SurveyCard
            imageSrc={blockchain}
            title="Blockchain Adoption Surveys"
            description="Blockchain startups and projects use the survey platform to gather feedback on user experiences, preferences, and challenges related to adopting blockchain technology."
          />
          <div className="xl:hidden block">
            <SurveyCard
              imageSrc={crypto}
              title="Cryptocurrency Education & Awareness"
              description="A crypto education platform utilizes surveys to understand the knowledge gaps and learning preferences of its audience."
            />
          </div>
        </div>

        <div className="grid grid-cols-1     sm:grid-cols-2 xl:grid-cols-4 gap-12 ">
          <div className="xl:block hidden">
            <SurveyCard
              imageSrc={crypto}
              title="Cryptocurrency Education & Awareness"
              description="A crypto education platform utilizes surveys to understand the knowledge gaps and learning preferences of its audience."
            />
          </div>

          <SurveyCard
            imageSrc={investor}
            title="ICO/STO Investor Sentiment Analysis"
            description="Companies launching Initial Coin Offerings (ICOs) or Security Token Offerings (STOs) use the survey platform to gauge investor sentiment."
          />
          <SurveyCard
            imageSrc={marketTrend}
            title="Crypto Market Trends and Predictions"
            description="A market research firm in the crypto space conducts regular surveys to gather predictions and opinions on market trends, price movements, and potential upcoming developments."
          />
          <SurveyCard
            imageSrc={realestate}
            title="Real Estate Market Analysis"
            description="Real estate developers leverage the platform to conduct market research on evolving housing preferences."
          />
          <div className="xl:hidden block">
            <SurveyCard
              imageSrc={Political_Engagement_Tracker}
              title="Political Engagement Tracker"
              description="A civic engagement group employs the platform to gauge public sentiment on political issues over time."
            />
          </div>
        </div>
        <div className="xl:flex grid sm:grid-cols-2 grid-cols-1 justify-evenly gap-12  ">
          <div className="xl:block hidden">
            <SurveyCard
              imageSrc={Political_Engagement_Tracker}
              title="Political Engagement Tracker"
              description="A civic engagement group employs the platform to gauge public sentiment on political issues over time."
            />
          </div>
          <SurveyCard
            imageSrc={userprofile}
            title="User Satisfaction Surveys"
            description="A cryptocurrency wallet provider conducts regular surveys to understand user satisfaction, feature preferences, and security concerns."
          />
          <SurveyCard
            imageSrc={health}
            title="Healthcare Research Consortium"
            description="A consortium of healthcare researchers collaborates on a platform to gather data for epidemiological studies."
          />
        </div>
      </div>
    </div>
  );
};

export default Cases;
