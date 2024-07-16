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
import IntroBg from "../../assets/background/IntroBg.jpg";
import SurveyorBg from "../../assets/background/SurveyorBg.jpg"
import whyBg from "../../assets/background/whyBg.jpg";
import whyIntroBg from "../../assets/background/whyMobileBg.jpg";
import midSection from "../../assets/background/midSection.jpg";
import SDKBg from "./../../assets/background/SDKBg.jpg";
import MidSection from "./MidSection";
import WeightCalculationBg from "../../assets/background/WeightCalculationBg.png"
import UsecaseBg from "../../assets/background/UsecaseBg.jpg"
function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${IntroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <NavBar visitedPage={"Home"} />
          <Intro />
        </div>
      </div>
      <div
        className="hidden md:block"
        style={{
          backgroundImage: `url(${whyBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Why />
        </div>
      </div>
      <div
        className="block md:hidden"
        style={{
          backgroundImage: `url(${whyIntroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Why />
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${midSection})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <MidSection/>
        </div>
      </div>
      <div
        className=""
        style={{
          backgroundImage: `url(${WeightCalculationBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
        <Distribution />
        </div>
      </div>
      <div
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
      <div
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

     

      {/* <div className="xl:max-w-[1300px] mx-auto ">
        <div id="why" className="p-1">
          <Why />
        </div>
        <Surveyor />
        <div id="SurveyBuilding" className="p-1">
          <SurveyBuilding />
        </div>
        <div id="EarnToken" className="p-1">
          <SharingThoughts />
        </div>
        <Hooks />
      </div>
      <div className="max-w-[1300px] mx-auto">
        <div id="Distribution" className="p-1">
          <Distribution />
        </div>
        <DecentralizedAction />
        <SDK />
        <Cases />
        <Roadmap />
        <Tokonomics />
      </div>
      <div className="">
        <div className="max-w-[1300px] mx-auto py-1">
          <Faqs />
        </div>
      </div>
      <div className="bg-[#5831C8]">
        <Invite />
      </div>
      <div></div>
      <Popup /> */}
    </>
  );
}

export default Home;
