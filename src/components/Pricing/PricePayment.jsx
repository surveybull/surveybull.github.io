import SurveyCreation from "../../assets/SurveyCreation.svg";
import PriceCalculation from "../../assets/PriceCalculation.svg";
import Payment from "../../assets/Payment.svg";
import curve from "../../assets/curve.svg";
const PricePayment = () => {
  const data = [
    {
      icon: SurveyCreation,
      title: "Survey Creation",
      description: "Configure your survey and select desired attributes.",
    },
    {
      icon: PriceCalculation,
      title: "Price Calculation",
      description:
        "The platform calculates the equivalent cost in ETH and WLD tokens based on the USD pricing and current exchange rate.",
    },
    {
      icon: Payment,
      title: "Payment",
      description:
        "Complete the payment securely in ETH or WLD tokens to activate your survey.",
    },
  ];

  return (
    <div className="mt-[2rem]">
      <h2 className="text-center text-2xl md:text-4xl font-HelveticaNeueMedium">
        Payment <span className="gradient-text inline-block"> Process </span>
      </h2>
      <div className="flex flex-col justify-center">
        <img
          src={curve}
          alt="curve"
          className="relative md:top-[7.3rem] lg:top-[8.2rem] md:block hidden w-[60vw] xl:w-auto mx-auto"
          loading="lazy"
        />
        <div className="md:flex md:justify-between my-10 md:my-14">
          {data.map((item, index) => (
            <div
              className={`max-w-[300px] mx-auto ${
                index !== 0 ? "mt-14 md:mt-0" : ""
              }`}
              key={item.title}
            >
              <div className="flex justify-center">
                <div className="flex justify-center items-center w-[50px] h-[50px] shadow-[5px_10px_30px_0px_rgba(237,239,255,1)] rounded-full gradient-bg">
                  <img
                    src={item.icon}
                    height={24}
                    width={24}
                    alt={item.title}
                    loading="lazy"
                    className=""
                  />
                </div>
              </div>
              <div className="mt-6 md:mt-16">
                <div className="text-center text-sm md:text-base font-HelveticaNeueMedium">
                  {item.title}
                </div>
                <div className="my-3 md:text-sm text-xs text-center  text-[rgba(90,101,115,1)] leading-[20px] md:leading-[24px]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricePayment;
