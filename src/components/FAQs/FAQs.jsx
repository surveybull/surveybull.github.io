import React, { useEffect, useState } from "react";
import NavBar from "../Navbar/NavBar";
import FAQsBg from "../../assets/background/FAQsBg.jpg";
import Header from "./Header";
import Questions from "./Questions";
import QuestionsBg from "../../assets/background/QuestionsBg.jpg";
import FAQsMobileBg from "../../assets/background/FAQsMobileBg.jpg";
import SEO from "../SEO";
function FAQs() {
  const faqs = [
    {
      id: 1,
      que: "What is SurveyBull?",
      ans: "SurveyBull is an online platform designed to connect survey creators with participants. It provides a convenient space for surveyors to craft and distribute surveys across various topics and demographics. Participants can take part in these surveys and claim rewards upon completion as an incentive for their involvement.",
    },
    {
      id: 2,
      que: "How can SurveyBull help surveyors gain feedback?",
      ans: "SurveyBull assists surveyors in gaining valuable feedback through: Wide Reach, Customization Options, Targeting Specific Audiences, User-Friendly Interface, Incentivized Participation, Real-Time Analytics, Secure and Reliable Data Handling",
    },
    {
      id: 3,
      que: "How does SurveyBull ensure unique responses from participants?",
      ans: "SurveyBull uses various verification levels, such as WorldID-Device level and WorldID Orb level, to verify users and maintain the uniqueness of responses.",
    },
    {
      id: 4,
      que: "What is WorldID Verification and how does SurveyBull use it?",
      ans: "WorldID provides two levels of verification: [1]. Device Level: Users are verified based on their device. [2]. Orb Level: Users are verified based on their retina.",
    },
    {
      id: 5,
      que: "Can I fill surveys on the SurveyBull platform without WorldID-Orb verification?",
      ans: "Yes, you can participate in surveys if the survey creators do not require Orb-level verification for their participants.",
    },
    {
      id: 6,
      que: "What are the benefits of providing my personal details to SurveyBull?",
      ans: "Surveyors target participants based on specific attributes. By filling in your personal details, you increase your chances of being part of targeted audience groups, allowing you to earn more rewards by completing more surveys.",
    },
    // {
    //   id: 7,
    //   que: "Should I stake my BULL tokens?",
    //   ans: " Definitely. Staking your BULL tokens can be beneficial as 20% of the survey fees are rewarded to stakers after each survey is completed. Additionally, 35% of the survey fees are distributed based on the participant's staking weight.",
    // },
    // {
    //   id: 8,
    //   que: "Which tokens will I earn as staking Rewards?",
    //   ans: "You can earn ETH and BULL as staking rewards.",
    // },
    {
      id: 7,
      que: "As a surveyor, can I target people with specific profession and demographic conditions?",
      ans: "Yes, SurveyBull helps surveyors target their audience based on various geographical, profession, and cultural characteristics.",
    },
    {
      id: 8,
      que: "As a surveyor, can I target people who hold specific ERC20, ERC721, or ERC1155 tokens?",
      ans: "Yes, as a Web3 product, SurveyBull offers a pre-check functionality to filter the target audience based on token-gated filters.",
    },
    {
      id: 9,
      que: "As a surveyor, can I incentivize my participants to motivate them to complete the survey?",
      ans: " Yes, SurveyBull allows surveyors to incentivize participants post-response with any ERC20, ERC721, or ERC1155 tokens.",
    },
    // {
    //   id: 12,
    //   que: "Why should I refer others to the SurveyBull platform?",
    //   ans: "Referring others to SurveyBull can earn you more rewards, as 20% of the survey fees are rewarded to participants based on their referral weight. The higher your referral weight, the more WLD tokens you earn.",
    // },
    // {
    //   id: 13,
    //   que: "How does SurveyBull ensure the WLD token remains in demand?",
    //   ans: "SurveyBull burns 5% of the survey fees for each survey. Over time, this creates high demand but limited supply for WLD tokens.",
    // },
    {
      id: 10,
      que: " How does SurveyBull charge surveyors for creating surveys?",
      ans: "SurveyBull charges surveyors based on the number of responses they seek and the filters they apply.",
      link: "Please refer to the pricing calculator here.",
    },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const filterData =
    searchQuery === ""
      ? faqs
      : faqs.filter((data) =>
          data.que.toLowerCase().includes(searchQuery.toLowerCase())
        );
//  useEffect(() => {
//    window.scrollTo({ top: 0, behavior: "smooth" });
//  }, []);
  return (
    <>
      <SEO
        name={"SurveyBull"}
        title={"SurveyBull | FAQs"}
        type={"FAQs"}
        description={"FAQs Page"}
      />
      {/* <section className="bg-[url('./assets/gif/FAQsGif.gif')] bg-cover bg-repeat-round"> */}
      <section>
        <div className="xl:max-w-[1300px] p-7 pt-[3rem] mx-auto">
          <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </section>

      <section className="sm:bg-[url('./assets/background/QuestionsBg.jpg')] bg-[url('./assets/background/QuestionMobileBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Questions faqs={filterData} />
        </div>
      </section>
    </>
  );
}

export default FAQs;
