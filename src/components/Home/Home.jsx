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
function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${IntroBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height:"100%",
          // width:"100%",
        }}
        
        >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <NavBar visitedPage={"Home"} />
          <Intro />
        
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
