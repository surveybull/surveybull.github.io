import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../Navbar/NavBar";
import RoadmapBg from "../../assets/background/FAQsBg.jpg";
import MapBg from "../../assets/background/MapBg.jpg";

import Map from "./Map";
import SEO from "../SEO";

function Roadmap() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <SEO
        name={"SurveyBull"}
        description={"Roadmap Page"}
        title={"SurveyBull | Roadmap"}
        type={"Article"}
      />
      <section className="bg-[url('./assets/gif/Roadmap.gif')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 pt-[5rem] mx-auto">
          <div className="py-4 mt-[2rem] md:mt-[3rem]">
            <div className="text-center font-HelveticaNeueBold text-[28px] md:text-[56px]">
              Roadmap
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('./assets/background/MapBg.jpg')] bg-cover bg-repeat-round">
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <Map />
        </div>
      </section>
    </>
  );
}

export default Roadmap;
