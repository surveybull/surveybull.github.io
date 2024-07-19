import Collapsible from "./Collapsible";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const collapsibleData = [
  {
    title: "What is World ID?",
    content:
      "World ID is a digital identity solution enabling users to prove their uniqueness and humanity anonymously via zero-knowledge proofs and advanced privacy-preserving cryptography.",
  },
  {
    title:
      "How do you prevent multiple entries for the same person on a survey?",
    content:
      "The use of World ID enables a method where only unique and one-time entries occur on the survey.",
  },
  {
    title: "Can I participate in surveys without orb authentication?",
    content: "No, you need to authenticate the World ID to the orb level.",
  },
  {
    title: "How will i be profited by staking the Bull tokens?",
    content:
      "For every survey ends, Reward distribution has a portion of rewards for the stakers. That will be distributed as the Survey ends. The more you Stake the more you Earn",
  },
  {
    title: "Is survey entry free?",
    content: "Yes, you just need World ID authenticated to orb level.",
  },
  {
    title: "How can I earn more?",
    content:
      "You earn by participating in surveys. To earn more, you can stake the token as Stakers. Additionally, you can increase rewards with referral bonuses, as rewards increase with referrals.",
  },
  {
    title:
      "I want only people with my tokens with them to participate in survey is it possible?",
    content:
      "Yes it is possible, Through our Token Gated Feature. that filters the participant and let participants holding the token join",
  },
  {
    title: "Why should i refer the platform to other people?",
    content:
      "For people who refer the platform to other people to participate, there is a portion for people who refer. These are distributed at the Survey's end",
  },
];

const Faqs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" my-[6rem]">
      <h1
        data-aos={"fade-up"}
        className="text-2xl md:text-4xl flex justify-center text-center   tracking-wide  text-[#484848] "
      >
        Frequently Asked Questions
      </h1>
      <div className="my-24">
        {collapsibleData.map((x) => {
          return (
            <div data-aos={"fade-up"} className="px-5 my-4">
              <div className="max-w-[50rem] border bg-white rounded-2xl mx-auto">
                <Collapsible title={x.title} children={x.content} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faqs;
