import React from "react";
import TargetImg from "../../assets/TargetImg.svg";
import Gender from "../../assets/Gender.svg";
import Income from "../../assets/Income.svg";
import Location from "../../assets/Location.svg";
import Age from "../../assets/Age.svg";
function Target() {
  const miniCard = [
    {
      title: "Gender",
      imgSrc: Gender,
    },
    {
      title: "Income",
      imgSrc: Income,
    },
    {
      title: "Location",
      imgSrc: Location,
    },
    {
      title: "Age",
      imgSrc: Age,
    },
  ];
  return (
    <div className="flex flex-col gap-y-[9rem] my-[11rem]">
      <div className="flex w-full lg:flex-row flex-col gap-12">
        <div className="lg:w-[50%] w-full flex flex-col gap-y-7 justify-center">
          <span className="md:text-[36px] font-[700] text-[24px] text-[#FFFFFF]">
            <span className="text-[#978FFD]">Target</span> who you want, when
            you want
          </span>
          <span className="md:text-[16px] font-[400] text-[#E7E9EB] text-[14px]">
            Quickly tap into an audience of more than 175 million people in over
            130 countries, with over 200 targeting options:
          </span>
          <ul className="ml-[1.75rem] md:text-[16px] text-[14px] font-[400] text-[#FFFFFF] flex flex-col gap-y-3">
            <li className="list-disc">
              Tap into a sample panel with demographic or custom balancing
              options
            </li>
            <li className="list-disc">
              Apply our always-on market research platform to create custom
              screening questions for respondents in niche markets, including
              business professionals, electric vehicle drivers, online grocery
              shoppers, and more
            </li>
            <li className="list-disc">
              Gain access to our regularly refreshed, always up-to-date{" "}
              <span className="text-[#978FFD]">respondent profiles</span>
            </li>
          </ul>
          <div className="flex gap-x-2 sm:gap-x-[1.5rem] sm:justify-start justify-between">
            {miniCard.map((data) => (
              <div className="flex flex-col justify-center items-center gap-y-3 bg-gradient-to-r from-[#FFFFFF05] to-[#FFFFFF05] border border-[#FFFFFF1F] sm:w-[130px] sm:h-[130px] w-[90px] h-[90px] rounded-[10px]">
                <img src={data.imgSrc} alt={data.title} />
                <div className="md:text-[16px] text-[12px] text-[#FFFFFF] font-[400]">
                  {data.title}
                </div>
              </div>
            ))}
          </div>
          <button className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] text-[#978FFD] font-[500] md:text-[16px] text-[14px] border border-[#978FFD] w-fit ">
            Choose your audience
          </button>
        </div>
        <div className="lg:w-[50%] w-full flex lg:justify-start justify-center">
          <img src={TargetImg} alt="TargetImg" />
        </div>
      </div>
      <div className="flex w-full lg:flex-row flex-col-reverse gap-12">
        <div className="lg:w-[50%] w-full flex lg:justify-start justify-center">
          <img src={TargetImg} alt="TargetImg" />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col gap-y-7 justify-center">
          <span className=" md:text-[36px] text-[24px] font-[700] text-[#FFFFFF]">
            Get better insights, <span className="text-[#978FFD]">faster</span>
          </span>
          <span className="md:text-[16px] text-[14px] font-[400] text-[#E7E9EB]">
            With guided setup, you can easily design, set targeting, and field a
            project from start to finish—whether you’re an occasional researcher
            or insights professional. Get actionable insights in as little as an
            hour.
          </span>
          <button className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] text-[#978FFD] font-[500] md:text-[16px] text-[14px] border border-[#978FFD] w-fit ">
            Get insights fast
          </button>
        </div>
      </div>
    </div>
  );
}

export default Target;
