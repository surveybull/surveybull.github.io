import NavBar from "../Navbar/NavBar";
import React, { useEffect } from "react";
import BlogBg from "../../assets/background/BlogBg.jpg";
import Header from "./Header";
import SurveyForm from "./SurveyForm";
import SurveyFormBg from "../../assets/background/SurveyFormBg.jpg";
import SurveyFormMobileBg from "../../assets/background/SurveyFormMobileBg.jpg";
import BlogCardsBg from "../../assets/background/BlogCardsBg.jpg";
import Cards from "./Cards";
import Target from "./Target";
import TragetBg from "../../assets/background/TargetBg.jpg";
import BlogMobileBg from "../../assets/background/BlogMobileBg.jpg";
import SurveyorBg from "../../assets/background/Surveyor4.svg";
import SEO from "../SEO";
function Blog() {
   useEffect(() => {
     window.scrollTo({ top: 0, behavior: "smooth" });
   }, []);
  return (
    <>
      <SEO
        name={"SurveyBull"}
        description={"Survey Creation Page"}
        type={"Survey Creation"}
        title={"SurveyBull | Survey Creation"}
      />
      <section className="bg-[url('./assets/gif/Blog.gif')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 pt-[3rem] mx-auto">
          <Header />
        </div>
      </section>

      <section className="bg-[url('./assets/background/SurveyFormMobileBg.jpg')] md:bg-[url('./assets/background/SurveyFormBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <SurveyForm />
        </div>
      </section>

      <section className="bg-[url('./assets/background/BlogCardsBg.jpg')] bg-cover sm:bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Cards />
        </div>
      </section>

      <section className="bg-[#132337] mb-10 bg-[url('./assets/background/TargetMobile.svg')] md:bg-[url('./assets/background/Target.svg')]  bg-cover bg-no-repeat -skew-y-6 xl:-skew-y-3 w-full h-fit mt-[40px] ">
        <div className="xl:max-w-[1300px] p-7 mx-auto mt-[40px]">
          <Target />
        </div>
      </section>
    </>
  );
}

export default Blog;
