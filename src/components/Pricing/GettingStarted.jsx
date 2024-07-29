const GettingStarted = () => {
  return (
    <div className="py-4 bg-[#132337] text-white rounded-2xl">
      <div className="m-5 text-center text-2xl md:text-4xl font-HelveticaNeueBold">
        Get Started <span className=" text-[rgba(59,78,244,1)]"> Today</span>
      </div>
      <div className="m-4 flex justify-center">
        <div className="text-center md:text-base text-xs text-[#B8BDC3] max-w-[650px] md:leading-[26px] leading-[20px]">
          Start gathering valuable insights with our intuitive survey platform.
          For inquiries about pricing or custom solutions, contact our sales
          team at
        </div>
      </div>
      <div className="m-6 flex justify-center">
        <input
          className="px-2 p-2 max-w-[440px] w-full text-black text-sm rounded-lg placeholder:text-[#89919B] md:placeholder:text-base placeholder:text-sm outline-none right-0 border-none"
          placeholder="Enter Your Email Address"
        />
        <button className="ml-4 text-sm md:text-base bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] px-7 py-2 text-[#FFFFFF] font-HelveticaNeueMedium text-[16px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;
