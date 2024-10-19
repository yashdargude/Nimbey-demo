import React from "react";
import nimbeyImage from "../assets/nimbey_ai_image.svg";
import emailIcon from "../assets/icons/emailIcon.svg";
import shieldIcon from "../assets/icons/shieldIcon.svg";
import recycleIcon from "../assets/icons/recycleIcon.svg";
import "./DraftClaimsWithAI.css";

interface DraftClaimsWithAIProps {
  mainHeading?: string;
  mainDescription?: string;
  feature1Text?: string;
  feature2Text?: string;
  feature3Text?: string;
  buttonText?: string;
  imageSrc?: string;
  feature1Icon?: string;
  feature2Icon?: string;
  feature3Icon?: string;
}

const DraftClaimsWithAI: React.FC<DraftClaimsWithAIProps> = ({
  mainHeading = "Draft claims with AI",
  mainDescription = "Nimbey AI leverages can gather evidence and draft emails for deduction claims. Our analytics-based response helps you draft claims so you can win more disputes.",
  feature1Text = "AI automatically attaches relevant documentation and explanation on why the deduction is incorrect.",
  feature2Text = "Draft claim quickly based on deduction code.",
  feature3Text = "Human in the loop, Deduction experts review claims before they are sent out.",
  buttonText = "Learn More",
  imageSrc = nimbeyImage, // Default image
  feature1Icon = emailIcon,
  feature2Icon = shieldIcon,
  feature3Icon = recycleIcon,
}) => {
  return (
    <section className="bg-white w-full px-1 md:w-[87.50%] lg:w-[87.50%] mb-[40px] lg:px-10">
      {/* Parent Container for Image and Text - 100% Width */}
      <div className="flex flex-col-reverse md:flex-row w-full items-center md:items-start gap-[9.37%]">
        <div className="w-[85%] md:w-[35.95%]">
          <img
            src={imageSrc}
            alt="Nimbey AI"
            className="h-auto w-full md:h-auto md:max-h-[473px] object-contain"
          />
        </div>

        <div className="w-full md:w-[54.68%] flex flex-col items-center md:items-start md:pt-[5%] md:pl-[5px]">
          <h2 className="text-[26px] md:text-[36px] font-semibold text-gray-800 mb-4 text-center md:text-left font-poppins tracking-[0.02em] leading-[1.4] ">
            {mainHeading}
          </h2>
          <p className="text-[16px]  md:text-[18px] text-[#131618] mb-6 text-center md:text-left font-public-sans tracking-[0.02em] leading-[1.6] ">
            {mainDescription}
          </p>

          {/* Features Section */}
          <div className="flex flex-col items-center mt-5 md:pt-0 px-8 md:px-0 gap-[5px] md:gap-[0px] md:items-start md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-8 w-full">
            {/* Feature 1 */}
            <div className="flex items-start space-x-6 md:space-x-0 md:flex-col md:space-y-2 w-full md:w-auto md:max-w-[260px] md:max-h-[106px]">
              <img
                src={feature1Icon}
                alt="Feature 1 Icon"
                className="w-[26px] h-[24px]"
              />
              <span className="text-left text-[#212B36] text-[14px] font-semibold text-ellipsis font-inter">
                {feature1Text}
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-6 md:space-x-0 md:flex-col md:space-y-2 w-full md:w-auto md:max-w-[216px] md:max-h-[93px]">
              <img
                src={feature2Icon}
                alt="Feature 2 Icon"
                className="w-[24px] h-[25px]"
              />
              <span className="text-left text-[#212B36] text-[14px] font-semibold text-ellipsis font-inter">
                {feature2Text}
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-6 md:space-x-0 md:flex-col md:space-y-2 w-full md:w-auto md:max-w-[205px] md:max-h-[102px]">
              <img
                src={feature3Icon}
                alt="Feature 3 Icon"
                className="w-[28px] h-[28px]"
              />
              <span className="text-left text-[#212B36] text-[14px] font-semibold text-ellipsis font-inter">
                {feature3Text}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Learn More Button - Aligned Below Text Content */}
      <div className="w-full pl-6 md:pl-0 flex justify-start md:ml-0 mt-[40px]">
        <button className="inline-flex items-center justify-center text-black bg-transparent border border-[#E4E4E4] px-4 py-2 md:w-[230px] md:h-[45px] rounded-md transition-all duration-300 hover:border-green-500 focus:outline-none">
          <span>{buttonText}</span>
          <span className="font-bold text-black ml-2">&rarr;</span>{" "}
          {/* Added margin-left to arrow */}
        </button>
      </div>
    </section>
  );
};

export default DraftClaimsWithAI;
