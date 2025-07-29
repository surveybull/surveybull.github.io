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
      id: 1,
      img: (
        <InterviewPrompt className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Interview Prompt",
      description:
        "Ask only power users to book a time in your calendar. Get those juicy details.",
    },
    {
      id: 2,
      img: (
        <Product className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Product-Market Fit Survey",
      description:
        "Find out how disappointed people would be if they could not use your service any more.",
    },
    {
      id: 3,
      title: "Onboarding Segments",
      img: (
        <OnboardingSegments className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out " />
      ),

      description:
        "Get to know your users right from the start. Ask a few questions early, let us enrich the profile.",
    },
    {
      id: 4,
      img: (
        <Learn_from_churn className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Learn from Churn",
      description:
        "Churn is hard, but insightful. Learn from users who changed their mind.",
    },
    {
      id: 5,
      img: (
        <Improve_Trial_CR className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Improve Trial CR",
      description:
        "Take guessing out, convert more trials to paid users with insights.",
    },
    {
      id: 6,
      img: (
        <DocsFeedback className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out " />
      ),
      title: "Docs Feedback",
      description:
        "Clear docs lead to more adoption. Understand granularly what's confusing.",
    },
    {
      id: 7,
      img: (
        <FeatureChaser className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out" />
      ),
      title: "Feature Chaser",
      description:
        "Show a survey about a new feature shown only to people who used it.",
    },
    {
      id: 8,
      img: (
        <FeedbackBox className="h-[34px] w-[34px] fill-[#9333EA] group-hover:fill-white transition-colors duration-700 ease-in-out " />
      ),
      title: "Feedback Box",
      description: "Give users the chance to share feedback in a single click.",
    },
  ];

  const Card = ({ imageSrc, title, description, id }) => {
    return (
      <div
        class={`min-h-[300px] group rounded-xl max-w-[272px] shadow-[8px_8px_30px_0_rgba(151,143,253,0.1)] bg-white border border-transparent hover:border-purple-600/60 transition-colors duration-700 ease-in-out ${
          id % 2 == 0 && "xl:relative xl:top-[2rem]"
        }`}
      >
        <div className="px-4 ">
          <div className="mt-8">
            <div className="w-[70px] h-[70px] rounded-full shadow-[5px_10px_30px_0_rgba(237,239,255,1)] bg-[#EDEFFF] gradient-bg-hover transition-colors duration-700 ease-in-out flex justify-center items-center">
              {imageSrc}
            </div>
          </div>
          <div className="w-fit mt-8 md:text-[16px] text-[14px] text-[#132337] font-HelveticaNeueMedium gradient-text-groupHover">
            {title}{" "}
          </div>
          <div className="mt-4 font-HelveticaNeueLight md:text-[14px] text-[12px] text-[#5A6573] md:leading-[24px] leading-[20px] ">
            {description}{" "}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-y-6 xl:mb-20">
      <div className=" md:text-[36px] text-[24px] flex justify-center font-HelveticaNeueBold leading-9 text-[#132337]">
        <span className="text-center">
          Get started with{" "}
          <span className="gradient-text">best practices</span>
        </span>
      </div>

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

export default Cards;
