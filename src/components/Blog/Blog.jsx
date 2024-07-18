import NavBar from "../Navbar/NavBar";
import React from "react";
import BlogBg from "../../assets/background/BlogBg.jpg";
import Header from "./Header";
import SurveyForm from "./SurveyForm";
import SurveyFormBg from "../../assets/background/SurveyFormBg.jpg";
import BlogCardsBg from "../../assets/background/BlogCardsBg.jpg";
import Cards from "./Cards";
import Target from "./Target";
import TragetBg from "../../assets/background/TargetBg.jpg";
import BlogMobileBg from "../../assets/background/BlogMobileBg.jpg";
function Blog() {
  return (
    <>
      <div
        className="hidden md:block"
        style={{
          backgroundImage: `url(${BlogBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Header />
        </div>
      </div>
      <div
        className="block md:hidden"
        style={{
          backgroundImage: `url(${BlogMobileBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Header />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${SurveyFormBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <SurveyForm />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${BlogCardsBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Cards />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${TragetBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Target />
        </div>
      </div>
    </>
  );
}

export default Blog;
