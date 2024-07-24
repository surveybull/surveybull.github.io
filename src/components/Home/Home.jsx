import React from "react";
import Why from "./Why";
import Surveyor from "./Surveyor";
import SurveyBuilding from "./SurveyBuilding";
import SharingThoughts from "./SharingThoughts";
import Hooks from "./Hooks";
import Distribution from "./Distribution";
import DecentralizedAction from "./DecentralizedAction";
import SDK from "./SDK";
import Cases from "./Cases";
import Roadmap from "./Roadmap";
import Tokonomics from "./Tokonomics";
import Faqs from "./Faqs";
import Invite from "./Invite";
import Popup from "./Popup";
import NavBar from "../Navbar/NavBar";
import Intro from "./Intro";
import IntroBg from "../../assets/background/Intro.jpg";
import SurveyorBg from "../../assets/background/Surveyor.svg";
import whyBg from "../../assets/background/whyBg.jpg";
import whyIntroBg from "../../assets/background/whyMobileBg.jpg";
import midSection from "../../assets/background/MidsectionBg.jpg";
import SDKBg from "./../../assets/background/SDKBg.jpg";
import DecentralizedBg from "../../assets/background/decentralizedBg.jpg";
import IntroMobileBg from "../../assets/background/IntroMobileBg.jpg";
import TokenomicsBg from "../../assets/background/TokenomicsBg.jpg";
import MidSection from "./MidSection";
import WeightCalculationBg from "../../assets/background/WeightCalculationBg.png";
import UsecaseBg from "../../assets/background/UsecaseBg.jpg";
import SEO from "../SEO";
import Investor from "./Investor";
import InvestorBg from "../../assets/background/InvestorBg.jpg";
import MidsectionMobileBg from "../../assets/background/MidsectionMobileBg.jpg";
import SDKMobileBg from "../../assets/background/SDKMobileBg.jpg"
function Home() {
  return (
    <>
      <SEO
        name={"SurveyBull"}
        description={"Home Page"}
        title={"SurveyBull | Home"}
        type={"Home"}
      />
      <div
        className="sm:bg-[url('./assets/background/Intro.jpg')] bg-[url('./assets/background/IntroMobileBg.jpg')]   bg-cover bg-repeat-round "
        // style={{
        //   backgroundImage: `url(${IntroBg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Intro />
        </div>
      </div>
      {/* <div
        className="block md:hidden bg-repeat-round bg-[url('./assets/background/IntroMobileBg.jpg')]"
        // style={{
        //   backgroundImage: `url(${IntroMobileBg})`,
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Intro />
        </div>
      </div> */}
      <div
        id="Why"
        className="hidden md:block"
        style={{
          backgroundImage: `url(${whyBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="Why" className="xl:max-w-[1300px] p-7 mx-auto">
          <Why />
        </div>
      </div>
      <div
        id="MWhy"
        className="block md:hidden"
        style={{
          backgroundImage: `url(${whyIntroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="Why" className="xl:max-w-[1300px] p-7 mx-auto">
          <Why />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${whyIntroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="bg-[#132337] -skew-y-6 xl:-skew-y-3 w-full h-fit "
          style={{
            backgroundImage: `url(${SurveyorBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="xl:max-w-[1300px] p-7 mx-auto">
            <Surveyor />
          </div>
        </div>
      </div>

      <div
        id="Earn"
        className="lg:block hidden"
        style={{
          backgroundImage: `url(${midSection})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 pb-10 mx-auto">
          <MidSection />
        </div>
      </div>
      <div
        id="MbEarn"
        className="lg:hidden block"
        style={{
          backgroundImage: `url(${MidsectionMobileBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 pb-10 mx-auto">
          <MidSection />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${midSection})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          id="Distribution"
          className="bg-[#132337] -skew-y-6 xl:-skew-y-3 w-full h-fit"
          style={{
            backgroundImage: `url(${SurveyorBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="xl:max-w-[1300px] p-7 mx-auto">
            <Distribution />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${DecentralizedBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <DecentralizedAction />
        </div>
      </div>

      <div
        className="md:hidden block"
        id="SurveyMb"
        style={{
          backgroundImage: `url(${SDKMobileBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <SDK />
        </div>
      </div>
      <div
        className="md:block hidden"
        id="Survey"
        style={{
          backgroundImage: `url(${SDKBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <SDK />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${UsecaseBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Cases />
        </div>
      </div>
      <div
        className="bg-[#132337] -skew-y-6 xl:-skew-y-3 w-full h-fit mt-[40px] "
        style={{
          backgroundImage: `url(${SurveyorBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Tokonomics />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${InvestorBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Investor />
        </div>
      </div>
      <Popup />
    </>
  );
}

export default Home;
