import React from "react";
import Intro from "./Intro";
import Feedback from "./Feedback";
import Report from "./Report";

function SurveyForm() {
  return (
    <div className="flex flex-col pb-[3rem] md:gap-[7rem] gap-[4rem]">
      <Intro />
      <Feedback />
      <Report />
    </div>
  );
}

export default SurveyForm;
