import React, { useEffect, useState } from "react";
import close from "../../assets/close.svg";
import mail from "../../assets/FooterMail.svg";
import discord from "../../assets/Discord.svg";
import twitter from "../../assets/FooterTwitter.svg";
import telegram from "../../assets/FooterTelegram.svg";
import popupbg from "../../assets/background/PopupBg.jpg";
const calculateTimeLeft = () => {
  const difference = +new Date("2024-08-05T00:00:00Z") - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const formatNumber = (number) => {
  return number < 10 ? `0${number}` : number;
};

const CountdownUnit = ({ value, label }) => (
  <div className="flex flex-col flex-1 text-[#132337] justify-center items-center bg-[#dadceb] rounded-[8.12px] py-6 relative">
    <div className="rounded-t-[8.12px] bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] h-[13px] text-[#132337] w-full absolute top-0"></div>
    <span>{formatNumber(value)}</span>
    <span>{label}</span>
  </div>
);

const Popup = () => {
  const [openPopup, setOpenPopup] = useState(true);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SEC", value: timeLeft.seconds },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handlelosePopUp = (e) => {
    if (e.target.id === "ModelContainer") {
      setOpenPopup(false);
    }
  };

  if (openPopup !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={handlelosePopUp}
      className="fixed z-50 inset-0 bg-black flex justify-center items-center bg-opacity-20 overflow-auto  backdrop-blur-sm"
    >
      <div
        // style={{
        //   background: "linear-gradient(to bottom right, #3b1caf, #d60191)",
        // }}
        className="p-2  w-10/12 md:w-1/2 lg:1/3 max-h-[95vh]  shadow-inner border-e-emerald-600 rounded-2xl py-5 bg-[#EDEFFF]"
        style={{
          backgroundImage: `url(${popupbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex justify-end">
          <img
            className="mr-3 cursor-pointer "
            color="black"
            onClick={() => setOpenPopup(false)}
            width={25}
            height={25}
            src={close}
          />
        </div>
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-HelveticaNeueMedium text-[#132337] text-center text-normal xl:text-xl">
            {"STAY TUNED!"}
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-HelveticaNeueBold text-[#132337] text-center text-lg xl:text-3xl">
            <span className="text-[#978FFD]">BULL TOKEN</span> LAUNCHING SOON!!
            🎉
          </h2>
        </div>
        <div
          className="w-full lg:flex grid grid-cols-2 p-3 justify-evenly items-center text-white gap-4 md:gap-8 xl:px-[4.5rem]"
          style={{ fontFamily: "orbitron" }}
        >
          {timeUnits.map((unit, index) => (
            <CountdownUnit key={index} value={unit.value} label={unit.label} />
          ))}
        </div>
        <div className="w-full mt-3 gap-3 flex justify-center items-center">
          <img
            src={mail}
            alt=""
            className="w-[26px] h-[26px] md:w-auto md:h-auto"
          />
          <img
            src={telegram}
            alt=""
            className="w-[26px] h-[26px] md:w-auto md:h-auto"
          />
          <img
            src={twitter}
            alt=""
            className="w-[26px] h-[26px] md:w-auto md:h-auto"
          />
          <img
            src={discord}
            alt=""
            className="w-[26px] h-[26px] md:w-auto md:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
