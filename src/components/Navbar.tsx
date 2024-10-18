import React, { useState } from "react";
import { Link } from "react-router-dom";
import NimbeyLogo from "../assets/NimbeyLogo.svg";
import { FaBars } from "react-icons/fa"; // Icon for menu toggle
import Sidebar from "./ui/Sidebar";
import "./Navbar.css";

const navLinkStyle = {
  color: "#000000",
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "16px",
  transition: "color 0.3s",
};

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // State to control sidebar visibility

  return (
    //ensures navbar doesnt stretch beyond 1280px
    <nav className="max-w-[1280px] mx-auto flex lg:px-[15%] items-center justify-between py-4 px-6 bg-white mb-4 shadow-lg lg:mb-0 lg:shadow-none">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={NimbeyLogo} alt="Nimbey Logo" className="h-10 mr-3" />
      </div>

      {/* Hamburger Icon for Screens Below 900px */}
      <div
        className="lg:hidden text-2xl cursor-pointer"
        onClick={() => setSidebarOpen(true)} // Open sidebar on click
      >
        <FaBars />
      </div>

      {/* Navigation Links for Screens 900px and Above */}
      <ul className="hidden lg:flex space-x-8">
        <li>
          <Link to="/" style={navLinkStyle} className="hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/how-it-works"
            style={navLinkStyle}
            className="  hover:text-black"
          >
            How it works
          </Link>
        </li>
        <li>
          <Link to="/pricing" style={navLinkStyle} className="hover:text-black">
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/faqs" style={navLinkStyle} className="hover:text-black">
            FAQs
          </Link>
        </li>
      </ul>

      {/* Try Nimbey Button for Desktop */}
      <div className="hidden lg:block">
        <button className="custom-button border border-[#A8E45B] text-[#212B36] w-[150px] h-[45px] rounded-[8px]">
          Try Nimbey
        </button>
      </div>

      {/* Sidebar Component for Mobile Screens */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};

export default Navbar;
