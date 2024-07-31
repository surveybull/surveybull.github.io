import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="pt-4 ">
      <div className="text-center text-2xl md:text-4xl font-HelveticaNeueBold">
        Learn More{" "}
        <span className=" text-[rgba(59,78,244,1)]"> About BULL </span>Tokens
      </div>
      <div className="m-6 flex justify-center">
        <div className="text-center text-xs md:text-base">
          Explore the advantages of using BULL tokens for survey payments and
          discover our{" "}
          <Link to={"/#tokenomics"} className=" text-[rgba(59,78,244,1)]">
            tokenomics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
