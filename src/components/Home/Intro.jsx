import introLogo from "../../assets/Intro.svg";
const Intro = () => {
  return (
    <div className="flex justify-between py-4 mt-[3rem] md:mt-[4rem] gap-6 flex-col md:flex-row">
      <div className="flex flex-col gap-y-4 justify-center items-start flex-1">
        <div className="text-start text-[#3B4EF4] font-[700] text-[28px] md:text-[40px] lg:text-[56px]">
          Craft, Share, Analyse 
        </div>
        <div className="text-start text-[#132337] font-[700] text-[28px] md:text-[40px] lg:text-[56px]">Embark on Your Survey Adventure Today!</div>
        <div className="text-start text-[#132337] text-[14px] md:text-[18px] lg:text-[20px] font-[400]">
          Unlock the power of Blockchain Supported Survey, Earn reward for your
          data!
        </div>
        <div>
          <button className="bg-gradient-to-r from-[#3B4EF4] to-[#978FFD] rounded-[7px] px-3 py-2 text-[#FFFFFF] font-[500] text-[16px]">
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
