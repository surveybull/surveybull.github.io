import React, { useState, useEffect } from "react";

function AnimatedText() {
  const items = [
    "Craft, Share, Analyse",
    "Your Opinion, Your Impact",
    "Engage, Participate, Earn",
    "Discover, Earn, Empower",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + direction;
        if (newIndex >= items.length) {
          newIndex = items.length - 2;
          setDirection(-1);
        } else if (newIndex < 0) {
          newIndex = 1;
          setDirection(1);
        }
        return newIndex;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [direction, items.length]);
  return (
    <div className="relative overflow-hidden h-[100px] w-full mt-5 lg:mt-10">
      <div
        className="  h-24 transition-transform duration-1000 ease-in-out w-full"
        style={{
          transform: `translateY(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <h1
            key={index}
            className="h-24 md:mx-auto flex items-center md:justify-center gradient-text text-[28px] md:text-[40px] lg:text-[68px] font-HelveticaNeueBold"
          >
            {item}
          </h1>
        ))}
      </div>
    </div>
  );
}

export default AnimatedText;
