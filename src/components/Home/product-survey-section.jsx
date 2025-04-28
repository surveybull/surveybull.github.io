"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Scan, Gift, FileText, BarChart4, QrCode, Coins, Users, Fingerprint, Wallet } from "lucide-react"

export default function ProductSurveySection() {
  const [activeTab, setActiveTab] = useState("surveyor")

  return (
    <section className="w-full overflow-hidden space-y-10 my-10">
      {/* Background with gradient similar to the reference image */}
      {/* <div className="h-fit bg-gradient-to-r from-blue-200 via-purple-300 to-pink-200 bg-opacity-50 -z-10"> */}

      <div className="container mx-auto px-4 max-w-6xl py-16 flex flex-col gap-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="md:text-4xl md:leading-[52px] text-center text-2xl leading-[40px] font-HelveticaNeueBold">
            Product-Based
            <span className="text-[rgba(59,78,244,1)]"> Surveys </span>
          </h2>
          <p className="text-md md:text-lg text-[#5A6573] leading-[20px] max-w-3xl mx-auto">
            Connect directly with consumers through QR codes on your products. Get genuine feedback and reward
            participants instantly with blockchain technology.
          </p>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-3 bg-white/30 backdrop-blur-sm p-3 rounded-[30px] sm:rounded-full shadow-[0px_0px_40px_15px_rgba(151,143,253,0.1)]">
            <button
              onClick={() => setActiveTab("surveyor")}
              className={`px-6 py-3  rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "surveyor" ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-white/50"
                }`}
            >
              For Surveyors
            </button>
            <button
              onClick={() => setActiveTab("participant")}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${activeTab === "participant" ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-white/50"
                }`}
            >
              For Participants
            </button>
          </div>
        </div>

        {/* Content based on selected tab */}
        <div className="relative mt-5">
          {/* Surveyor Content */}
          <motion.div
            initial={activeTab === "surveyor" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            animate={activeTab === "surveyor" ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${activeTab === "surveyor" ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 max-[1150px]:max-w-[800px] mx-auto min-[1150px]:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-16 shadow-[0px_0px_40px_15px_rgba(151,143,253,0.1)] bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="font-HelveticaNeueMedium text-xl sm:text-2xl font-bold mb-6">Create & Get Authentic Feedback</h3>

                  <div className="space-y-7">
                    <Feature
                      icon={<QrCode className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Unique QR Codes"
                      description="Generate unique QR codes to place on your product packaging for direct consumer feedback."
                      delay={0.3}
                    />

                    <Feature
                      icon={<BarChart4 className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Genuine Insights"
                      description="Get authentic feedback from actual consumers who purchased your product."
                      delay={0.4}
                    />

                    <Feature
                      icon={<Users className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Real Human Feedback"
                      description="Ensure all feedback comes from real humans who actually used your product."
                      delay={0.45}
                    />

                    <Feature
                      icon={<Fingerprint className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Unique Responses"
                      description="Receive unique feedback from different consumers, preventing duplicate submissions."
                      delay={0.5}
                    />

                    <Feature
                      icon={<Coins className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Custom Token Rewards"
                      description="Offer your own tokens as rewards, creating a transparent and direct incentive system."
                      delay={0.55}
                    />
                  </div>
                </motion.div>
              </div>

              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative"
                >
                  
                    <div className="relative w-fit max-w-full justify-self-center backdrop-blur-sm rounded-2xl px-32 py-28 max-[540px]:py-36 shadow-[0px_0px_40px_15px_rgba(151,143,253,0.1)]">
                      <div className="flex items-center justify-center h-[350px] min-[540px]:h-[300px]">
                        <SurveyorAnimation />
                      </div>
                    </div>
                  
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Participant Content */}
          <motion.div
            initial={activeTab === "participant" ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            animate={activeTab === "participant" ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`${activeTab === "participant" ? "block" : "hidden"}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="relative order-2 md:order-1 "
                >
                  <div className="relative ">
                    <div className="relative max-w-full w-fit justify-self-center bg-white/90 backdrop-blur-sm rounded-2xl p-16 py-8 max-[440px]:p-6 shadow-[0px_0px_40px_15px_rgba(151,143,253,0.1)]">
                      <div className="flex items-center justify-center h-[350px]">
                        <ParticipantAnimation />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="order-1 md:order-2">
                <motion.div
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-[800px] mx-auto sm:p-16 shadow-[0px_0px_40px_15px_rgba(151,143,253,0.1)] "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h3 className="font-HelveticaNeueMedium text-xl sm:text-2xl font-bold mb-6">Easy Participation & Instant Rewards</h3>

                  <div className="space-y-7">
                    <Feature
                      icon={<Scan className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Scan QR Code"
                      description="Simply scan the QR code found on product packaging to access the survey."
                      delay={0.3}
                    />

                    <Feature
                      icon={<FileText className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Share Your Feedback"
                      description="Complete a quick survey about your experience with the product."
                      delay={0.4}
                    />

                    <Feature
                      icon={<Gift className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Claim Your Reward"
                      description="Instantly receive token rewards directly to your wallet after completion."
                      delay={0.5}
                    />

                    <Feature
                      icon={<Wallet className="w-7 h-7 min-[400px]:w-10 min-[400px]:h-10 text-blue-600" />}
                      title="Gas-Free Transactions"
                      description="Use our miniapp to fill out the survey and claim a reward without paying any gas fees."
                      delay={0.6}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* </div> */}

      {/* Call to action */}
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center flex flex-col gap-5"
        >
          <h3 className="md:text-4xl md:leading-[52px] text-2xl leading-[40px] font-HelveticaNeueBold text-center">Simple. Secure. <span className=" text-[rgba(59,78,244,1)]">Rewarding.</span></h3>
          <p className="text-md md:text-lg text-[#5A6573] leading-[20px] max-w-3xl mx-auto">
            Join our blockchain survey platform that directly connects brands with real consumers. Brands get authentic
            feedback, consumers get instant rewards - all without middlemen.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-fit self-center px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
        </motion.div>
      </div>


    </section>
  )
}

// Feature component with animation
function Feature({ icon, title, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex gap-4"
    >
      <div className="flex-shrink-0 h-fit p-2 mt-1 bg-blue-100 rounded-xl">{icon}</div>
      <div>
        <h4 className="font-HelveticaNeueMedium text-[rgba(59,78,244,1)] text-[14px] md:text-lg">{title}</h4>
        <p className="text-[12px] md:text-sm text-[#5A6573] leading-[20px]">{description}</p>
      </div>
    </motion.div>
  )
}

// Animated illustration for Surveyor tab
function SurveyorAnimation() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative ">
        {/* Product with QR */}
        <motion.div
          className="absolute -top-44 left-12 min-[540px]:-top-20 min-[540px]:-left-[100px] bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-40 h-40 flex flex-col items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="w-20 h-20 border-2 border-blue-500 rounded-md flex items-center justify-center mb-2">
            <QrCode className="w-14 h-14 text-blue-600" />
          </div>
          <p className="text-xs text-center text-gray-600">Product QR Code</p>
        </motion.div>

        {/* Survey Creation */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl shadow-xl min-w-full w-64 h-64 flex flex-col items-center justify-center text-white"
          animate={{
            boxShadow: [
              "0px 0px 0px rgba(79, 70, 229, 0.2)",
              "0px 0px 30px rgba(79, 70, 229, 0.6)",
              "0px 0px 0px rgba(79, 70, 229, 0.2)",
            ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        >
          <BarChart4 className="w-16 h-16 mb-4" />
          <h4 className="text-lg font-bold mb-2">Survey Creation</h4>
          <p className="text-sm text-center max-w-32">Design your product survey and generate QR codes</p>
        </motion.div>

        {/* Rewards */}
        <motion.div
          className="absolute right-12 -bottom-44 min-[540px]:-bottom-20 min-[540px]:-right-[100px] bg-white p-4 rounded-lg shadow-lg border border-gray-200 w-40 h-40 flex flex-col items-center justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="w-20 h-20 border-2 border-purple-500 rounded-full flex items-center justify-center mb-2">
            <Coins className="w-14 h-14 text-purple-600" />
          </div>
          <p className="text-xs text-center text-gray-600">Custom Token Rewards</p>
        </motion.div>

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
          <motion.path
            d="M 40 40 L 120 120"
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.path
            d="M 220 220 L 300 300"
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

// Animated illustration for Participant tab
function ParticipantAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearTimeout(timer)
  }, [step])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-80 max-[440px]:h-72">
        {/* Phone with QR scanner */}
        <motion.div
          className={`absolute inset-0 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center transition-all duration-500 ${step === 0 ? "opacity-100 scale-100 z-10" : "opacity-0 scale-90 z-0"
            }`}
        >
          <div className="w-40 h-60 bg-gray-100 rounded-lg border-8 border-gray-300 flex flex-col items-center justify-center relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full" />
            <div className="flex-1 w-full flex items-center justify-center">
              <div className="relative">
                <Scan className="w-16 h-16 text-blue-600" />
                <motion.div
                  className="absolute inset-0 border-2 border-blue-500 rounded-md"
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </div>
            <p className="text-xs text-center text-gray-600 mb-4">Scanning QR Code</p>
          </div>
        </motion.div>

        {/* Survey form */}
        <motion.div
          className={`absolute inset-0 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center transition-all duration-500 ${step === 1 ? "opacity-100 scale-100 z-10" : "opacity-0 scale-90 z-0"
            }`}
        >
          <div className="w-40 h-60 bg-gray-100 rounded-lg border-8 border-gray-300 flex flex-col items-center justify-center relative p-2">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full" />
            <div className="flex-1 w-full flex flex-col items-center justify-center gap-2">
              <div className="w-full h-3 bg-gray-300 rounded-full" />
              <div className="w-full h-3 bg-gray-300 rounded-full" />
              <div className="w-full h-3 bg-gray-300 rounded-full" />
              <div className="w-full flex justify-center mt-2">
                <div className="w-4 h-4 rounded-full border-2 border-blue-500 mr-2" />
                <div className="w-16 h-3 bg-gray-300 rounded-full" />
              </div>
              <div className="w-full flex justify-center mt-1">
                <div className="w-4 h-4 rounded-full border-2 border-blue-500 mr-2" />
                <div className="w-16 h-3 bg-gray-300 rounded-full" />
              </div>
              <FileText className="w-10 h-10 text-blue-600 mt-2" />
            </div>
            <p className="text-xs text-center text-gray-600 mb-2">Filling Survey</p>
          </div>
        </motion.div>

        {/* Reward */}
        <motion.div
          className={`absolute inset-0 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex flex-col items-center justify-center transition-all duration-500 ${step === 2 ? "opacity-100 scale-100 z-10" : "opacity-0 scale-90 z-0"
            }`}
        >
          <div className="w-40 h-60 bg-gray-100 rounded-lg border-8 border-gray-300 flex flex-col items-center justify-center relative">
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400 rounded-full" />
            <div className="flex-1 w-full flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="relative">
                  <Gift className="w-16 h-16 text-purple-600" />
                  <motion.div
                    className="absolute -inset-2"
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(147, 51, 234, 0)",
                        "0px 0px 20px rgba(147, 51, 234, 0.5)",
                        "0px 0px 0px rgba(147, 51, 234, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </motion.div>
            </div>
            <p className="text-xs text-center text-gray-600 mb-4">Claiming Reward</p>
          </div>
        </motion.div>

        {/* Progress indicators */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full ${step === i ? "bg-blue-600" : "bg-gray-300"}`}
              animate={step === i ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
