import InterviewPrompt from "../../assets/InterviewPrompt.svg?react";
import OnboardingSegments from "../../assets/OnboardingSegments.svg?react";
import Learn_from_churn from "../../assets/Learn_from_churn.svg?react";
import Improve_Trial_CR from "../../assets/Improve_Trial_CR.svg?react";
import DocsFeedback from "../../assets/DocsFeedback.svg?react";
import FeatureChaser from "../../assets/FeatureChaser.svg?react";
import FeedbackBox from "../../assets/FeedbackBox.svg?react";
import Product from "../../assets/product.svg?react";


const Cards = () => {
  const columnItem = [
    {
      img: (
        <InterviewPrompt className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),
      title: "Interview Prompt",
      description:
        "Ask only power users to book a time in your calendar. Get those juicy details.",
    },
    {
      img: (
        <Product className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),
      title: "Product-Market Fit Survey",
      description:
        "Find out how disappointed people would be if they could not use your service any more.",
    },
    {
      title: "Onboarding Segments",
      img: (
        <OnboardingSegments className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),

      description:
        "Get to know your users right from the start. Ask a few questions early, let us enrich the profile.",
    },
    {
      img: (
        <Learn_from_churn className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),
      title: "Learn from Churn",
      description:
        "Churn is hard, but insightful. Learn from users who changed their mind.",
    },
    {
      img: (
        <Improve_Trial_CR className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),
      title: "Improve Trial CR",
      description:
        "Take guessing out, convert more trials to paid users with insights.",
    },
    {
      img: (
        <DocsFeedback className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),
      title: "Docs Feedback",
      description:
        "Clear docs lead to more adoption. Understand granularly what's confusing.",
    },
    {
      img: (
        <FeatureChaser className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),
      title: "Feature Chaser",
      description:
        "Show a survey about a new feature shown only to people who used it.",
    },
    {
      img: (
        <FeedbackBox className="h-[34px] w-[34px] fill-[#3B4EF4] group-hover:fill-white " />
      ),
      title: "Feedback Box",
      description:
        "Give users the chance to share feedback in a single click.",
    },
  ];

  const Card = ({ imageSrc, title, description }) => {
    return (
      <div class="h-[300px] group rounded-xl w-[272px] shadow-[8px_8px_30px_0_rgba(151,143,253,0.1)] bg-white border border-transparent hover:border-[rgba(59,78,244,1)] transition-colors duration-500 ease-in-out">
        <div className="px-4 ">
          <div className="mt-8">
            <div className="w-[70px] h-[70px] rounded-full shadow-[5px_10px_30px_0_rgba(237,239,255,1)] bg-[#EDEFFF] group-hover:bg-[rgba(59,78,244,1)] transition-colors duration-500 ease-in-out flex justify-center items-center">
              {imageSrc}
            </div>
          </div>
          <div className="mt-8 md:text-[16px] text-[14px] text-[#132337] font-HelveticaNeueMedium font-HelveticaNeueMedium group-hover:text-[rgba(59,78,244,1)]  ">
            {title}{" "}
          </div>
          <div className="mt-8 font-HelveticaNeueLight md:text-[14px] text-[12px] text-[#5A6573]  ">
            {description}{" "}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className=" md:text-[36px] text-[24px] flex justify-center font-HelveticaNeueBold font-HelveticaNeueBold leading-9 text-[#132337]">
      Get started with<span className="text-[#3B4EF4]">&nbsp;best practices</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-7">
        {columnItem.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center gap-[30px] mb-[30px] ${
              index % 2 === 0 ? "xl:mb-[50px]" : "xl:mt-[50px]"
            }`}
          >
            <Card
              imageSrc={item.img}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
