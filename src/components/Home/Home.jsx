import React, { useEffect } from "react";
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
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  return (
    <>
      <SEO
        name={"SurveyBull"}
        description={"Our blockchain-based survey platform employs WorldID verification mechanism to ensure the authenticity of survey participants. The platform utilizes different verification levels according to specific needs. These levels include Device and ORB verification. By integrating Device level verification, we establish a one-device, one-response rule. By integrating World ID ORB verification, we create a trust layer that verifies the human identity of participants, mitigating the risk of fake or duplicate responses. This ensures the integrity and reliability of the survey data, instilling confidence in the generated insights."}
        title={"SurveyBull - The World's First Blockchain Based Survey Platform"}
        type={"Home"}
      />

      <section className="bg-[url('./assets/gif/IntroBg.gif')]  bg-cover bg-repeat-round ">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Intro />
        </div>
      </section>

      <section
        id="Why"
        className="md:bg-[url('./assets/background/whyBg.jpg')] bg-[url('./assets/background/whyMobileBg.jpg')] bg-cover bg-repeat-round"
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Why />
        </div>
      </section>

      <section className="py-10 ">
        <div className="bg-[#132337] bg-[url('./assets/background/SurveyorMobile.svg')] lg:bg-[url('./assets/background/Surveyor.svg')] bg-cover bg-no-repeat -skew-y-6 xl:-skew-y-3 w-full h-fit">
          <div className="xl:max-w-[1300px] p-7 mx-auto">
            <Surveyor />
          </div>
        </div>
      </section>

      <section
        id="Earn"
        className="lg:bg-[url('./assets/background/MidsectionBg.jpg')] bg-[url('./assets/background/MidsectionMobileBg.jpg')] bg-cover bg-repeat-round"
      >
        <div className="xl:max-w-[1300px] p-7 pb-10 mx-auto">
          <MidSection />
        </div>
      </section>

      <section
        id="Distribution"
        className="bg-[#132337] bg-[url('./assets/background/DistributionMobile.svg')] lg:bg-[url('./assets/background/Distribution.svg')] bg-cover  lg:bg-no-repeat -skew-y-6 xl:-skew-y-3 w-full h-fit"
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Distribution />
        </div>
      </section>

      <section className="bg-[url('./assets/background/decentralizedBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <DecentralizedAction />
        </div>
      </section>

      <section
        className="md:bg-[url('./assets/background/SDKBg.jpg')] bg-[url('./assets/background/SDKMobileBg.jpg')] bg-cover bg-repeat-round]"
        id="Survey"
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <SDK />
        </div>
      </section>

      <section className="bg-[url('./assets/background/UsecaseBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Cases />
        </div>
      </section>

      <section className="bg-[#132337] bg-[url('./assets/background/TokenomicsMobile.svg')] md:bg-[url('./assets/background/Tokenomics.svg')]  bg-cover bg-no-repeat -skew-y-6 xl:-skew-y-3 w-full h-fit mt-[40px] ">
        <div className="xl:max-w-[1300px] p-7 mx-auto mb-8 md:mb-16" id="tokenomics">
          <Tokonomics />
        </div>
      </section>

      {/* <section className="bg-[url('./assets/background/InvestorBg.jpg')] bg-repeat-round bg-cover">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Investor />
        </div>
      </section> */}

      <Popup />
    </>
  );
}

export default Home;
