import React,{useEffect} from "react";
import {
  useBULLtokenSwitcher,
  useEtheriumSwitcher,
} from "../../store/Calculator";

function TokenSwitcher() {
  const [isBullTokenClicked, setIsBullTokenClicked] = useBULLtokenSwitcher(
    (state) => [state.isClicked, state.setIsClicked]
  );
  const [isEtheriumClicked, setIsEtheriumClicked] = useEtheriumSwitcher(
    (state) => [state.isClicked, state.setIsClicked]
  );
  const fetchData = async () => {
    try {
     console.log("fetch data");
    } catch (error) {
      setError(error);
    }
  };
   useEffect(() => {
     fetchData();
     const intervalId = setInterval(fetchData, 60000);
     return () => clearInterval(intervalId);
   }, []);

  return (
    <>
      <div className="border border-[#E7E9EB] bg-[#FFFFFF] rounded-[6px] p-2 flex gap-2">
        <button
          className={` ${
            isBullTokenClicked &&
            "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] text-[#FFFFFF]"
          }  rounded-[4px] p-3 flex flex-col justify-center gap-y-1 `}
          onClick={() => {
            setIsBullTokenClicked(true);
            setIsEtheriumClicked(false);
          }}
        >
          <span className="text-[14px] font-HelveticaNeueMedium">
            BULL token
          </span>
          <span className="text-[12px] font-HelveticaNeueLight">
            Price - 0.2 USD
          </span>
        </button>
        <button
          className={` ${
            isEtheriumClicked &&
            "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] text-[#FFFFFF]"
          }  rounded-[4px] p-3 flex flex-col justify-center gap-y-1 `}
          onClick={() => {
            setIsBullTokenClicked(false);
            setIsEtheriumClicked(true);
          }}
        >
          <span className="text-[14px] font-HelveticaNeueMedium">Ethereum</span>
          <span className="text-[12px] font-HelveticaNeueLight">
            Price - 3,494.78 USD
          </span>
        </button>
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <span className="text-[#5A6573] text-[18px] font-HelveticaNeueLight">
          Total Payble BULL token
        </span>
        <span className="text-[#3B4EF4] text-[24px] font-HelveticaNeueBold sm:text-start text-center">
          800 BULL
        </span>
      </div>
    </>
  );
}

export default TokenSwitcher;
