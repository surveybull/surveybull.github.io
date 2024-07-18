import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropDownMenu({ option, visitedPage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleChildItemClick = () => {
    setIsDropdownOpen(false);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div
        className="group relative cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col justify-center items-center gap-y-1">
          <Link
            to={option.path}
            className={`${
              visitedPage === option.path.toLowerCase()
                ? "text-[#3B4EF4] font-HelveticaNeueMedium"
                : visitedPage ===  "text-[#132337]"
            } font-[400] text-[18px]`}
          >
            {option.title}
          </Link>
          <div
            className={`${
              visitedPage === option.path.toLowerCase()
                ? "bg-[#3B4EF4] h-[2.5px] rounded-full w-[17px]"
                : "bg-none h-[2.5px]"
            }`}
          />
        </div>

    
        {visitedPage === option.path.toLowerCase() && isDropdownOpen && (
          <div className="absolute z-50 flex flex-col bg-[#FFFFFF]  text-[#132337] shadow-xl border-[1px] border-[#E7E9EB] rounded-[7px] w-max">
            {option.childItem.map((child, index) => (
              <a
                key={index} 
                className="block font-semibold hover:bg-[#EDEFFF] "
                onClick={handleChildItemClick} 
              >
                <div onClick={()=>{scrollToSection(child.id)}}  onMouseEnter={(e) => {
                     e.currentTarget.querySelectorAll('span')[0].style.color = '#3B4EF4';
                     e.currentTarget.querySelectorAll('span')[1].style.color = '#132337'; 
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.querySelectorAll('span')[0].style.color = '#132337'; 
                    e.currentTarget.querySelectorAll('span')[1].style.color = '#89919B';  } } className={`${option.childItem.length - 1 == child.id  ? "border-none" : "border-b border-[#E7E9EB]"} flex flex-col gap-y-1 px-9 py-5 font-semibold`}>
                  <span className="text-[#132337] text-[16px] font-HelveticaNeueMedium text-start">{child.title}</span>
                  <span className="text-[#89919B] text-[14px] font-[400] text-start">{child.subtitle}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DropDownMenu;
