import calculator from "../../assets/Calculator.svg";

const PriceCalculation = () => {
  return (
    <div className="py-4 mt-[2rem] md:mt-[2rem]">
      <div className="text-center text-4xl font-HelveticaNeueBold">
        <span className=" text-[rgba(59,78,244,1)]"> Example</span> Calculation
      </div>
      <div className="lg:flex-row  flex flex-col-reverse lg:justify-between justify-center items-center" >
        <div className="max-w-[700px] w-full">
          <div className="max-w-[700px] w-full ">
            <div className="m-5  rounded-xl px-6 py-4 border-white shadow-[3px_9px_35px_0px_rgb(19,35,55,0.06)] ">
              <div className="text-2xl font-[500] font-HelveticaNeueMedium my-3 ">
                Let's create a hypothetical survey:
              </div>

              <div className="my-5">
                <hr className="h-[2px] bg-slate-400" />
              </div>
              <div>
                <div className="block sm:flex  my-3">
                  <div className=" flex sm:justify-between font-HelveticaNeueMedium text-base sm:w-[170px]">
                    <div>Cost per attribute</div>
                    <div>:</div>
                  </div>
                  <div className="flex justify-end flex-1">
                    <span className=" text-[rgba(59,78,244,1)]">10 USD</span>
                  </div>
                </div>
                <div className="block sm:flex  my-2">
                  <div className="flex sm:justify-between font-HelveticaNeueMedium text-base sm:w-[170px]">
                    <div>Exchange rate</div>
                    <div>:</div>
                  </div>
                  <div className="flex justify-end flex-1">
                    <span className=" text-[rgba(59,78,244,1)]">
                      0.01 USD per BULL token
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[700px] w-full ">
            <div className="m-5   rounded-xl px-6 py-4 border-white shadow-[3px_9px_35px_0px_rgb(19,35,55,0.06)] ">
              <div className="text-2xl font-[500] font-HelveticaNeueMedium my-3 ">
                Calculation:
              </div>

              <div className="my-5">
                <hr className="h-[2px] bg-slate-400" />
              </div>
              <div>
                <div className="block sm:flex  my-3">
                  <div className=" sm:flex sm:justify-between font-HelveticaNeueMedium text-base sm:w-[400px]">
                    <div className="flex">
                      Cost for responses<div className="sm:hidden">:</div>
                    </div>
                    <div className="hidden sm:block">:</div>
                    <div className="max-w-[200px]">
                      100 responses × 100 BULL tokens per response
                    </div>
                  </div>
                  <div className="flex justify-end flex-1">
                    <span className=" text-[rgba(59,78,244,1)]">
                      = 10,000 BULL tokens
                    </span>
                  </div>
                </div>
                <div className="block sm:flex  my-3">
                  <div className=" sm:flex sm:justify-between font-HelveticaNeueMedium text-base sm:w-[400px]">
                    <div className="flex">
                      Cost for attributes<div className="sm:hidden">:</div>
                    </div>
                    <div className="hidden sm:block">:</div>
                    <div className="max-w-[200px]">
                      2 attributes × 1000 BULL tokens per attribute
                    </div>
                  </div>
                  <div className="flex justify-end flex-1">
                    <span className=" text-[rgba(59,78,244,1)]">
                      = 2,000 BULL tokens
                    </span>
                  </div>
                </div>
                <div className="block sm:flex  my-3">
                  <div className=" sm:flex sm:justify-between font-HelveticaNeueMedium text-base sm:w-[400px]">
                    <div className="flex">
                      Total cost<div className="sm:hidden">:</div>
                    </div>
                    <div className="hidden sm:block">:</div>
                    <div className="max-w-[200px]">
                      10,000 BULL tokens + 2,000 BULL tokens
                    </div>
                  </div>
                  <div className="flex justify-end flex-1">
                    <span className=" text-[rgba(59,78,244,1)]">
                      = 12,000 BULL tokens
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 lg:mt-0 justify-center items-center">
          <img src={calculator} alt="Your Image" class="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default PriceCalculation;
