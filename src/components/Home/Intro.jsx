import introLogo from "../../assets/Intro.svg";
import AnimatedText from "./AnimatedText";
const Intro = () => {
  return (
    <div className="flex justify-center mt-[3rem] lg:mt-[7rem] mb-[3rem] gap-6 flex-col md:flex-row">
      <div className="flex flex-col gap-y-[1.5rem] sm:gap-y-8 justify-center md:items-center items-start flex-1">
        <AnimatedText />
        <div className=" text-[#132337] font-HelveticaNeueMedium text-[28px] md:text-[40px] xl:text-[60px] mt-[-20px] leading-[38px] md:leading-[65px] xl:leading-[75px] text-start md:text-center max-w-[700px]">
          Embark on Your Survey Adventure Today!
        </div>
        <div className="text-start text-[#132337] text-[14px] md:text-[20px] font-[400] md:leading-[30px] leading-[24px]">
        Unlock Insights, Earn Rewards: The Blockchain Survey Revolution
        </div>
        <div>
          <button
            className="bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] sm:px-[30px] sm:py-[12px] px-[20px] py-[10px] text-[#FFFFFF] sm:font-HelveticaNeueMedium sm:text-[16px] text-[14px] font-[400]"
            onClick={() => {
              window.open("https://testnet.surveybull.io/auth/login");
            }}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
