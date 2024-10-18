import React from "react";
import dashboardImage from "../assets/dashboard.svg";
import "./HeroSection.css";

interface HeroSectionProps {
  mainHeading?: string;
  highlightColor?: string;
  subText?: string;
  buttonText?: string;
  imageSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  mainHeading = "Your deductions <br /> management co-pilot.",
  highlightColor = "",
  subText = "Increase profitability. It’s nimble and easy.",
  buttonText = "Book a demo",
  imageSrc = dashboardImage,
}) => {
  return (
    <section className="flex flex-col items-center text-center py-10 sm:py-16 bg-white w-[87.50%] mb-[40px]">
      {/* Main Heading - Supports Line Breaks in Both Mobile and Desktop Views */}
      <h1 className="font-extrabold text-3xl sm:text-3xl md:text-5xl text-[#1B1B1B] leading-tight mb-6 sm:mb-8">
        {/* Split the heading based on <br /> and render with a 30px gap */}
        {mainHeading.split("<br />").map((text, index) => (
          <span
            key={index}
            style={{
              display: "block", // Ensure the text block creates a new line
              marginBottom:
                index < mainHeading.split("<br />").length - 1 ? "20px" : "0", // 30px gap between lines
              background:
                highlightColor && index === 0
                  ? "linear-gradient(90deg, #B8F668, #8FCC2C)" // Gradient color for the highlighted part
                  : "none", // No gradient for other lines
              backgroundClip: highlightColor && index === 0 ? "text" : "none",
              WebkitBackgroundClip:
                highlightColor && index === 0 ? "text" : "none",
              color: highlightColor && index === 0 ? "transparent" : "inherit", // Transparent to show gradient text
            }}
          >
            {text}
          </span>
        ))}
      </h1>

      {/* Subtext - Default or Custom Text */}
      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8">
        {subText}
      </p>

      {/* Call to Action Button - Default or Custom Text */}
      <button className="custombutton z-10 relative">
        <span className="icon-container">
          <span className="icon">›</span>
          <span className="icon">›</span>
          <span className="icon">›</span>
          <span className="icon">›</span>
          <span className="icon">›</span>
          <span className="icon">›</span>
        </span>
        <span className="text">{buttonText}</span>
      </button>

      {/* Dashboard Image - Default or Custom Image */}
      <div className="flex justify-center">
        <div className="relative bg-white mt-[25px] overflow-hidden transition-transform transform hover:scale-105 duration-500 ease-in-out">
          <img
            src={imageSrc}
            alt="Dashboard Preview"
            className="transition-opacity duration-200"
          />
          <div className="absolute inset-0 ripple-effect" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
