import Logo from "../../assets/SurveybullLogo.svg";
import FooterBg from "../../assets/background/FooterBg.jpg";
import FooterTelegram from "../../assets/FooterTelegram.svg";
import FooterMail from "../../assets/FooterMail.svg";
import FooterTwitter from "../../assets/FooterTwitter.svg";
import discord from "../../assets/Discord.svg";
import FooterMobileBg from "../../assets/background/FooterMobileBg.jpg";
import {
  BLOCKCHAIN_LINK,
  DISCORD_LINK,
  SMART_CONTRACT,
  TELEGRAM_LINK,
  MAINNET_LINK,
  TWITTER_LINK,
  WORLD_ID,
} from "../../constant/app";
import { Link } from "react-router-dom";
const sectionsData = [
  {
    title: "Offering",
    links: [
      { title: "Survey Creation", path: "/surveycreation" },
      { title: "Earn Crypto", path: "/#Earn" },
      // { title: "Staking Rewards", path: "/#Distribution" },
      { title: "Participation Rewards", path: "/#Distribution" },
      { title: "Buy WLD Token", path: "/" },
    ],
  },
  {
    title: "Fundamentals",
    links: [
      // { title: "Tokenomics", path: "/#tokenomics" },
      { title: "World ID", link: WORLD_ID },
      { title: "Smart Contracts", link: SMART_CONTRACT },
      { title: "Blockchain", link: BLOCKCHAIN_LINK },
    ],
  },
  {
    title: "Helpful Links",
    links: [
      { title: "Why Us", path: "/#Why" },
      { title: "Pricing", path: "/pricing" },
      { title: "FAQs", path: "/faqs" },
      { title: "Privacy", path: "/" },
      { title: "Terms and Conditions", path: "/" },
    ],
  },
];

const Section = ({ title, links }) => {
  return (
    <div className="text-center lg:text-start w-max">
      <p className="sm:text-[16px] text-[14px] font-[500] text-[#132337]">
        {title}
      </p>
      <nav className="mt-4">
        <ul className="flex flex-col gap-y-2">
          {links.map((data, index) => (
            <li key={index}>
              {data.path ? (
                <Link
                  className="text-[#5A6573] text-[12px] sm:text-[14px] font-[400]"
                  to={data.path}
                >
                  {data.title}
                </Link>
              ) : (
                <a
                  className="text-[#5A6573] text-[12px] sm:text-[14px] font-[400] hover:cursor-pointer"
                  href={data.link}
                  target="_blank"
                >
                  {data.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Footer = () => {
  const year = new Date();
  return (
    <footer class="text-black -mt-[50px]">
      <div className="gradient-bg py-7 md:py-10 px-6 relative top-[6.5rem] w-[85vw] max-w-[1100px] mx-auto rounded-[8px] sm:rounded-[20px] flex md:flex-nowrap flex-wrap justify-center lg:justify-between items-center gap-y-4 gap-x-5 shadow-[0px_4px_34px_0px_rgba(90,106,248,0.4)]">
        <div className="text-[#FFFFFF] md:text-[36px] text-[24px] font-HelveticaNeueBold text-center">
          Start Earning Rewards Or Get Insightful Data ?
        </div>
        <button
          className="text-[#9333EA] md:text-[16px] text-[14px] font-[400] md:px-[30px] md:py-[12px] px-[20px] py-[10px] shadow-[2px_7px_16px_0px_rgba(255,255,255,0.1)] bg-[#FFFFFF] rounded-[7px] md:w-fit md:text-nowrap "
          onClick={() => {
            window.open(MAINNET_LINK);
          }}
        >
          Get Started
        </button>
      </div>
      <div className="sm:bg-[url('./assets/background/FooterBg.jpg')] bg-[url('./assets/background/FooterMobileBg.jpg')] bg-cover bg-repeat-round mt-11">
        <div class="max-w-screen-xl px-7 pt-24 pb-6 mx-auto sm:px-7 xl:px-8">
          <div class="flex gap-10 lg:flex-row flex-col justify-center">
            <div class="flex flex-col gap-y-7 lg:w-[25%] w-full items-center lg:items-start justify-between">
              <img src={Logo} alt="logo" className="w-[170px] sm:w-fit h-fit" />
              <div className="lg:text-start text-center text-[#5A6573] text-[14px] font-[400] leading-[20px] md:leading-[26px]">
                Our mission is to provide surveyors with the essential tools to
                gather reliable and authentic data. Leveraging our pioneering
                WorldID protocol, we eliminate fake reviews and unreliable
                responses, delivering verified, human-generated feedback that is
                recorded on the blockchain.
              </div>
            </div>

            <div class="flex flex-wrap  gap-11 flex-1 lg:w-[85%] w-full sm:justify-evenly justify-center ">
              {sectionsData.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
            <div class="flex flex-col gap-y-4 items-center">
              <p class="text-[14px] sm:text-[16px] font-medium text-black">
                Contact Us
              </p>
              <div className="flex gap-2 items-center">
                {/* <img src={FooterMail} alt="FooterMail" /> */}
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={FooterTelegram} alt="FooterTelegram" />
                </a>

                <a
                  href={TWITTER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={FooterTwitter} alt="FooterTwitter" />
                </a>

                <a
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={discord} alt="discord" />
                </a>
              </div>
            </div>
          </div>
          <div class="pt-6 mt-12 border-t border-[#5A6573] flex justify-center text-center text-[#5A6573] sm:text-[14px] text-[12px] font-[400]">
            &copy; {year.getFullYear()} SurveyBull All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
