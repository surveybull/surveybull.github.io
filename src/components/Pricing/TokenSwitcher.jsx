import React, { useEffect, useState } from "react";
import {
  useWorldcoinSwitcher,
  useEtheriumSwitcher,
  useTotalCost,
} from "../../store/Calculator";
import { Loader } from "lucide-react";
import { MdError, MdErrorOutline } from "react-icons/md";
import { getDecimalSeparateNum } from "../../helper/getDecimalSeparateNum";
import { WLD_PRICE_FETCHER, ETH_PRICE_FETCHER } from "../../constant/app";


function TokenSwitcher() {
  const [isWorldcoinClicked, setIsWorldcoinClicked] = useWorldcoinSwitcher(
    (state) => [state.isClicked, state.setIsClicked]
  );
  const [isEtheriumClicked, setIsEtheriumClicked] = useEtheriumSwitcher(
    (state) => [state.isClicked, state.setIsClicked]
  );
  const [ethUSD, setEthUsd] = useState(null);
  const [wldUSD, setWldUsd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(error);
  const totalCost = useTotalCost((state) => state.totalCost);
  const fetchData = async () => {
    setLoading(true);
    setError(false); // Reset error state before fetching
    try {
      const eth = await fetch(ETH_PRICE_FETCHER);
      const wld = await fetch(WLD_PRICE_FETCHER);
      if (!eth.ok) {
        throw new Error(`Error ${eth.status}: ${eth.statusText}`);
      }
      if (!wld.ok) {
        throw new Error(`Error ${wld.status}: ${wld.statusText}`);
      }
      const ethPrice = await eth.json();
      const wldPrice = await wld.json();
      console.log("🚀 ~ fetchData ~ wldPrice:", wldPrice)
      
      setEthUsd((Number(ethPrice.ethereum.usd)).toFixed(2));
      setWldUsd((Number(wldPrice.data.attributes.token_prices["0x2cfc85d8e48f8eab294be644d9e25c3030863003"])).toFixed(2));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, []);

  let totalEth;
  let totalWld;
  if (loading) {
    totalEth = <Loader className="animate-spin" />;
    totalWld = <Loader className="animate-spin" />;
  } else if (ethUSD && wldUSD) {
    totalEth = (Number(totalCost) / Number(ethUSD)).toFixed(7);
    totalWld = (Number(totalCost) / Number(wldUSD)).toFixed(7);
  }

  return (
    <>
      <div className="border border-[#E7E9EB] bg-[#FFFFFF] rounded-[6px] p-2 flex gap-2">
        <button
          className={` ${
            isEtheriumClicked &&
            "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] text-[#FFFFFF]"
          }  rounded-[4px] p-3 flex flex-col justify-center gap-y-1 `}
          onClick={() => {
            setIsWorldcoinClicked(false);
            setIsEtheriumClicked(true);
          }}
        >
          <span className="text-[14px] font-HelveticaNeueMedium sm:text-start text-center w-full">
            Ethereum
          </span>
          <span className="text-[12px] font-HelveticaNeueLight">
            Price - {ethUSD} USD
          </span>
        </button>
        <button
          className={` ${
            isWorldcoinClicked &&
            "bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] text-[#FFFFFF]"
          }  rounded-[4px] p-3 flex flex-col justify-center gap-y-1 `}
          onClick={() => {
            setIsWorldcoinClicked(true);
            setIsEtheriumClicked(false);
          }}
        >
          <span className="text-[14px] font-HelveticaNeueMedium sm:text-start text-center w-full">
            Worldcoin
          </span>
          <span className="text-[12px] font-HelveticaNeueLight">
            Price - {wldUSD} USD
          </span>
        </button>
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <span className="text-[#5A6573] text-[18px] font-HelveticaNeueLight">
          Total Payable {isWorldcoinClicked ? "WLD" : "ETH"} token
        </span>
        <div className="text-[#3B4EF4] text-[24px] font-HelveticaNeueBold  flex items-center gap-2 sm:justify-end justify-center">
          <span>
            {isWorldcoinClicked ? (
              totalCost == "0" ? (
                "FREE"
              ) : Number(totalWld) ? (
                getDecimalSeparateNum(Number(totalWld))
               ) : (
                <MdErrorOutline />
              )
            ) : totalCost == "0" ? (
              "FREE"
            ) : Number(totalEth) ? (
              getDecimalSeparateNum(Number(totalEth))
            ) : (
              <MdErrorOutline />
            )}
          </span>{" "}
          <span>
            {totalCost == "0" ? "" : isWorldcoinClicked ? "WLD" : "ETH"}
          </span>
        </div>
      </div>
    </>
  );
}

export default TokenSwitcher;
