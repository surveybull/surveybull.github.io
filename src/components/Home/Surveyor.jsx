import Authenticity from "../../assets/Authenticity.svg";
import Chain from "../../assets/Chain.svg";
import Human from "../../assets/Human.svg";
import SurveyorGif from "../../assets/gif/Revolutionize-Surveying-GIF.gif";
const cardData = [
  {
    src: Authenticity,
    alt: "Authenticity",
    text: "Authenticity Guaranteed",
    description:
      "Say farewell to the headache of fake reviews. SurveyBull's implementation of the WorldID protocol guarantees that every review collected is from a genuine individual, providing surveyors with authentic insights they can rely on.",
  },
  {
    src: Human,
    alt: "Human",
    text: "Uniquely Human Responses",
    description:
      "SurveyBull ensures that only unique human responses are included in your survey data, eliminating the noise of duplicate or automated submissions and delivering high-quality, actionable insights.",
  },
  {
    src: Chain,
    alt: "Chain",
    text: "On-Chain Verification",
    description:
      "With SurveyBull, surveyors can verify the authenticity of every response directly on the blockchain, providing an immutable record of the survey data and enhancing transparency and trust in the process.",
  },
];

const Surveyor = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-20 skew-y-6 xl:skew-y-3 py-16">
      <div className="flex items-center flex-col gap-[1.5rem]  ">
        <div className="flex-1 text-[#FFFFFF] md:text-[36px] text-[24px] font-HelveticaNeueBold">
          Revolutionize Surveying: Say Goodbye to{" "}
          <span className="text-[#978FFD]">Fake Reviews</span> with On-Chain{" "}
          <span className="text-[#978FFD]">Verifiable Proof</span> of Personhood
        </div>
        <div className="w-full lg:hidden block ">
          <img
            src={SurveyorGif}
            alt="SurveyorGif"
            className="h-full relative left-[-43px]"
          />
        </div>
        <div className="flex flex-col gap-y-7">
          {cardData.map((card) => (
            <div className="flex lg:flex-row flex-col items-center border-[1.5px] border-[#56595f] rounded-[15px] bg-gradient-to-r from-[#FFFFFF05] to-[#FFFFFF33]  px-4 py-8 gap-4 group hover:cursor-pointer flex-1 shadow-[3px_9px_35px_0px_rgba(19,35,55,0.06)]">
              <div className="flex justify-start w-full">
                <img
                  src={card.src}
                  alt={card.alt}
                  width={20}
                  height={20}
                  className="min-w-[100px] min-h-[100px] "
                ></img>
              </div>
              <div className="flex flex-col gap-y-3 ">
                <div className="md:text-[18px] text-[14px] text-[#978FFD]">
                  {card.text}
                </div>
                <div className="text-[#89919B]  md:text-[14px] text-[12px]">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-full w-full lg:block hidden">
        <img src={SurveyorGif} alt="SurveyorGif" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Surveyor;

//transition ease-in-out group-hover:-translate-y-1 group-hover:scale-110 duration-700
