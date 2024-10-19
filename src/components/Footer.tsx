import React from "react";
import NimbeyimgW from "../assets/NimbeyLogoW.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 md:py-2 md:pb-8 overflow-x-hidden">
      {/* Container for Logo and Main Sections */}

      <div className="container mx-auto px-4 md:px-16 flex flex-col md:flex-row justify-between">
        {/* Logo and Tagline */}
        <div className="md:ml-4 mb-6 md:mb-0 md:w-1/3 w-full">
          <img
            src={NimbeyimgW}
            alt="nimbey logo"
            className="h-6 w-21 md:h-8 "
          />
          <p className="mt-2 text-gray-400 whitespace-nowrap">
            Made in San Francisco ✨
          </p>
        </div>

        {/* Main Sections Container */}
        <div className="flex flex-row md:flex-row justify-between w-full md:w-auto md:space-x-14">
          {/* Company Section */}
          <div className="mt-3 h-[108px] md:h-auto flex flex-col">
            <h3 className="text-base md:text-lg font-normal text-white text-center ">
              Company
            </h3>
            <ul className="mt-3 space-y-4 text-center">
              {" "}
              {/* Center-align text inside the ul */}
              <li className="text-sm md:text-base font-normal">Home</li>
              <li className="text-sm md:text-base font-normal">About Us</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="mt-3 h-[108px] md:h-auto flex flex-col">
            <h3 className="text-base md:text-lg font-normal text-white whitespace-nowrap text-center">
              Support
            </h3>
            <ul className="mt-3 space-y-4 text-center">
              {" "}
              {/* Added space-y-4 for equal gap */}
              <li className="text-sm md:text-base font-normal">FAQs</li>
              <li className="text-sm md:text-base font-normal whitespace-nowrap">
                Terms of Service
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div className="mt-3 h-[108px] md:h-auto flex flex-col">
            <h3 className="text-base md:text-lg font-normal text-white whitespace-nowrap text-center">
              Links
            </h3>
            <ul className="mt-3 space-y-4 text-center">
              {" "}
              {/* Added space-y-4 for equal gap */}
              <li className="text-sm md:text-base font-normal">Pricing</li>
              <li className="text-sm md:text-base font-normal">Integrations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Solid Line */}
      <hr className="border-gray-700 my-8 mx-4 md:mx-16 mb-1 md:mb-8" />

      {/* Bottom Section */}
      <div className="text-center text-sm mt-5 md:mt-0 ">
        © 2024 Nimbey Corp. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
