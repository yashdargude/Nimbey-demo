import React from "react";
import clipboardImage from "../assets/icons/clipboard.svg"; // Default images
import analysisImage from "../assets/icons/analysis.svg";
import reconciliationImage from "../assets/icons/reconciliation.svg";
import InfoCard from "./ui/InfoCard"; // Adjust the import path as needed

// Define the CardData interface for the card information
export interface CardData {
  title: string;
  description: string;
  imgSrc: string;
  size?: "small" | "medium" | "large"; // Restrict size to specific values
  titleFontSize?: string;
  titleFontWeight?: "normal" | "semibold" | "bold";
  imageWidth?: string; // New prop for image width
  imageHeight?: string; // New prop for image height
}

// Define the component props interface
interface HowItWorksProps {
  heading?: string;
  cards?: CardData[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  heading = "How it Works?", // Default heading
  cards = [
    {
      title: "Categorize with AI",
      description:
        "Nimbey AI can categorize deductions across 30+ retailers and distributor specific codes.",
      imgSrc: clipboardImage,
      size: "medium", // Default size
    },
    {
      title: "Analyze Disputes",
      description:
        "Our fine-tuned model can analyze data across any document format and assess validity of each claim. Nimbey AI can seamlessly file disputes on your behalf.",
      imgSrc: analysisImage,
      size: "large", // Large card
    },
    {
      title: "Automated Reconciliation",
      description:
        "Easily reconcile deductions using credit memos with integrations to Quickbooks and Netsuite.",
      imgSrc: reconciliationImage,
      size: "medium", // Default size
    },
  ], // Default cards data
}) => {
  return (
    <section className="py-10 md:py-20 px-8 bg-white w-[87.50%] mb-[40px] text-center">
      {/* Section Heading */}
      <h2
        className="text-3xl font-semibold mb-[40px]"
        style={{ color: "#212B36" }}
      >
        {heading}
      </h2>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center items-center">
            <InfoCard
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              size={card.size}
              imageHeight={card.imageHeight}
              imageWidth={card.imageWidth}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
