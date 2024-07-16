import introLogo from "../../assets/Intro.svg";
import WordRotate from "../../@/components/magicui/word-rotate";
const Intro = () => {
  return (
    <div className="flex justify-between py-4 mt-[3rem] md:mt-[4rem] gap-6 flex-col md:flex-row">
      <div className="flex flex-col gap-y-4 justify-center items-start flex-1">
        <div className="md:h-[170px] h-[90px] overflow-hidden flex items-end">
        <WordRotate
      className="text-start text-[#3B4EF4] font-[700] text-[28px] md:text-[40px] lg:text-[56px]"
      words={["Craft, Share, Analyse", "Your Opinion, Your Impact","Engage, Participate, Earn"]}
    />
        </div>
        <div className="text-start text-[#132337] font-[700] text-[28px] md:text-[40px] lg:text-[56px]">Embark on Your Survey Adventure Today!</div>
        <div className="text-start text-[#132337] text-[14px] md:text-[18px] lg:text-[20px] font-[400]">
          Unlock the power of Blockchain Supported Survey, Earn reward for your
          data!
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] rounded-[7px] sm:px-[30px] sm:py-[12px] px-[20px] py-[10px] text-[#FFFFFF] sm:font-[500] sm:text-[16px] text-[14px] font-[400]">
            Get Started
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-start md:items-center md:justify-end justify-center">
        <img
          src={introLogo}
          width={20}
          height={20}
          className="w-[400px] h-[400px]"
        ></img>
      </div>
    </div>
  );
};

export default Intro;
