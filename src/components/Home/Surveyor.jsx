import Authenticity from "../../assets/Authenticity.svg"
import Chain from "../../assets/Chain.svg"
import Human from "../../assets/Human.svg"
const cardData = [
    {
        src: Authenticity,
        alt: "Authenticity",
        text: "Authenticity Guaranteed",
        description: "Say farewell to the headache of fake reviews. SurveyBull's implementation of the WorldID protocol guarantees that every review collected is from a genuine individual, providing surveyors with authentic insights they can rely on.",
    },
    {
        src: Human,
        alt: "Human",
        text: "Uniquely Human Responses",
        description: "SurveyBull ensures that only unique human responses are included in your survey data, eliminating the noise of duplicate or automated submissions and delivering high-quality, actionable insights.",
    },
    {
        src: Chain,
        alt: "Chain",
        text: "On-Chain Verification",
        description: "With SurveyBull, surveyors can verify the authenticity of every response directly on the blockchain, providing an immutable record of the survey data and enhancing transparency and trust in the process.",
    }
];

const Surveyor = () => {

  
    return (
        <div className="flex flex-col items-center gap-20 skew-y-6 xl:skew-y-3 py-16">
        <div className="flex items-center md:flex-row flex-col gap-[1.5rem]  ">
            <div className="flex-1 text-[#FFFFFF] md:text-[36px] text-[24px] fomt-[700]">Revolutionize Surveying: Say Goodbye to <span className="text-[#978FFD]">Fake Reviews</span> with On-Chain <span className="text-[#978FFD]">Verifiable Proof</span> of Personhood
            </div>
            <hr className="bg-[#89919B] md:h-[100px] md:w-[1px] w-[50%] h-[1px]"></hr>
            <div className="flex-1 text-[#89919B] md:text-[16px] text-[14px] font-[400]">At SurveyBull, we're dedicated to equipping surveyors with the tools they need to gather authentic data and drive informed decisions. With pioneering WorldID protocol, we're eradicating fake reviews and unreliable responses, ensuring that surveyors receive only unique, human-generated feedback that is verifiable on the blockchain.</div>
        </div>
        <div className="flex md:flex-row justify-between flex-col gap-x-5 gap-y-7">
            {cardData.map(card=>(
                <div className="flex flex-col items-center justify-center border-[1.5px] border-[#56595f] hover:border-[#89919B] rounded-[15px] bg-gradient-to-r from-[#FFFFFF05] to-[#FFFFFF33]  px-4 py-8 gap-4 group hover:cursor-pointer flex-1 transition-colors duration-500 ease-in-out" >
                    <div><img src={card.src} alt={card.alt} width={20} height={20} className="w-[100px] h-[100px] transition ease-in-out group-hover:-translate-y-1 group-hover:scale-110 duration-700"></img></div>
                    <div className="text-[#EDEFFF] text-center md:text-[18px] text-[14px] group-hover:text-[#978FFD] transition-colors duration-500 ease-in-out">{card.text}</div>
                    <div className="text-[#89919B] text-center md:text-[14px] text-[12px]">{card.description}</div>
                </div>
            ))}
        </div>
    </div>
    )
}


export default Surveyor

