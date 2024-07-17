const PriceWork = () => {
  return (
    <div className="py-4 mt-[2rem] md:mt-[2rem]">
      <div className="text-center text-4xl font-HelveticaNeueMedium">
        How <span className=" text-[rgba(59,78,244,1)]"> Pricing </span> Works
      </div>
      <div className="flex justify-center">
        <div className="m-6 w-[760px] rounded-xl px-8 py-8 border-white shadow-[3px_9px_35px_0px_rgb(19,35,55,0.06)] ">
          <div>
            <div className="text-2xl font-[500] font-HelveticaNeueMedium my-3 ">
              Cost per Response
            </div>
            <div className="text-sm font-[400] text-[#5A6573] my-4">
              The cost per response is configured in USD. For example, if the
              cost is 1 USD per response, the platform calculates the equivalent
              amount in <span className=" text-[rgba(59,78,244,1)]"> BULL tokens </span> based on the current exchange rate.
            </div>
            <div className="font-HelveticaNeueMedium text-base my-3">
              Example:
            </div>
            <div className="block sm:flex  my-3">
              <div className="font-HelveticaNeueMedium text-base sm:w-[30%]">
                Cost per response
              </div>
              <div>
                : <span className=" text-[rgba(59,78,244,1)]">1 USD</span>
              </div>
            </div>
            <div className="block sm:flex  my-3">
              <div className="font-HelveticaNeueMedium text-base sm:w-[30%]">
                Exchange rate
              </div>
              <div>
                :{" "}
                <span className=" text-[rgba(59,78,244,1)]">
                  0.01 USD per BULL token
                </span>
              </div>
            </div>
            <div className="block sm:flex  my-3">
              <div className="font-HelveticaNeueMedium text-base sm:w-[30%]">
                Equivalent in BULL tokens
              </div>
              <div>
                :{" "}
                <span className=" text-[rgba(59,78,244,1)]">
                  1 USD / 0.01 USD per BULL = 100 BULL tokens per response
                </span>
              </div>
            </div>
          </div>
          <div className="my-7">
            <hr className="h-[2px] bg-slate-400" />
          </div>
          <div>
            <div className="text-2xl font-[500] font-HelveticaNeueMedium my-3 ">
            Additional Attribute Cost
            </div>
            <div className="text-sm font-[400] text-[#5A6573] my-4">
            Each additional attribute selected adds to the total cost of the survey. For example, if each attribute costs an additional 10 USD:
            </div>
            <div className="font-HelveticaNeueMedium text-base my-3">
              Example:
            </div>
            <div className="block sm:flex  my-3">
              <div className="font-HelveticaNeueMedium text-base sm:w-[30%]">
                Cost per attribute
              </div>
              <div>
                : <span className=" text-[rgba(59,78,244,1)]">10 USD</span>
              </div>
            </div>
            <div className="block sm:flex  my-3">
              <div className="font-HelveticaNeueMedium text-base sm:w-[30%]">
                Exchange rate
              </div>
              <div>
                :{" "}
                <span className=" text-[rgba(59,78,244,1)]">
                  0.01 USD per BULL token
                </span>
              </div>
            </div>
            <div className="block sm:flex  my-3">
              <div className="font-HelveticaNeueMedium text-base sm:w-[30%]">
                Equivalent in BULL tokens
              </div>
              <div>
                :{" "}
                <span className=" text-[rgba(59,78,244,1)]">
                  10 USD / 0.01 USD per BULL = 1000 BULL tokens per attribute
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceWork;
