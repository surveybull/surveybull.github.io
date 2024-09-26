import React, { useEffect, useState } from "react";
import close from "../../assets/close.svg";
import mail from "../../assets/FooterMail.svg";
import discord from "../../assets/Discord.svg";
import twitter from "../../assets/FooterTwitter.svg";
import telegram from "../../assets/FooterTelegram.svg";
import popupbg from "../../assets/background/PopupBg.jpg";
import { X } from "lucide-react";
const calculateTimeLeft = () => {
  const difference = +new Date("2025-01-01T00:00:00Z") - +new Date();
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
  <div className="flex flex-col flex-1 text-[#132337] justify-center items-center bg-[#dadceb] rounded-[8.12px] py-3 relative">
    <div className="rounded-t-[8.12px] bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] h-[10px] lg:h-[13px] text-[#132337] w-full absolute top-0"></div>
    <span className="text-[22px] lg:text-[30px] font-HelveticaNeueBold mt-3">
      {formatNumber(value)}
    </span>
    <span className="text-[14px] lg:text-[16px] font-HelveticaNeueLight">
      {label}
    </span>
  </div>
);

const Popup = () => {
  const [openPopup, setOpenPopup] = useState(true);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
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
        className="p-2  w-10/12 md:w-1/2 lg:1/3 max-h-[95vh] flex flex-col md:gap-6 gap-4  shadow-inner border-e-emerald-600 rounded-2xl py-5 bg-[#EDEFFF]"
        style={{
          backgroundImage: `url(${popupbg})`,
          backgroundSize: "cover",
          backgroundRepeat: "round",
        }}
      >
        <div className="flex justify-end">
          <X
            className="mr-3 cursor-pointer "
            width={25}
            height={25}
            onClick={() => setOpenPopup(false)}
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
          <a
            href=" https://t.me/surveybull"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="FooterTelegram" />
          </a>

          <a
            href=" https://x.com/surveybull"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="FooterTwitter" />
          </a>

          <a
            href="https://discord.gg/vBMPHe7dqK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={discord} alt="discord" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
