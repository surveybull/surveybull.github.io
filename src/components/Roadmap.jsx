import tick from "../assets/tick.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import rightTriangle from "../assets/rightTriangle.svg";
import leftTriangle from "../assets/leftTriangle.svg";

const Roadmap = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" my-[6rem]">
      <h1
        data-aos={"fade-up"}
        className="text-2xl md:text-4xl flex justify-center text-center font-patua tracking-wide  text-[#484848] "
      >
        Roadmap
      </h1>
      <div className=" relative flex justify-center my-24">
        <div
          data-aos={"fade-up"}
          class="absolute w-[30px] z-10 rounded-2xl h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 "
        ></div>
        <div className="w-full flex flex-col justify-between">
          <div className="  my-10 flex justify-start items-center h-fit w-full ">
            <div className="absolute flex justify-center w-full h-8 ">
              <img className=" z-10" width={26} height={26} src={tick} />
            </div>
            <div
              data-aos={"zoom-in"}
              className="  w-[45%] xl:w-[28.125rem] xl:ml-32 py-9"
            >
              <div className=" relative transition duration-500 ease-in-out hover:-translate-y-1 text-white bg-gradient-to-b from-[#5831C8] to-[#2E62E8] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 hover:scale-110 ">
                <div>
                  <div className=" font-patua w-full ml-3  text-left text-xl">
                    June 2023 - Pre-Development
                  </div>
                  <div className=" mt-5">
                    <div className="mt-2 p-1  text-left text-sm lg:font-semibold  w-full">
                      🚀 Conceptualization and Planning
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold w-full">
                      🚀 Team Formation
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold w-full">
                      🚀 White Paper Development
                    </div>
                  </div>
                </div>
                <div className="absolute  top-[43%] right-[-45]  ">
                  <img
                    className="mr-3 cursor-pointer "
                    width={40}
                    height={40}
                    src={rightTriangle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" my-10 flex justify-end items-center h-fit w-full">
            <div className="absolute flex justify-center w-full h-8 ">
              <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
            </div>
            <div
              data-aos={"zoom-in"}
              className="  w-[45%] xl:w-[28.125rem] xl:mr-32 py-9"
            >
              <div className="relative transition duration-500 ease-in-out hover:-translate-y-1 text-white bg-gradient-to-b from-[#5831C8] to-[#2E62E8] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 hover:scale-110 ">
                <div>
                  <div className=" font-patua w-full ml-3 text-left text-xl">
                  July 2024 - Staking Platform Launch ( Testnet )
                  </div>
                  <div className=" mt-5">
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Platform Integration
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold w-full">
                    🚀 Staking Platform Launch (Beta)
                    </div>
                  </div>
                </div>
                <div className="absolute top-[40%] left-[-30]  ">
                  <img
                    className="mr-3 cursor-pointer "
                    width={40}
                    height={40}
                    src={leftTriangle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 flex justify-start items-center h-fit w-full ">
            <div className="absolute flex justify-center w-full h-8 ">
              <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
            </div>
            <div
              data-aos={"zoom-in"}
              className="   w-[45%] xl:w-[28.125rem] xl:ml-32 py-9"
            >
              <div className="relative transition duration-500 ease-in-out hover:-translate-y-1 text-white bg-gradient-to-b from-[#5831C8] to-[#2E62E8] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 hover:scale-110 ">
                <div>
                  <div className=" font-patua w-full text-center text-xl">
                  Aug 2024 - Survey Platform Launch (Testnet)
                  </div>
                  <div className=" mt-5">
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Survey Platform Development
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold w-full">
                    🚀 Beta Testing and Feedback
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold w-full">
                    🚀 Platform Improvement 
                    </div> 
                  </div>
                </div>
                <div className="absolute top-[40%] right-[-45]  ">
                  <img
                    className="mr-3 cursor-pointer "
                    width={40}
                    height={40}
                    src={rightTriangle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" my-10 flex justify-end items-center h-fit w-full ">
            <div className="absolute flex justify-center w-full h-8 ">
              <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
            </div>
            <div
              data-aos={"zoom-in"}
              className="   w-[45%] xl:w-[28.125rem] xl:mr-32 py-9"
            >
              <div className=" relative transition duration-500 ease-in-out hover:-translate-y-1 text-white bg-gradient-to-b from-[#5831C8] to-[#2E62E8] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 hover:scale-110 ">
                <div>
                  <div className=" font-patua w-full text-center text-xl">
                  Aug 2024 - Token Launch and Adoption
                  </div>
                  <div className=" mt-5">
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Token Sale and Distribution
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold w-full">
                    🚀 Exchange Listing
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold w-full">
                    🚀 Community Building and Engagement 
                    </div>
                  </div>
                </div>
                <div className="absolute top-[40%] left-[-30]  ">
                  <img
                    className="mr-3 cursor-pointer "
                    width={40}
                    height={40}
                    src={leftTriangle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="  my-10 flex justify-start items-center h-fit w-full ">
            <div className="absolute flex justify-center w-full h-8 ">
              <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
            </div>
            <div
              data-aos={"zoom-in"}
              className="  w-[45%] xl:w-[28.125rem] xl:ml-32 py-9"
            >
              <div className=" relative transition duration-500 ease-in-out hover:-translate-y-1 text-white bg-gradient-to-b from-[#5831C8] to-[#2E62E8] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 hover:scale-110 ">
                <div>
                  <div className=" font-patua w-full ml-3 text-left text-xl">
                  Aug 2024 - Staking Platform Launch (Mainnet)
                  </div>
                  <div className=" mt-5">
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Public Launch and Promotion
                    </div>
                  </div>
                </div>
                <div className="absolute top-[40%] right-[-40]  ">
                  <img
                    className="mr-3 cursor-pointer "
                    width={40}
                    height={40}
                    src={rightTriangle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" my-10 flex justify-end items-center h-fit w-full">
            <div className="absolute flex justify-center w-full h-8 ">
              <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
            </div>
            <div
              data-aos={"zoom-in"}
              className="  w-[45%] xl:w-[28.125rem] xl:mr-32 py-9"
            >
              <div className="relative transition duration-500 ease-in-out hover:-translate-y-1 text-white bg-gradient-to-b from-[#5831C8] to-[#2E62E8] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 hover:scale-110 ">
                <div>
                  <div className=" font-patua ml-2 w-full text-center text-xl">
                  Aug 2024 - Survey Platform Launch (Mainnet)
                  </div>
                  <div className=" mt-5">
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Public Launch and Promotion
                    </div>
                  </div>
                </div>
                <div className="absolute top-[30%] left-[-30]  ">
                  <img
                    className="mr-3 cursor-pointer "
                    width={40}
                    height={40}
                    src={leftTriangle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 flex justify-start items-center h-fit w-full ">
            <div className="absolute flex justify-center w-full h-8 ">
              <div className=" rounded-full w-5 h-5 z-10 bg-white "></div>
            </div>
            <div
              data-aos={"zoom-in"}
              className="   w-[45%] xl:w-[28.125rem] xl:ml-32 py-9"
            >
              <div className=" relative transition duration-500 ease-in-out hover:-translate-y-1 text-white bg-gradient-to-b from-[#5831C8] to-[#2E62E8] rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4 hover:scale-110 ">
                <div>
                  <div className=" font-patua w-full text-center text-xl">
                  Aug 2024 -Growth and Expansion
                  </div>
                  <div className=" mt-5">
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Partnerships and Integrations
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Continuous Development and Improvement
                    </div>
                    <div className="mt-2 p-1 text-left text-sm xl:font-semibold  w-full">
                    🚀 Ecosystem Development
                    </div>
                  </div>
                </div>
                <div className="absolute top-[40%] right-[-45]  ">
                  <img
                    className="mr-3 cursor-pointer "
                    width={40}
                    height={40}
                    src={rightTriangle}
                  />
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
