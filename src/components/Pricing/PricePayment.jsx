import SurveyCreation from "../../assets/SurveyCreation.svg";
import PriceCalculation from "../../assets/PriceCalculation.svg";
import Payment from "../../assets/Payment.svg";

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
        "The platform calculates the equivalent cost in BULL tokens based on the USD pricing and current exchange rate.",
    },
    {
      icon: Payment,
      title: "Payment",
      description:
        "Complete the payment securely in BULL tokens to activate your survey.",
    },
  ];

  return (
    <div className="py-4 mt-[2rem] md:mt-[2rem]">
      <div className="text-center text-4xl font-HelveticaNeueMedium">
        Payment <span className=" text-[rgba(59,78,244,1)]"> Process </span>
      </div>
      <div className="md:flex md:justify-between my-14">
        {data.map((item, index) => (
          <div
            className={`max-w-[300px] mx-auto ${
              index !== 0 ? "mt-14 md:mt-0" : ""
            }`}
            key={item.title}
          >
            <div className="flex justify-center">
              <div className="flex justify-center items-center w-[50px] h-[50px] shadow-[5px_10px_30px_0px_rgba(237,239,255,1)] rounded-full bg-gradient-to-r from-[rgba(59,78,244,1)] via-[rgba(88,104,248,1)] to-[rgba(151,143,253,1)]">
                <img
                  src={item.icon}
                  height={24}
                  width={24}
                  alt={item.title}
                  className=""
                />
              </div>
            </div>
            <div className="mt-16">
              <div className="text-center font-HelveticaNeueMedium">
                {item.title}
              </div>
              <div className="my-3 text-center text-sm text-[rgba(90,101,115,1)]">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricePayment;
