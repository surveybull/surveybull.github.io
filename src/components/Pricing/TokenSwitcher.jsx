import React, { useEffect, useState } from "react";
import {
  useBULLtokenSwitcher,
  useEtheriumSwitcher,
  useTotalCost,
} from "../../store/Calculator";
import { Loader } from "lucide-react";
import { MdError, MdErrorOutline } from "react-icons/md";
import { getDecimalSeparateNum } from "../../helper/getDecimalSeparateNum";
import { BULL_PRICE_FETCHER, ETH_PRICE_FETCHER } from "../../constant/app";

function TokenSwitcher() {
  const [isBullTokenClicked, setIsBullTokenClicked] = useBULLtokenSwitcher(
    (state) => [state.isClicked, state.setIsClicked]
  );
  const [isEtheriumClicked, setIsEtheriumClicked] = useEtheriumSwitcher(
    (state) => [state.isClicked, state.setIsClicked]
  );
  const [ethUSD, setEthUsd] = useState(null);
  const [bullUSD, setBullUsd] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  console.log(error);
  const totalCost = useTotalCost((state) => state.totalCost);
  const fetchData = async () => {
    setLoading(true);
    setError(false); // Reset error state before fetching
    try {
      const eth = await fetch(ETH_PRICE_FETCHER);
      const bull = await fetch(BULL_PRICE_FETCHER);
      if (!eth.ok) {
        throw new Error(`Error ${eth.status}: ${eth.statusText}`);
      }
      if (!bull.ok) {
        throw new Error(`Error ${bull.status}: ${bull.statusText}`);
      }
      const ethPrice = await eth.json();
      const bullPrice = await bull.json();
      setEthUsd(ethPrice.ethereum.usd);
      setBullUsd(bullPrice.rune.usd);
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
  let totalBull;
  if (loading) {
    totalEth = <Loader className="animate-spin" />;
    totalBull = <Loader className="animate-spin" />;
  } else if (ethUSD && bullUSD) {
    totalEth = (Number(totalCost) / Number(ethUSD)).toFixed(2);
    totalBull = (Number(totalCost) / Number(bullUSD)).toFixed(2);
  }

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
          <span className="text-[14px] font-HelveticaNeueMedium sm:text-start text-center w-full">
            BULL
          </span>
          <span className="text-[12px] font-HelveticaNeueLight">
            Price - {bullUSD} USD
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
          <span className="text-[14px] font-HelveticaNeueMedium sm:text-start text-center w-full">
            Ethereum
          </span>
          <span className="text-[12px] font-HelveticaNeueLight">
            Price - {ethUSD} USD
          </span>
        </button>
      </div>
      <div className="flex flex-col justify-center gap-y-2">
        <span className="text-[#5A6573] text-[18px] font-HelveticaNeueLight">
          Total Payable {isBullTokenClicked ? "BULL" : "ETH"} token
        </span>
        <div className="text-[#3B4EF4] text-[24px] font-HelveticaNeueBold  flex items-center gap-2 sm:justify-end justify-center">
          <span>
            {isBullTokenClicked ? (
              totalCost == "0" ? (
                "FREE"
              ) : Number(totalBull) ? (
                getDecimalSeparateNum(Number(Math.ceil(totalBull)))
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
            {totalCost == "0" ? "" : isBullTokenClicked ? "BULL" : "ETH"}
          </span>
        </div>
      </div>
    </>
  );
}

export default TokenSwitcher;
