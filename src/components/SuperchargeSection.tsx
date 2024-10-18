import React from "react";

interface SuperchargeSectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const SuperchargeSection: React.FC<SuperchargeSectionProps> = ({
  title = "Supercharge your deductions",
  subtitle = "Boost Efficiency and Maximize Recovery with Intelligent Deduction Solutions",
  primaryButtonText = "Try Nimbey",
  secondaryButtonText = "Book Demo",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  return (
    <section className="bg-gray-900 text-center pt-10 md:pt-12 text-gray-300 rounded-t-lg w-full overflow-hidden">
      {/* Title with Responsive Text Size */}
      <span
        className="text-[20px] md:text-[40px] font-semibold font-inter mb-4 md:mb-8 tracking-wide"
        style={{
          background: "linear-gradient(90deg, #B8F668, #8FCC2C)", // Gradient from #B8F668 to a darker shade
          backgroundClip: "text", // Only apply gradient to the text
          WebkitBackgroundClip: "text", // Ensure support for webkit browsers
          color: "transparent", // Make the text color transparent so the gradient shows
          animation: "gradientAnimation 3s infinite", // Add animation
        }}
      >
        {title
          .split(" ")
          .map((word, index) =>
            index === 0 || index === 1 ? (
              <span key={index}>{word} </span>
            ) : (
              word + " "
            )
          )}
      </span>
      {/* Subtitle with Conditional <br> Tag */}
      <p className="text-sm md:text-[15px] font-poppins font-regular text-[#D4D5D6] mb-8 md:mb-12 md:mt-4">
        {subtitle.split(" ").map((word, index) =>
          word === "Intelligent" ? (
            <span key={index}>
              {/* Line break for mobile view */}
              <span className="inline md:hidden">
                <br />
              </span>
              {word}
              {/* Line break for desktop view */}
              <span className="hidden md:inline">
                <br />
              </span>{" "}
            </span>
          ) : (
            word + " "
          )
        )}
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-4 mt-6 md:mt-2">
        {/* Try Nimbey Button */}
        <button
          onClick={onPrimaryButtonClick}
          className="bg-[#B8F668] text-[#212B36] px-6 py-2 text-sm md:text-base w-[162px] h-[45px] md:w-auto rounded-md shadow-md hover:shadow-lg transition-all duration-300" // Added duration for slow transition
        >
          {primaryButtonText}
        </button>

        {/* Schedule a Demo Button */}
        <button
          onClick={onSecondaryButtonClick}
          className="border border-[#B8F668] text-black bg-white px-6 py-2 text-sm md:text-base w-[162px] h-[45px] md:w-auto rounded-md hover:bg-[#B8F668] hover:text-white transition-all duration-300" // Added duration for slow transition
        >
          {secondaryButtonText}
        </button>
      </div>
      <hr className="border-t-2 border-dotted border-gray-600 mx-4 md:mx-16 mt-4 md:mt-10 mb-0 md:mb-10" />

      {/* Add the keyframes in a global CSS or style.css file */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default SuperchargeSection;
