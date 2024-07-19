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
import SurveyorBg from "../../assets/background/Surveyor4.svg";
import SEO from "../SEO";
function Blog() {
  return (
    <>
      <SEO
        name={"SurveyBull"}
        description={"Blog Page"}
        type={"Blog"}
        title={"SurveyBull | Blog"}
      />
      <div
        className="hidden md:block"
        style={{
          backgroundImage: `url(${BlogBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 pt-[3rem] mx-auto">
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
        <div className="xl:max-w-[1300px] p-7 pt-[3rem] mx-auto">
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
        className="bg-[#132337] -skew-y-6 xl:-skew-y-3 w-full h-fit mt-[40px] "
        style={{
          backgroundImage: `url(${SurveyorBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto mt-[40px]">
          <Target />
        </div>
      </div>
    </>
  );
}

export default Blog;
