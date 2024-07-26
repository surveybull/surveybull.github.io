import tick from "../../assets/tick.svg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Phase1 from "../../assets/Phase1.svg";
import Phase2 from "../../assets/Phase2.svg";
import Phase3 from "../../assets/Phase3.svg";
import Phase4 from "../../assets/Phase4.svg";
import Phase5 from "../../assets/Phase5.svg";
import Phase6 from "../../assets/Phase6.svg";
import Phase7 from "../../assets/Phase7.svg";
import Phase8 from "../../assets/Phase8.svg";
import line from "../../assets/MainLine.svg";
import Phase1line from "../../assets/Phase1line.svg";
import Phase2line from "../../assets/Phase2line.svg";
import Phase3line from "../../assets/Phase3line.svg";
import Phase4line from "../../assets/Phase4line.svg";
import Phase5line from "../../assets/Phase5line.svg";
import Phase6line from "../../assets/Phase6line.svg";
import Phase7line from "../../assets/Phase7line.svg";
import Phase8line from "../../assets/Phase8line.svg";

import Card from "./Card";
const data2 = {
  heading: "Token & Platform Development",
  status: "In-progress",
  description: [
    {
      heading: "Smart Contract Development",
      description: [
        "Develop the smart contracts for the token, vesting, staking, and survey platform.",
      ],
    },
    {
      heading: "Survey Platform Development",
      description: [
        "Develop the survey platform for survey creation and participation, integrating blockchain technology for data storage and security.",
      ],
    },
    {
      heading: "Staking Dashboard Development",
      description: [
        "Develop the frontend components of the staking dashboard using modern web development frameworks and libraries..",
      ],
    },
    {
      heading: "Token Wallet Integration",
      description: [
        "Integrate the token with popular cryptocurrency wallets to ensure compatibility and ease of use for users.",
      ],
    },
  ],
};

