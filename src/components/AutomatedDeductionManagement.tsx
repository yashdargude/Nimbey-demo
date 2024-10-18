import React from "react";
import automatedImage from "../assets/image1.svg"; // Import the image

interface AutomatedDeductionManagementProps {
  mainHeading?: string;
  subText1?: string;
  subText2?: string;
  buttonText?: string;
  imageSrc?: string;
}

const AutomatedDeductionManagement: React.FC<
  AutomatedDeductionManagementProps
> = ({
  mainHeading = "Fully automated, Deduction <br /> management",
  subText1 = "Nimbey is the first fully automated platform that helps companies manage and recover incorrect deductions.",
  subText2 = "Specifically built for CPG brands, Nimbey AI can dive into your data to identify incorrect deductions and gather evidence to file claims on your behalf.",
  buttonText = "How it works?",
  imageSrc = automatedImage, // Default image path
}) => {
  return (
    <section className="bg-white w-[87.50%] mb-[100px]">
      {/* Text and Image Section */}
      <div className="flex flex-col md:flex-row w-full gap-[15.95%]">
        {/* Text Section */}
        <div className="w-full md:w-[42.38%] mb-8 text-center md:text-left">
          {/* Main Heading - Supports Line Breaks in Both Mobile and Desktop Views */}
          <div className="text-[26px] md:text-[36px] font-semibold text-[#000000] mb-4 font-poppins">
            {mainHeading.split("<br />").map((text, index) => (
              <span key={index}>
                {text}
                {index < mainHeading.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </div>

          {/* First Subtext */}
          <p className="text-[16px] md:text-[18px] text-[#1E2126] mb-2 font-public-sans">
            {subText1}
          </p>

          {/* Second Subtext */}
          <p className="text-[16px] md:text-[18px] text-[#1E2126] mb-8 font-public-sans">
            {subText2}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[41.67%]">
          <img
            src={imageSrc}
            alt="Automated Deduction"
            className="h-full w-full "
          />
        </div>
      </div>

      {/* Button Section: Center on mobile and aligned on desktop */}
      <div className="flex justify-center md:justify-start w-full mt-[50px] md:-mt-[30px]">
        <button className="inline-flex items-center justify-center text-[#212B36] bg-transparent border border-[#83CD26] px-4 py-2 rounded-md transition-all duration-300 hover:bg-[#83CD26] hover:text-white focus:outline-none">
          <span className="mr-2">{buttonText}</span>
          <span className="font-bold">&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default AutomatedDeductionManagement;
