import SDKSnippet from "../../assets/gif/SDKSnippet.gif";
const SDK = () => {
  return (
    <div className="flex flex-col gap-y-10 ">
      <div className="flex flex-col gap-y-7">
        <span className="text-center md:text-[36px] md:leading-[52px] text-[24px] leading-[40px] font-HelveticaNeueBold text-[#132337] max-w-[800px] mx-auto">
          <span className="gradient-text inline-block">Software</span> Development Kit (SDK)
          for Seamless{" "}
          <span className="gradient-text inline-block">Survey Integration</span>
        </span>
        <span className="text-center text-[#5A6573] text-[14px] leading-[24px] font-[400] md:text-[16px] md:leading-[26px] sm:px-11 lg:px-24">
          The SurveyBull SDK empowers effortless creation and management of
          on-chain surveys, offering seamless participant sign-up and survey
          submission functionalities. This versatile SDK is meticulously crafted
          for integration with any web3 or web2 product, unlocking the full
          array of SurveyBull features.
        </span>
      </div>
      <div className="flex lg:flex-row flex-col-reverse gap-7 justify-center items-center">
        <div className="flex flex-col gap-y-5 flex-1 justify-evenly">
          <div className="flex flex-col gap-y-3">
            <span className="w-fit gradient-text md:text-[20px] text-[18px] font-HelveticaNeueMedium ">
              Streamlined Integration
            </span>
            <span className="md:text-[16px] text-[14px] font-[400] text-[#5A6573] leading-[24px] md:leading-[26px]">
              Imagine creating a Telegram Bot customized for surveys using the
              SurveyBull SDK. With this integration, generating surveys within
              the Telegram app becomes intuitive, facilitating survey
              distribution across diverse groups for active engagement. The
              user-friendly nature of the SDK enhances accessibility and
              interaction, turning Telegram into a dynamic hub for efficient
              data collection.
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="w-fit gradient-text md:text-[20px] text-[18px] font-HelveticaNeueMedium">
              Expanding Accessibility
            </span>
            <span className="md:text-[16px] text-[14px] font-[400] text-[#5A6573] leading-[24px] md:leading-[26px]">
              Furthermore, the SurveyBull SDK extends its utility to existing
              web2 data brokers seeking to adopt web3 survey capabilities. By
              seamlessly integrating the SDK, these data brokers can transition
              towards decentralized survey functionalities while earning
              affiliation fees. This collaborative approach ensures a seamless
              integration of web3 survey capabilities into existing data
              brokerage systems, bridging the gap between conventional and
              decentralized survey ecosystems.
            </span>
          </div>
        </div>
        <div className="flex-1">
          <img src={SDKSnippet} alt="SDKSnippet" className="max-h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default SDK;
