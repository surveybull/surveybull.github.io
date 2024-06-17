import React, { useEffect, useState } from "react";
import close from "../assets/close.svg";
import twitter from "../assets/twitter.svg";
import telegram from "../assets/telegram.svg";

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
  <div>
    <div className="flex justify-center">
      <div
        className="w-24 h-24 xl:w-32 xl:h-32 m-2 bg-white rounded-full flex justify-center items-center text-[#5831C8] text-4xl"
        style={{ fontFamily: "orbitron" }}
      >
        {formatNumber(value)}
      </div>
    </div>
    <div
      className="w-full rounded-lg flex justify-center items-center text-lg xl:text-2xl"
      style={{ fontFamily: "orbitron" }}
    >
      {label}
    </div>
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
        style={{
          background: "linear-gradient(to bottom right, #3b1caf, #d60191)",
        }}
        className="p-2  w-10/12 md:w-1/2 lg:1/3  shadow-inner border-e-emerald-600 rounded-2xl py-5"
      >
        <div className="flex justify-end">
          <img
            className="mr-3 cursor-pointer "
            color="white"
            onClick={() => setOpenPopup(false)}
            width={25}
            height={25}
            src={close}
          />
        </div>
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold text-white py-3 text-center text-normal xl:text-xl">
            {"STAY TUNED!"}
          </h2>
        </div>
        <div className="w-full p-3 justify-center items-center">
          <h2 className="font-semibold text-white py-3 text-center text-lg xl:text-3xl">
            {"BULL TOKEN LAUNCHING SOON!! 🎉🎉"}
          </h2>
        </div>
        <div
          className="w-full xl:flex grid grid-cols-2 p-3 justify-center items-center text-white"
          style={{ fontFamily: "orbitron" }}
        >
          {timeUnits.map((unit, index) => (
            <CountdownUnit key={index} value={unit.value} label={unit.label} />
          ))}
        </div>
        <div className="w-full mt-5 p-3 gap-3 flex justify-center items-center">
          <a href="https://t.me/official_surveybull" target="_blank">
            {" "}
            <img
              className="mr-3 cursor-pointer "
              width={40}
              height={40}
              src={telegram}
            />
          </a>
          <a href="https://x.com/surveybull" target="_blank">
            <img
              className="mr-3 cursor-pointer "
              width={40}
              height={40}
              src={twitter}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
