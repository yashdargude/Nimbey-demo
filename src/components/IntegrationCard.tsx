import React from "react";
import combinedImage from "../assets/combined_integration_logos.svg"; // Replace with the actual path to your combined image

interface IntegrationsProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  titleColor?: string;
  descriptionColor?: string;
  imageWidth?: string;
}

const Integrations: React.FC<IntegrationsProps> = ({
  title = "Integrations",
  description = "Nimbey seamlessly integrates with your distributor portals, email, financial tools and more. ",
  imageSrc = combinedImage, // Default image path
  titleColor = "[#212B36]",
  descriptionColor = "text-gray-600",
  imageWidth = "w-3/4",
}) => {
  return (
    <section className="bg-white w-[87.50%] mb-[40px] text-center mx-auto">
      {/* Title Section */}
      <h2
        className={`font-poppins font-semibold mb-4 text-[#212B36]" text-[26px] md:text-[36px]`}
      >
        {title}
      </h2>

      {/* Description Section */}
      <p
        className={`font-public-sans font-medium ${descriptionColor} mb-12 mx-auto text-[16px] md:text-[20px] w-[408px] md:w-[592px]`}
      >
        {description}
      </p>

      {/* Image Section for All Integrations */}
      <div className="flex justify-center items-center">
        <img
          src={imageSrc}
          alt="Integrations"
          className={`${imageWidth} h-auto`} // Dynamic width from props
        />
      </div>
    </section>
  );
};

export default Integrations;
