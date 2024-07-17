import React from "react";
import NavBar from "../Navbar/NavBar";

import PricingIntroBg from "../../assets/background/PricingIntroBg.jpg";
import PricingWorkBg from "../../assets/background/PricingWorkBg.jpg";
import CalculationBg from "../../assets/background/CalculationBg.jpg";
import KeyFeatureBg from "../../assets/background/KeyFeatureBg.jpg";
import PaymentProcessBg from "../../assets/background/PaymentProcessBg.jpg";
import GetStartedBg from "../../assets/background/GetStartedBg.jpg";
import LearnMoreBg from "../../assets/background/LearnMoreBg.jpg";

import PricingIntro from "./PricingIntro";
import PriceWork from "./PriceWork";
import PriceCalculation from "./PriceCalculation";
import PricingKey from "./PricingKey";
import PricePayment from "./PricePayment";
import GettingStarted from "./GettingStarted";
import LearnMore from "./LearnMore";

function Pricing() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${PricingIntroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "50px",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <NavBar visitedPage={"Pricing"} />
          <PricingIntro />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${PricingWorkBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "50px",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <PriceWork />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${CalculationBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "50px",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <PriceCalculation />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${KeyFeatureBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "50px",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <PricingKey />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${PaymentProcessBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "50px",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <PricePayment />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${GetStartedBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "50px",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <GettingStarted />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${LearnMoreBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <LearnMore />
        </div>
      </div>
    </>
  );
}

export default Pricing;
