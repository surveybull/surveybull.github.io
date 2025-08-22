import { useState } from "react";
import { Button } from "../../@/components/ui/button";
import { step } from "@material-tailwind/react";
import {
  User,
  Users,
  PartyPopper,
  Calendar,
  MapPin,
  Cake,
  GraduationCap,
  Flag,
  VenetianMaskIcon as Mask,
  TreePine,
  Wine,
  Heart,
} from "lucide-react";


export default function Steps({ content, activeStep, setActiveStep }) {
  const handleContinue = () => {
    if (activeStep < content.length) {
      setActiveStep(activeStep + 1);
    }
  };
  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="w-full relative">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-transparent p-4 lg:p-8 bg-[#FFFFFF] border border-[#E7E9EB] rounded-[22.94px] shadow-[2px_7px_25px_0px_rgba(151,143,253,0.14)]">
          <div className="flex max-lg:flex-col gap-8 w-full">

            {/* Sidebar */}
            <div className="w-full py-8 lg:w-80">
              <div className="relative">
                <div
                  className={`
                      relative flex flex-col gap-2 md:gap-8 lg:flex-col max-lg:flex-row max-lg:justify-between
                      before:content-[''] before:absolute before:bg-purple-600/80
                      before:left-[22px] before:top-0 before:bottom-0 before:w-0.5 lg:before:left-[22px]
                      max-lg:before:top-[22px] max-lg:before:left-[12px] max-lg:before:right-[12px]
                      max-lg:before:h-0.5 max-lg:before:w-auto max-lg:before:bottom-auto max-sm:before:top-[16px]
                  `}
                >
                  {content.map((step) => {
                    const Icon = step.icon;
                    const isActive = step.id === activeStep;

                    return (
                      <div
                        key={step.id}
                        className={`flex max-lg:flex-col items-center gap-4 relative cursor-pointer lg:flex`}
                        onClick={() => setActiveStep(step.id)}
                      >
                        <div
                          className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${isActive
                            ? "bg-white border-2 sm:border-4 border-purple-600 text-purple-600"
                            : "bg-gray-200 text-gray-500 border border-purple-600/20"
                            }`}
                        >
                          <Icon className="w-3 h-3 sm:w-5 sm:h-5" />
                        </div>
                        <div className="flex flex-col justify-center items-center lg:items-start">
                          <div className={`text-xs sm:text-sm text-center ${isActive ? "gradient-text" : "text-gray-500"}`}>
                            Step {step.id}
                          </div>
                          <div className={`font-medium hidden lg:block ${isActive ? "text-gray-800" : "text-gray-600"}`}>
                            {step.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-[#EDEFFF] p-8 rounded-[10px] max-w-[960px] min-h-[400px]">
              <div className="gradient-text w-fit text-sm sm:text-lg font-medium mb-2">Step {content[activeStep - 1].id}</div>
              <h1 className="font-HelveticaNeueMedium text-xl sm:text-3xl md:text-4xl text-gray-800 leading-tight mb-2 sm:mb-4 md:mb-6">
                {content[activeStep - 1].data.title}
              </h1>
              <div className="w-full">
                <div className="w-full">
                  <p className="text-gray-600 text-[14px] md:text-base pb-4">{content[activeStep - 1].data.desc}</p>
                  <p className="text-gray-600 text-[14px] md:text-base pb-4">{content[activeStep - 1].data.desc2}</p>
                </div>
                <div className="w-full">
                  <img
                    src={content[activeStep - 1].data.img}
                    alt="Step"
                    className="w-full object-fill rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col min-[450px]:flex-row justify-between items-center gap-4 mt-8">
                <Button
                  onClick={handleBack}
                  disabled={activeStep === 1}
                  variant="outline"
                  className="shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] px-[30px] py-[12px] font-[500] text-[16px]"
                >
                  Back
                </Button>
                <Button
                  onClick={handleContinue}
                  disabled={activeStep === content.length}
                  className="gradient-bg shadow-[2px_7px_16px_0px_rgba(19,35,55,0.1)] rounded-[7px] px-[30px] py-[12px] text-[#FFFFFF] font-[500] text-[16px]"
                >
                  {activeStep === content.length ? "Finish" : "Continue"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