const data = [
  {
    heading: "Pre-Development",
    status: "Done",
    description: [
      {
        heading: "Conceptualization and Planning",
        description: [
          "Define the purpose and goals of the token project.",
          "Conduct market research and identify target audience and competitors.",
          "Outline the tokenomics, including token supply, distribution, and utility.",
        ],
      },
      {
        heading: "Team Formation",
        description: [
          "Assemble a team with expertise in blockchain development and marketing.",
        ],
      },
      {
        heading: "White Paper Development",
        description: [
          "Create a comprehensive whitepaper outlining the project's vision, technical details, tokenomics, and roadmap.",
          "Review and refine the whitepaper based on feedback from advisors and stakeholders.",
        ],
      },
    ],
  },
  {
    heading: "Token & Platform Development",
    status: "In-progress",
    description: [
      {
        heading: "Smart Contract Development",
        description: [
          "Develop the smart contracts for the token, vesting, staking, and survey platform.",
        ],
      },
      {
        heading: "Survey Platform Development",
        description: [
          "Develop the survey platform for survey creation and participation, integrating blockchain technology for data storage and security.",
        ],
      },
      {
        heading: "Staking Dashboard Development",
        description: [
          "Develop the frontend components of the staking dashboard using modern web development frameworks and libraries..",
        ],
      },
      {
        heading: "Token Wallet Integration",
        description: [
          "Integrate the token with popular cryptocurrency wallets to ensure compatibility and ease of use for users.",
        ],
      },
    ],
  },
  {
    heading: "Staking Platform Launch (Testnet)",
    status: "Pending",
    description: [
      {
        heading: "Platform Integration",
        description: [
          "Integrate the staking platform with the token and survey platform to enable staking rewards and governance participation.",
          "Test the integration to ensure seamless functionality and interoperability between platforms",
        ],
      },
      {
        heading: "Staking Platform Launch (Beta)",
        description: [
          "Launch the staking platform in beta mode, allowing early adopters to stake tokens and earn rewards.",
          "Gather feedback from beta testers to identify any issues or improvements needed before the full launch.",
        ],
      },
    ],
  },
  {
    heading: "Survey Platform Launch (Testnet)",
    status: "Pending",
    description: [
      {
        heading: "Survey Platform Development",
        description: [
          "Develop the survey platform for survey creation and participation, integrating blockchain technology for data storage and security.",
          "Conduct testing on the testnet to ensure platform functionality, scalability, and security.",
        ],
      },
      {
        heading: "Beta Testing and Feedback",
        description: [
          "Invite a select group of users to participate in beta testing of the survey platform.",
          "Gather feedback from beta testers to identify bugs, usability issues, and feature requests.",
        ],
      },
      {
        heading: "Platform Improvement",
        description: [
          "Implement necessary improvements and enhancements based on beta testing feedback.",
          "Optimize platform performance and user experience for the mainnet launch.",
        ],
      },
    ],
  },
  {
    heading: "Token Launch and Adoption",
    status: "Pending",
    description: [
      {
        heading: "Token Sale and Distribution",
        description: [
          "Plan and execute the token sale, including public sales, and token distribution events.",
          "Implement a marketing strategy to generate awareness and attract investors to the token sale.",
        ],
      },
      {
        heading: "Exchange Listing",
        description: [
          "Secure listings on cryptocurrency exchanges to enable trading of the token.",
          "Negotiate listing terms and comply with exchange requirements for token listing.",
          "Announce the token listing on CoinGecko, CoinMarketCap, Dextools, and other targeted exchanges through official channels and social media platforms.",
        ],
      },
      {
        heading: "Community Building and Engagement",
        description: [
          "Build a strong community around the token through social media engagement, community forums, and events.",
          "Provide ongoing support and communication to token holders to foster trust and loyalty.",
        ],
      },
    ],
  },
  {
    heading: "Staking Platform Launch (Mainnet)",
    status: "Pending",
    description: [
      {
        heading: "Public Launch and Promotion",
        description: [
          "Officially launch the staking platform on the mainnet, opening it to the public for staking and governance participation.",
          "Implement a marketing strategy to attract stakers and incentivize participation in the staking ecosystem.",
        ],
      },
    ],
  },
  {
    heading: "Survey Platform Launch (Mainnet)",
    status: "Pending",
    description: [
      {
        heading: "Public Launch and Promotion",
        description: [
          "Officially launch the survey platform on the mainnet, opening it to the public for survey creation and participation.",
          "Implement a marketing strategy to generate awareness and attract surveyors and participants to the platform.",
        ],
      },
    ],
  },
  {
    heading: "Growth and Expansion",
    status: "Pending",
    description: [
      {
        heading: "Partnerships and Integrations",
        description: [
          "Identify strategic partnerships and integration opportunities to expand the survey platform users and reach.",
          "Collaborate with other projects, platforms, and businesses to leverage synergies and increase adoption.",
        ],
      },
      {
        heading: "Continuous Development and Improvement",
        description: [
          "Continuously update and improve the survey platform, features, and user experience based on feedback and market trends.",
          "Stay informed about regulatory developments and adapt the project's strategy and operations accordingly.",
        ],
      },
      {
        heading: "Marketing and Outreach to onboard survey participants",
        description: [
          "Digital Marketing: Use social media, SEO, PPC, and email marketing to reach potential participants.",
          "Incentives: Offer incentives such as token rewards to encourage users onboarding and information gathering.",
          "Content Marketing: Create engaging content (blogs, videos, infographics) to educate and attract potential survey participants.",
        ],
      },
      {
        heading: "Ecosystem Development",
        description: [
          "Develop and support an ecosystem of dApps, services, and platforms that utilize the token for various purposes.",
          "Foster innovation and creativity within the ecosystem to drive long-term value and sustainability.",
        ],
      },
    ],
  },
];

