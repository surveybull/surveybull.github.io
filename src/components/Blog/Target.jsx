import React from "react";
import TargetImg from "../../assets/TargetImg.svg";
import Gender from "../../assets/Gender.svg";
import Income from "../../assets/Income.svg";
import Location from "../../assets/Location.svg";
import Age from "../../assets/Age.svg";
import glob from "../../assets/gif/EarthGlob.mp4";
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
    <div className="flex flex-col gap-y-[4rem] md:gap-y-[9rem] skew-y-6 xl:skew-y-3 py-16">
      <div className="flex w-full lg:flex-row flex-col gap-12">
        <div className="lg:w-[50%] w-full flex flex-col gap-y-7 justify-center">
          <h3 className="md:text-[36px] font-HelveticaNeueBold text-[24px] text-[#FFFFFF] md:leading-[52px] leading-[34px]">
            <span className="gradient-text inline-block">Target</span> who you want, when
            you want
          </h3>
          <span className="md:text-[16px] font-[400] text-[#E7E9EB] text-[14px] md:leading-[26px] leading-[20px]">
            Quickly tap into an audience of more than 175 million people in over
            130 countries, with over 200 targeting options:
          </span>
          <ul className="ml-[1.75rem] md:text-[16px] text-[14px] font-[400] text-[#FFFFFF] flex flex-col gap-y-3 ">
            <li className="list-disc leading-[20px] md:leading-[26px]">
              Tap into a sample panel with demographic or custom balancing
              options
            </li>
            <li className="list-disc leading-[20px] md:leading-[26px]">
              Apply our always-on market research platform to create custom
              screening questions for respondents in niche markets, including
              business professionals, electric vehicle drivers, online grocery
              shoppers, and more
            </li>
            <li className="list-disc leading-[20px] md:leading-[26px]">
              Gain access to our regularly refreshed, always up-to-date{" "}
              <span className="gradient-text inline-block">respondent profiles</span>
            </li>
          </ul>
          <div className="flex gap-x-2 sm:gap-x-[1.5rem] sm:justify-start justify-between">
            {miniCard.map((data) => (
              <div className="flex flex-col justify-center items-center gap-y-3 bg-[radial-gradient(241.99%_676.79%_at_50%_50.24%,rgba(255,255,255,0.02)_0%,rgba(255,255,255,0.2)_100%)] border border-[#FFFFFF1F] sm:w-[130px] sm:h-[130px] w-[90px] h-[90px] rounded-[10px]">
                <img src={data.imgSrc} alt={data.title} loading="lazy" />
                <div className="md:text-[16px] text-[12px] text-[#FFFFFF] font-[400]">
                  {data.title}
                </div>
              </div>
            ))}
          </div>
          <button className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] gradient-text font-HelveticaNeueMedium md:text-[16px] text-[14px] border border-[#9333EA]/60 w-fit ">
            Choose your audience
          </button>
        </div>
        <div className="lg:w-[50%] w-full flex justify-center">
          <video autoPlay muted loop className="max-h-[555px]">
            <source src={glob} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex w-full lg:flex-row flex-col-reverse gap-12">
        <div className="lg:w-[50%] w-full flex lg:justify-start justify-center items-center">
          <img src={TargetImg} alt="TargetImg" loading="lazy" />
        </div>
        <div className="lg:w-[50%] w-full flex flex-col gap-y-7 justify-center">
          <h3 className=" md:text-[36px] text-[24px] font-HelveticaNeueBold text-[#FFFFFF] md:leading-[52px] leading-[34px]">
            Get better insights, <span className="gradient-text inline-block">faster</span>
          </h3>
          <span className="md:text-[16px] text-[14px] font-[400] text-[#E7E9EB] leading-[20px] md:leading-[26px]">
            With guided setup, you can easily design, set targeting, and field a
            project from start to finish—whether you’re an occasional researcher
            or insights professional. Get actionable insights in as little as an
            hour.
          </span>
          <button className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] gradient-text font-HelveticaNeueMedium md:text-[16px] text-[14px] border border-[#9333EA]/60 w-fit ">
            Get insights fast
          </button>
        </div>
      </div>
    </div>
  );
}

export default Target;
