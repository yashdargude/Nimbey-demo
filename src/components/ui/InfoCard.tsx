import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  imgSrc: string;
  size?: "small" | "medium" | "large"; // Optional, but no longer affecting width
  imageWidth?: string;
  imageHeight?: string;
  titleFontSize?: string;
  titleFontWeight?: "normal" | "semibold" | "bold";
  descriptionFontSize?: string;
  descriptionFontWeight?: "normal" | "semibold" | "bold";
  titleColor?: string;
  descriptionColor?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  imgSrc,
  imageWidth = "30px", // Default image width
  imageHeight = "30px", // Default image height
  titleFontSize,
  titleFontWeight,
  descriptionFontSize,
  descriptionFontWeight,
  titleColor,
  descriptionColor,
}) => {
  return (
    <div
      className={`group relative bg-white rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-700 w-full hover:scale-105 hover:bg-[#212B36] min-h-[180px] md:min-h-[240px]`} // Responsive min-height
      style={{
        boxShadow:
          "0 -6px 12px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.05)", // Custom shadow for top and bottom
        padding: "32.5px 30px", // Adjusted padding to control spacing
      }}
    >
      {/* Image and Title Container */}
      <div className="flex items-start justify-center w-full h-[30px] mb-[25px]">
        <img
          src={imgSrc}
          alt={title}
          className="mr-2"
          style={{ width: imageWidth, height: imageHeight, objectFit: "cover" }} // Dynamic image size from props
        />
        <h3
          className={`text-sm font-${titleFontWeight || "semibold"} ${
            titleColor || "text-black"
          } font-poppins h-[24px] group-hover:text-white`} // Hover text color change to white
          style={{ fontSize: titleFontSize || "16px" }} // Header is small for large size
        >
          {title}
        </h3>
      </div>

      {/* Description */}
      <p
        className={`${descriptionFontSize || "text-[16px]"} font-${
          descriptionFontWeight || "normal"
        } ${
          descriptionColor || "text-black"
        } font-inter group-hover:text-white`} // Hover text color change to white
        style={{
          width: "100%", // Full width
          lineHeight: "1.5em",
          wordWrap: "break-word", // Wrap long words
          overflowWrap: "break-word",
          textAlign: "center", // Center-align the description text
          marginTop: "4px",
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
