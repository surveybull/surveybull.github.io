import React from "react";
import Alpha from "../../assets/Investor/Alpha.svg";
import Whitebit from "../../assets/Investor/Whitebit.svg";
import HypeAuditor from "../../assets/Investor/HypeAuditor.svg";
import Devtagon from "../../assets/Investor/Devtagon.svg";
import Antler from "../../assets/Investor/Antler.svg";
import Validentry from "../../assets/Investor/Validentry.svg";
import Koinmedya from "../../assets/Investor/Koinmedya.svg";
import Chainsocial from "../../assets/Investor/Chainsocial.svg";
import Becommer from "../../assets/Investor/Becommer.svg";
import Gptverse from "../../assets/Investor/Gptverse.svg";
import Marsala from "../../assets/Investor/Marsala.svg";
import Bnbchain from "../../assets/Investor/Bnbchain.svg";
import Gempad from "../../assets/Investor/Gempad.svg";
import Iluminary from "../../assets/Investor/Iluminary.svg";
import Lydia from "../../assets/Investor/Lydia.svg";
import Taskon from "../../assets/Investor/Taskon.svg";
import Poolz from "../../assets/Investor/Poolz.svg";
import Kommunitas from "../../assets/Investor/Kommunitas.svg";
import Cls from "../../assets/Investor/Cls.svg";
import Spores from "../../assets/Investor/Spores.svg";
import Kdg from "../../assets/Investor/Kdg.svg";
import Trustfi from "../../assets/Investor/Trustfi.svg";
import IxI from "../../assets/Investor/IxI.svg";
import Galxe from "../../assets/Investor/Galxe.svg";
import Decubate from "../../assets/Investor/Decubate.svg";
function Card({ imgSrc, id }) {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF1A] to-[#FFFFFF4D] shadow-[3px_9px_35px_0px_rgba(19,35,55,0.06)] border border-[#FFFFFFB2] rounded-[3px] px-4 py-6 flex items-center justify-center">
      <img src={imgSrc} alt="Alpha" />
    </div>
  );
}
function Investor() {
  const cardData = [
    { id: "1", imgSrc: Alpha },
    { id: "2", imgSrc: Whitebit },
    { id: "3", imgSrc: HypeAuditor },
    { id: "4", imgSrc: Devtagon },
    { id: "5", imgSrc: Antler },
    { id: "6", imgSrc: Validentry },
    { id: "7", imgSrc: Koinmedya },
    { id: "8", imgSrc: Chainsocial },
    { id: "9", imgSrc: Becommer },
    { id: "10", imgSrc: Gptverse },
    { id: "11", imgSrc: Marsala },
    { id: "12", imgSrc: Bnbchain },
    { id: "13", imgSrc: Gempad },
    { id: "14", imgSrc: Iluminary },
    { id: "15", imgSrc: Lydia },
    { id: "16", imgSrc: Taskon },
    { id: "17", imgSrc: Poolz },
    { id: "18", imgSrc: Kommunitas },
    { id: "19", imgSrc: Cls },
    { id: "20", imgSrc: Spores },
    { id: "21", imgSrc: Kdg },
    { id: "22", imgSrc: Trustfi },
    { id: "23", imgSrc: IxI },
    { id: "24", imgSrc: Galxe },
    { id: "25", imgSrc: Decubate },
  ];
  return (
    <div className="my-[4rem]">
      <span className=" flex justify-center sm:text-[36px] text-[24px] font-HelveticaNeueBold">
        Investors & Partners
      </span>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 sm:gap-14 gap-8 mt-10 ">
        {cardData.map((item) => (
          <Card imgSrc={item.imgSrc} id={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Investor;
