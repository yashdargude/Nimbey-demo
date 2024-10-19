import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import NimbeyLogoWhite from "../../assets/NimbeyLogoW.png"; // Import your logo

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col transform lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-500 ease-in-out`}
    >
      {/* Top Section: Logo and Close Icon with black background */}
      <div className="bg-black flex items-center justify-between p-6 w-full">
        {/* Logo at the left      and adjusted the height */}
        <img src={NimbeyLogoWhite} alt="Nimbey Logo" className="h-6" />

        {/* Close Icon at the right */}
        <FaTimes
          className="text-white text-3xl cursor-pointer"
          onClick={onClose}
        />
      </div>

      {/* Main Sidebar with gray background */}
      <div className="flex-grow bg-gray-900 flex flex-col justify-start pt-8">
        {/* Sidebar Links - Align Left */}
        <ul className="flex flex-col items-start pl-10 space-y-6 text-white text-lg w-full">
          <li className="group w-full">
            <Link to="/" onClick={onClose} className="hover:text-gray-300">
              Home
            </Link>
            <hr className="border-t-2 border-gray-600 w-[calc(100%-30px)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </li>
          <li className="group w-full">
            <Link
              to="/how-it-works"
              onClick={onClose}
              className="hover:text-gray-300 "
            >
              How it works?
            </Link>
            <span className="absolute left-0  bottom-0 h-4 w-[calc(100%-30px)] bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </li>
          <li className="group w-full">
            <Link
              to="/pricing"
              onClick={onClose}
              className="hover:text-gray-300"
            >
              Pricing
            </Link>
            <hr className="border-t-2 border-gray-600 w-[calc(100%-30px)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </li>
          <li className="group w-full">
            <Link to="/faqs" onClick={onClose} className="hover:text-gray-300">
              FAQs
            </Link>
            <hr className="border-t-2 border-gray-600 w-[calc(100%-30px)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </li>
        </ul>

        {/* Book Demo Button - Square Button with Slight Round Border */}
        <div className="mt-8 pl-10">
          <button className="border border-white text-white w-[192px] h-[45px] rounded-md hover:bg-white hover:text-black transition flex items-center justify-between px-4">
            <span>Book Demo</span> <span>➔</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
