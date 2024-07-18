import KeyPointLine from "../../assets/KeyPointLine.svg";
import KeyFeature from "../../assets/KeyFeature.svg";
import Dot from "../../assets/Dot.svg";

const PricingKey = () => {
  return (
    <div className="py-4 mt-[2rem] md:mt-[2rem]">
      <div className="lg:flex-row  flex flex-col-reverse lg:justify-between justify-center items-center">
        <div className="flex mt-4  lg:mt-0 justify-center items-center">
          <img src={KeyFeature} alt="Your Image" class="" />{" "}
        </div>
        <div className="">
          <div className="text-left text-4xl my-4 font-HelveticaNeueBold">
            Key <span className=" text-[rgba(59,78,244,1)]"> Features</span>
          </div>
          <div className="flex">
            <img
            style={{height:"340px"}}
              className="mt-[2px] hidden md:block   h-max  sm:w-[16px] sm:h-[340px] "
              src={KeyPointLine}
              height={340}
              
              alt="Your Image"
            />{" "}
            <div className="md:px-4 max-w-[600px]">
              <div className="flex">
                <div className="block md:hidden m-[2px] w-[16px]  ">
                  <img
                    className="w-[16px] min-w-4"
                    src={Dot}
                    height={16}
                    width={16}
                    alt="Your Image"
                    class=""
                  />
                </div>
                <div className="pl-3 md:pl-0">
                  <div className="text-base md:text-base font-HelveticaNeueMedium font-HelveticaNeueMedium">
                    Transparent Pricing
                  </div>
                  <div className="text-xs md:text-sm  text-[#5A6573] py-[8px]">
                    Know the cost upfront in BULL tokens based on your survey
                    configuration.
                  </div>
                </div>
              </div>
              <div className="mt-[4px] md:mt-[12px]">
                <div className="flex">
                  <div className="block md:hidden m-[2px] w-[16px]  ">
                    <img
                      src={Dot}
                      className="w-[16px] min-w-4"
                      height={16}
                      width={16}
                      alt="Your Image"
                    />
                  </div>
                  <div className="pl-3 md:pl-0">
                    <div className="text-base md:text-base font-HelveticaNeueMedium font-HelveticaNeueMedium">
                      Currency Conversion
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px]">
                      USD pricing is converted into BULL tokens at the
                      prevailing exchange rate at the time of survey creation.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[18px]">
                <div className="flex">
                  <div className="block md:hidden m-[2px] w-[16px]  ">
                    <img
                      src={Dot}
                      className="w-[16px] min-w-4"
                      height={16}
                      width={16}
                      alt="Your Image"
                    />
                  </div>
                  <div className="pl-3 md:pl-0">
                    <div className="text-base md:text-base font-HelveticaNeueMedium font-HelveticaNeueMedium">
                      Blockchain Security
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px]">
                      Utilize BULL tokens for secure and efficient transactions.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[18px]">
                <div className="flex">
                  <div className="flex item md:hidden m-[2px] w-[16px]  ">
                    <img
                      src={Dot}
                      className="w-[16px] min-w-4 "
                      height={16}
                      width={16}
                      alt="Your Image"
                    />
                  </div>
                  <div className="pl-3 md:pl-0">
                    <div className="text-base md:text-base font-HelveticaNeueMedium font-HelveticaNeueMedium">
                      Flexible Customization
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px]">
                      Tailor surveys with advanced targeting options.
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>
              <div className="mt-[14px]">
                <div className="flex">
                  <div className="  block md:hidden m-[2px] w-[16px]  ">
                    <img
                      src={Dot}
                      className="w-[16px] min-w-4"
                      height={16}
                      width={16}
                      alt="Your Image"
                    />
                  </div>
                  <div className="pl-3 md:pl-0">
                    <div className="text-base md:text-base font-HelveticaNeueMedium font-HelveticaNeueMedium">
                      API Integration
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px]">
                      Seamlessly integrate with your existing systems for
                      streamlined data management.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingKey;
