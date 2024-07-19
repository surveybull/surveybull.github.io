import Logo from "../../../public/SurveybullLogo.svg";
import FooterBg from "../../assets/background/FooterBg.jpg";
import FooterTelegram from "../../assets/FooterTelegram.svg";
import FooterMail from "../../assets/FooterMail.svg";
import FooterTwitter from "../../assets/FooterTwitter.svg";
import discord from "../../assets/Discord.svg";
const sectionsData = [
  {
    title: "Offering",
    links: ["Earn crypto", "Stacking Reward", "Bull token", "Survey creation"],
  },
  {
    title: "Fundamentals",
    links: ["Tokenomics", "World ID", "Smart contract", "Surveys"],
  },
  {
    title: "Helpful Links",
    links: ["FAQs", "About us", "Privacy", "Terms and Conditions"],
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
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="text-[#5A6573] text-[12px] sm:text-[14px] font-[400]"
                href="/"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

const Footer = () => {
  return (
    <footer class="text-black">
      <div className="bg-gradient-to-r from-[#3B4EF4] via-[#5868F8] to-[#978FFD] py-7 md:py-10 px-6 relative top-[6.5rem] w-[85vw] max-w-[1100px] mx-auto rounded-[8px] sm:rounded-[20px] flex flex-wrap justify-center lg:justify-between items-center gap-y-4 gap-x-1 shadow-[0px_4px_34px_0px_rgba(90,106,248,0.4)]">
        <div className="text-[#FFFFFF] text-[24px] font-[700] text-center">
          Start Earning Rewards Or Get Insightful Data ?
        </div>
        <button className="text-[#3B4EF4] md:text-[16px] text-[14px] font-[400] md:px-[30px] md:py-[12px] px-[20px] py-[10px] shadow-[2px_7px_16px_0px_rgba(255,255,255,0.1)] bg-[#FFFFFF] rounded-[7px] ">
          Get Started
        </button>
      </div>
      <div
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="mt-11"
      >
        <div class="max-w-screen-xl px-7 pt-24 pb-6 mx-auto sm:px-7 xl:px-8">
          <div class="flex gap-10 lg:flex-row flex-col justify-center">
            <div class="flex flex-col gap-y-7 lg:w-[25%] w-full items-center lg:items-start justify-between">
              <img src={Logo} className="w-[170px] sm:w-fit h-fit" />
              <div className="lg:text-start text-center text-[#5A6573] text-[14px] font-[400]">
                At SurveyBull, we're dedicated to equipping surveyors with the
                tools they need to gather authentic data and drive informed
                decisions.
              </div>
            </div>

            <div class="flex flex-wrap  gap-11 flex-1 lg:w-[85%] w-full sm:justify-evenly justify-center items-center ">
              {sectionsData.map((section, index) => (
                <Section
                  key={index}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
            <div class="flex flex-col gap-y-4 items-center">
              <p class="text-lg font-medium text-black">Contact Us</p>
              <div className="flex gap-2 items-center">
                <img src={FooterMail} alt="FooterMail" />
                <img src={FooterTelegram} alt="FooterTelegram" />
                <img src={FooterTwitter} alt="FooterTwitter" />
                <img src={discord} alt="discord" />
              </div>
            </div>
          </div>
          <div class="pt-6 mt-12 border-t border-[#5A6573] flex justify-center text-center text-[#5A6573] sm:text-[14px] text-[12px] font-[400]">
            &copy; 2024 Survey Bull All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