const Map = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" my-[6rem]">
      <div className=" relative flex md:justify-center my-24">
        <img className="absolute z-10 h-full " src={line} alt="" />
        {/* <div className="absolute w-4 h-4 ml-[3px] md:ml-0 rounded-full bg-[#8B97FF] z-50"></div> */}
        {/* <div className="absolute w-4 bottom-0 h-4 ml-[3px] md:ml-0 rounded-full bg-[#8B97FF] z-50"></div> */}
        {/* <div class="absolute w-[2px] z-10 rounded-2xl ml-[8px] md:ml-0 h-full border-dashed border-2 border-indigo-600 "></div> */}
        <div className="w-full flex flex-col justify-between my-[50px]">
          <div className=" my-10 md:flex  h-fit w-full">
            <div className="absolute flex md:justify-center mt-12 md:mt-0 w-full h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase1} alt="Your Image" class="" />
              </div>
            </div>
            <div className="md:w-[50%] md:text-[18px] text-[16px] pl-12 md:pl-0 flex justify-start md:justify-end pt-4 pb-2 font-HelveticaNeueMedium pr-10">
              June 2023
            </div>
            <div className="relative w-[100%] md:w-[45%] pl-12 flex justify-end md:justify-center md:pl-8   ">
              <div className="absolute top-7 left-0">
                <img src={Phase1line} width={90} alt="Your Image" class="" />
              </div>
              <div className="z-10">
                <Card data={data[0]} />
              </div>
            </div>
          </div>

          <div className="  my-10 md:flex-row flex flex-col-reverse justify-end sm:justify-between  h-fit w-full ">
            <div className="absolute flex  md:justify-center w-full mt-12 md:mt-0  h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase2} alt="Your Image" class="" />
              </div>
            </div>
            <div className="relative w-[100%] md:w-[50%] pl-12 md:pl-0 flex md:justify-center justify-end md:pr-10 lg:pr-0   ">
              <div className="hidden md:block absolute top-7 md:right-0  ">
                <img src={Phase2line} width={90} alt="Your Image" class="" />
              </div>
              <div className=" md:hidden absolute top-7 left-0  ">
                <img src={Phase2line} width={90} alt="Your Image" class="" />
              </div>
              <div className="md:ml-6 ml-0 z-10">
                <Card data={data[1]} />
              </div>
            </div>
            <div className="pl-12 md:text-[18px] text-[16px] md:pl-2 pt-4 pb-2 lg:w-[47%] md:w-[45%] font-HelveticaNeueMedium">
              July 2024
            </div>
          </div>

          <div className=" my-10 md:flex  h-fit w-full">
            <div className="absolute flex md:justify-center mt-12 md:mt-0 w-full h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase3} alt="Your Image" class="" />
              </div>
            </div>
            <div className="md:w-[50%] md:text-[18px] text-[16px] pl-12 md:pl-0 flex justify-start md:justify-end pt-4 pb-2 font-HelveticaNeueMedium pr-10">
              Aug 2024
            </div>
            <div className="relative w-[100%] md:w-[45%] pl-12 flex justify-end md:justify-center md:pl-8   ">
              <div className="absolute top-7 left-0">
                <img src={Phase3line} width={90} alt="Your Image" class="" />
              </div>
              <div className="z-10">
                <Card data={data[2]} />
              </div>
            </div>
          </div>

          <div className="  my-10 md:flex-row flex flex-col-reverse justify-end md:justify-between  h-fit w-full ">
            <div className="absolute flex  md:justify-center w-full mt-12 md:mt-0  h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase4} alt="Your Image" class="" />
              </div>
            </div>
            <div className="relative w-[100%] md:w-[50%] pl-12 md:pl-0 flex md:justify-center justify-end md:pr-10 lg:pr-0  ">
              <div className="hidden md:block absolute top-7 md:right-0  ">
                <img src={Phase4line} width={90} alt="Your Image" class="" />
              </div>
              <div className=" md:hidden absolute top-7 left-0  ">
                <img src={Phase4line} width={90} alt="Your Image" class="" />
              </div>
              <div className="md:ml-6 ml-0 z-10">
                <Card data={data[3]} />
              </div>
            </div>
            <div className="pl-12 md:text-[18px] text-[16px] md:pl-2 pt-4 pb-2 lg:w-[47%] md:w-[45%] font-HelveticaNeueMedium">
              Aug 2024
            </div>
          </div>

          <div className=" my-10 md:flex  h-fit w-full">
            <div className="absolute flex md:justify-center mt-12 md:mt-0 w-full h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase5} alt="Your Image" class="" />
              </div>
            </div>
            <div className="md:w-[50%] md:text-[18px] text-[16px] pl-12 md:pl-0 flex justify-start md:justify-end pt-4 pb-2 pr-10 font-HelveticaNeueMedium">
              Aug 2024
            </div>
            <div className="relative w-[100%] md:w-[45%] pl-12 flex justify-end md:justify-center md:pl-8   ">
              <div className="absolute top-7 left-0">
                <img src={Phase5line} width={90} alt="Your Image" class="" />
              </div>
              <div className="z-10">
                <Card data={data[4]} />
              </div>
            </div>
          </div>

          <div className="  my-10 md:flex-row flex flex-col-reverse justify-end md:justify-between  h-fit w-full ">
            <div className="absolute flex  md:justify-center w-full mt-12 md:mt-0  h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase6} alt="Your Image" class="" />
              </div>
            </div>
            <div className="relative w-[100%] md:w-[50%] pl-12 md:pl-0 flex md:justify-center justify-end  md:pr-10 lg:pr-0 ">
              <div className="hidden md:block absolute top-7 md:right-0  ">
                <img src={Phase6line} width={90} alt="Your Image" class="" />
              </div>
              <div className=" md:hidden absolute top-7 left-0  ">
                <img src={Phase6line} width={90} alt="Your Image" class="" />
              </div>
              <div className="md:ml-6 ml-0 z-10">
                <Card data={data[5]} />
              </div>
            </div>
            <div className="pl-12 md:text-[18px] text-[16px] md:pl-2 pt-4 pb-2 lg:w-[47%] md:w-[45%] font-HelveticaNeueMedium">
              Aug 2024
            </div>
          </div>

          <div className=" my-10 md:flex  h-fit w-full">
            <div className="absolute flex md:justify-center mt-12 md:mt-0 w-full h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase7} alt="Your Image" class="" />
              </div>
            </div>
            <div className="md:w-[50%] md:text-[18px] text-[16px] pl-12 md:pl-0 flex justify-start md:justify-end pt-4 pb-2 pr-10 font-HelveticaNeueMedium">
              Aug 2024
            </div>
            <div className="relative w-[100%] md:w-[45%] pl-12 flex justify-end md:justify-center md:pl-8   ">
              <div className="absolute top-7 left-0">
                <img src={Phase7line} width={90} alt="Your Image" class="" />
              </div>
              <div className="z-10">
                <Card data={data[6]} />
              </div>
            </div>
          </div>

          <div className="  my-10 md:flex-row flex flex-col-reverse justify-end md:justify-between  h-fit w-full ">
            <div className="absolute flex  md:justify-center w-full mt-12 md:mt-0  h-8 ">
              <div className=" rounded-full w-12 h-12 md:w-16 md:h-16 z-10 ml-[-12px] md:ml-0 ">
                <img src={Phase8} alt="Your Image" class="" />
              </div>
            </div>
            <div className="relative w-[100%] md:w-[50%] pl-12 md:pl-0 flex md:justify-center justify-end  md:pr-10 lg:pr-0 ">
              <div className="hidden md:block absolute top-7 md:right-0  ">
                <img src={Phase8line} width={90} alt="Your Image" class="" />
              </div>
              <div className=" md:hidden absolute top-7 left-0  ">
                <img src={Phase8line} width={90} alt="Your Image" class="" />
              </div>
              <div className="md:ml-6 ml-0 z-10">
                <Card data={data[7]} />
              </div>
            </div>
            <div className="pl-12 md:text-[18px] text-[16px] md:pl-2 pt-4 pb-2 font-HelveticaNeueMedium  lg:w-[47%] md:w-[45%]">
              Aug 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
