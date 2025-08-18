import React from "react";
import { Helmet } from "react-helmet";
function SEO({ name, type, description, title }) {
  const intro = "Craft, Share, Earn. Embark on Your Survey Adventure Today!";
  const des =
    "survey suveybull SurveyBull cryptocurrencies crpto technologies Decentralization Participants surveyors Automated Calculation tech tokenomics Authentication Smart Contracts SmartContracts WorldCoin Blockchainnetwork Blockchain network bullnetwork compensation Payment distribution Wallet Investor token reward decentralized web3 airdrop tokengated gate tokens drop gifts blockchain block chain question answer quetions answer worldid device orb participation incentivized technology platform traceability data integrity authenticity transparent trustworthy BULL bull feedback  ";
  return (
    <Helmet>
      <title>
        {title}
      </title>
      <meta
        name="description"
        content={
          "Web3 Survey Platform: Secure, Verified Data with WorldID Authentication, Token-Gated Participation, Airdrop Rewards Solution, and Transparent Blockchain Transactions"
        }
      />
      <meta property="og:type" content={type} />
      <meta
        property="og:title"
        content={
          "SurveyBull – Blockchain-Powered Survey Platform"
        }
      />
      <meta property="og:description" content={intro} />
      <meta
        property="og:image"
        content="https://surveybull.io/homepage.jpg"
      />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta
        name="twitter:title"
        content={
          "SurveyBull – Blockchain-Powered Survey Platform"
        }
      />
      <meta
        name="twitter:description"
        content={
          "Web3 Survey Platform: Secure, Verified Data with WorldID Authentication, Token-Gated Participation, Airdrop Rewards Solution, and Transparent Blockchain Transactions"
        }
      />
    </Helmet>
  );
}

export default SEO;
