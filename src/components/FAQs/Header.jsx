import React from "react";
import SearchIcon from "../../assets/SearchIcon.svg";
function Header({searchQuery,setSearchQuery}) {
  return (
    <div className="flex flex-col gap-y-7 justify-center items-center">
      <div className="px-4 md:pt-28 pt-14 md:text-[56px] text-[28px] text-[#132337] font-[700] text-center">
        Frequently asked <span className="text-[#3B4EF4]">questions</span>
      </div>
      <div className="bg-gradient-to-b from-[#FFFFFFB2] to-[#FFFFFF33] w-[80vw] max-w-[600px] shadow-[3px_9px_35px_0_rgb(19,35,55,0.06)] rounded-[7px] p-[2px]">
        <div className="flex gap-4 items-center justify-between px-4 py-2 bg-gradient-to-t  from-[#FFFFFF4D] to-[#FFFFFF1A] w-full rounded-[5px]">
          <input
            value={searchQuery}
            type="text"
            placeholder="Find any question you have..."
            className="outline-none ring-0 border-none bg-transparent w-full"
            onChange={(event)=>{
             setSearchQuery(event.target.value)
            }}
          ></input>
          <img src={SearchIcon} alt="SearchIcon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
