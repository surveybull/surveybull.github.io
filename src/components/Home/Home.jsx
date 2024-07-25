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
import SurveyorBg from "../../assets/background/Surveyor.svg";
import MidSection from "./MidSection";
import SEO from "../SEO";
import Investor from "./Investor";
import db from "../../assets/background/Distribution.svg";
function Home() {
  return (
    <>
      <SEO
        name={"SurveyBull"}
        description={"Home Page"}
        title={"SurveyBull | Home"}
        type={"Home"}
      />

      <div className="bg-[url('./assets/gif/IntroBg.gif')]  bg-cover bg-repeat-round ">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Intro />
        </div>
      </div>

      <div
        id="Why"
        className="md:bg-[url('./assets/background/whyBg.jpg')] bg-[url('./assets/background/whyMobileBg.jpg')] bg-cover bg-repeat-round"
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Why />
        </div>
      </div>

      <section className="py-10 ">
        <div className="bg-[#132337] bg-[url('./assets/background/SurveyorMobile.svg')] lg:bg-[url('./assets/background/Surveyor.svg')] bg-cover bg-no-repeat -skew-y-6 xl:-skew-y-3 w-full h-fit">
          <div className="xl:max-w-[1300px] p-7 mx-auto">
            <Surveyor />
          </div>
        </div>
      </section>

      <div
        id="Earn"
        className="lg:bg-[url('./assets/background/MidsectionBg.jpg')] bg-[url('./assets/background/MidsectionMobileBg.jpg')] bg-cover bg-repeat-round"
      >
        <div className="xl:max-w-[1300px] p-7 pb-10 mx-auto">
          <MidSection />
        </div>
      </div>

      <div
        id="Distribution"
        className="bg-[#132337] bg-[url('./assets/background/DistributionMobile.svg')] lg:bg-[url('./assets/background/Distribution.svg')] bg-cover  lg:bg-no-repeat -skew-y-6 xl:-skew-y-3 w-full h-fit"
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Distribution />
        </div>
      </div>
      {/* </div> */}

      <div className="bg-[url('./assets/background/decentralizedBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <DecentralizedAction />
        </div>
      </div>

      <div
        className="md:bg-[url('./assets/background/SDKBg.jpg')] bg-[url('./assets/background/SDKMobileBg.jpg')] bg-cover bg-repeat-round]"
        id="Survey"
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <SDK />
        </div>
      </div>

      <div className="bg-[url('./assets/background/UsecaseBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Cases />
        </div>
      </div>
      <div className="bg-[#132337] bg-[url('./assets/background/TokenomicsMobile.svg')] md:bg-[url('./assets/background/Tokenomics.svg')]  bg-cover bg-no-repeat -skew-y-6 xl:-skew-y-3 w-full h-fit mt-[40px] ">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Tokonomics />
        </div>
      </div>
      <div className="bg-[url('./assets/background/InvestorBg.jpg')] bg-repeat-round bg-cover">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Investor />
        </div>
      </div>
      <Popup />
    </>
  );
}

export default Home;
