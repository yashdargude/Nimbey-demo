import React from "react";
import clipboardImage from "../assets/icons/clipboardImage.svg"; // Replace with your images
import dollarImage from "../assets/icons/dollarImage.svg";
import lightbulbImage from "../assets/icons/lightbulbImage.svg";
import InfoCard from "./ui/InfoCard"; // Adjust the path as needed

interface CardProps {
  title: string;
  description: string;
  imgSrc: string;
  imageWidth?: string; // New prop for image width
  imageHeight?: string; // New prop for image height
}

interface WhyChooseNimbeyProps {
  title?: string;
  description?: string;
  cards?: CardProps[];
  titleSize?: string;
  descriptionSize?: string;
  titleColor?: string;
  descriptionColor?: string;
}

const WhyChooseNimbey: React.FC<WhyChooseNimbeyProps> = ({
  title = "Why Choose Nimbey?",
  description = "Maximize Your Recovery with Expert Audits, AI Insights, and Success-Based Results",
  cards = [
    {
      title: "Deduction Expert Audits",
      description:
        "We ensure that human deduction experts are in the loop along the way.",
      imgSrc: clipboardImage,
    },
    {
      title: "Success-Based Recovery",
      description:
        "We only make money if you do, so it's in our best interest to help you recover the maximum amount.",
      imgSrc: dollarImage,
    },
    {
      title: "Insights to recover more $",
      description:
        "Get AI-based insights to lower your deductions & increase recovery.",
      imgSrc: lightbulbImage,
    },
  ],
  titleSize = "text-[26px] md:text-[36px]",
  descriptionSize = "text-[16px] md:text-[20px]",
  titleColor = "text-[#212B36]", // Updated title color to #212B36
  descriptionColor = "text-gray-600",
}) => {
  return (
    <section className="py-10 md:py-20  bg-white w-[87.50%] mb-[40px] text-center">
      {/* Title Section */}
      <div
        className={`${titleSize} font-poppins font-semibold mb-[16px] ${titleColor}`}
      >
        {title}
      </div>

      {/* Description Section */}
      <p
        className={`${descriptionSize} font-public-sans font-medium ${descriptionColor} mb-[40px] mx-auto md:w-[530px] md:h-[53px]`}
      >
        {description}
      </p>

      {/* Info Cards Section */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center">
            <InfoCard
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              imageHeight={card.imageHeight}
              imageWidth={card.imageWidth}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseNimbey;
