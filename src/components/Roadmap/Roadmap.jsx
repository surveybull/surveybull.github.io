import React from "react";
import NavBar from "../Navbar/NavBar";
import RoadmapBg from "../../assets/background/FAQsBg.jpg";
import MapBg from "../../assets/background/MapBg.jpg";


import Map from "./Map";

function Roadmap() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${RoadmapBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingBottom: "50px",
        }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
          <NavBar visitedPage={"Roadmap"} />
          <div className="py-4 mt-[2rem] md:mt-[3rem]">
            <div className="text-center font-HelveticaNeueBold text-[28px] md:text-[56px]">
              RoadMap
            </div>
          </div>
        </div>
      </div>
      <div
      style={{
        backgroundImage: `url(${MapBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      >
        <div className="xl:max-w-[1300px] p-7 mx-auto">
        <Map />
      </div>
      </div>
    </>
  );
}

export default Roadmap;
