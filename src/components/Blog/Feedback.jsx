import React from 'react'
import Feedbackimg from "../../assets/Feedback.svg"
function Feedback() {
  return (
    <div className="flex md:flex-row flex-col gap-6">
     
      <div className="md:w-[50%] w-full flex flex-col justify-center gap-y-7">
        <span className="text-[24px] md:text-[36px] font-[700] text-[#132337]">
        <span className='text-[#3B4EF4]'>Collect information</span> and <span className='text-[#3B4EF4]'>feedback</span> from almost anywhere

        </span>
        <span className="md:text-[16px] text-[#5A6573] font-[400] text-[12px]">
        Listen to what people want by collecting responses from your stakeholders using web links, email, or by embedding surveys and forms on your website. We also offer a global panel that you can leverage to collect valuable market insights.
        </span>
        <button className="rounded-[7px] md:px-[30px] px-[20px] md:py-[12px] py-[10px] text-[#3B4EF4] font-[400] md:text-[16px] text-[14px] border border-[#5868F8] w-fit ">
          Sign up free
        </button>
      </div>
      <div className="md:w-[50%] md:justify-end w-full flex justify-center items-center">
        <img src={Feedbackimg} alt="Feedback" />
      </div>
    </div>
  )
}

export default Feedback