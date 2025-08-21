import React, { useEffect } from "react";
import NavBar from "../Navbar/NavBar";
import PricingIntroBg from "../../assets/background/PricingIntroBg.jpg";
import PricingWorkBg from "../../assets/background/PricingWorkBg.jpg";
import CalculationBg from "../../assets/background/CalculationBg.jpg";
import KeyFeatureBg from "../../assets/background/KeyFeatureBg.jpg";
import PaymentProcessBg from "../../assets/background/PaymentProcessBg.jpg";
import GetStartedBg from "../../assets/background/GetStartedBg.jpg";
import LearnMoreBg from "../../assets/background/LearnMoreBg.jpg";
import CalculatorBg from "../../assets/background/CalculatorBg.jpg";
import PricingIntro from "./PricingIntro";
import PriceWork from "./PriceWork";
import PriceCalculation from "./PriceCalculation";
import PricingKey from "./PricingKey";
import PricePayment from "./PricePayment";
import GettingStarted from "./GettingStarted";
import LearnMore from "./LearnMore";
import PricingMobileBg from "../../assets/background/PricingMobileBg.jpg";
import SEO from "../SEO";
import Calculator from "./Calculator";
import { getPerResponseFees } from "../../helper/getPerResponseFees";

function Pricing() {
  //  useEffect(() => {
  //    window.scrollTo({ top: 0, behavior: "smooth" });
  //  }, []);
  return (
    <>
      <SEO
        name={"SurveyBull"}
        title={"SurveyBull | Pricing"}
        type={"Article"}
        description={"Pricing Section"}
      />
      {/* <section className="bg-[url('./assets/gif/Pricing.gif')] bg-cover bg-repeat-round"> */}
      <section>
        <div className="xl:max-w-[1300px] p-7 pt-[3rem] mx-auto">
          <PricingIntro />
        </div>
      </section>

      <section className="bg-[url('./assets/background/CalculatorBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto" id="calculator">
          <Calculator />
        </div>
      </section>

      <section className="bg-[url('./assets/background/KeyFeatureBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <PricingKey />
        </div>
      </section>

      <section className="bg-[url('./assets/background/PaymentProcessBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <PricePayment />
        </div>
      </section>

      <section className="bg-[url('./assets/background/GetStartedBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <GettingStarted />
        </div>
      </section>

      {/* <section className="bg-[url('./assets/background/LearnMoreBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <LearnMore />
        </div>
      </section> */}
    </>
  );
}

export default Pricing;
