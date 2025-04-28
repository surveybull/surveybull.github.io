import KeyPointLine from "../../assets/KeyPointLine.svg";
import KeyFeature from "../../assets/KeyFeature.svg";
import Dot from "../../assets/Dot.svg";

const PricingKey = () => {
  return (
    <div className="">
      <div className="lg:flex-row  flex flex-col-reverse lg:justify-between justify-center items-center gap-8">
        <div className="flex mt-4  lg:mt-0 justify-center items-center">
          <img src={KeyFeature} alt="Your Image" class="" />{" "}
        </div>
        <div className="">
          <div className="text-left text-2xl md:text-4xl mb-7 font-HelveticaNeueBold">
            Key <span className=" text-[rgba(59,78,244,1)]"> Features</span>
          </div>
          <div className="flex">
            <img
              // style={{ height: "380px" }}
              className="mt-[2px] hidden md:block   h-max  sm:w-[20px] sm:h-[360px] lg:h-[385px] xl:h-[360px] "
              src={KeyPointLine}
              height={360}
              alt="Your Image"
            />{" "}
            <div className="md:px-4  max-w-[600px]">
              <div className="flex">
                <div className="block md:hidden m-[2px] w-[16px]  ">
                  <img
                    className="w-[16px] min-w-4"
                    src={Dot}
                    height={16}
                    width={16}
                    alt="Your Image"
                  />
                </div>
                <div className="pl-3 md:pl-0">
                  <div className="text-[14px] md:text-base  font-HelveticaNeueMedium">
                    Transparent Pricing
                  </div>
                  <div className="text-xs md:text-sm  text-[#5A6573] py-[8px] lg:py-0  xl:py-[8px] md:leading-[24px] leading-[20px]">
                    Know the cost upfront in ETH and WLD tokens based on your survey
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
                    <div className="text-sm md:text-base  font-HelveticaNeueMedium">
                      Currency Conversion
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px] md:leading-[24px] leading-[20px]">
                      USD pricing is converted into WLD tokens at the
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
                  <div className="pl-3 lg:pt-2 xl:pt-0 md:pl-0">
                    <div className="text-sm md:text-base  font-HelveticaNeueMedium">
                      Blockchain Security
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px] md:leading-[24px] leading-[20px]">
                      Utilize WLD tokens for secure and efficient transactions.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[18px]">
                <div className="flex">
                  <div className="flex items-start md:hidden m-[2px] w-[16px]  ">
                    <img
                      src={Dot}
                      className="w-[16px] min-w-4 "
                      height={16}
                      width={16}
                      alt="Your Image"
                    />
                  </div>
                  <div className="pl-3 lg:pt-1 xl:pt-0 md:pl-0">
                    <div className="text-sm md:text-base  font-HelveticaNeueMedium">
                      Flexible Customization
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px] md:leading-[24px] leading-[20px]">
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
                  <div className="pl-3 lg:pt-1 xl:pt-0 md:pl-0">
                    <div className="text-sm md:text-base  font-HelveticaNeueMedium">
                      API Integration
                    </div>
                    <div className="text-xs md:text-sm text-[#5A6573] py-[8px] md:leading-[24px] leading-[20px]">
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
