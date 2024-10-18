import React from "react";
import { motion } from "framer-motion"; // Import motion
import SuperchargeSection from "../components/SuperchargeSection";
import HeroSection from "../components/HeroSection";
import AutomatedDeductionManagement from "../components/AutomatedDeductionManagement";
import DraftClaimsWithAI from "../components/DraftClaimsWithAI";
import HowItWorks, { CardData } from "../components/HowItWorks";
import Integrations from "../components/IntegrationCard";
import WhyChooseNimbey from "../components/WhyChooseNimbey";
import apDashboardImage from "../assets/apDashboard.svg";
import apImage1 from "../assets/apImage1.svg";
import apNimbeyAiImage from "../assets/ap_nimbey_ai_image.svg";
import reviewchargeImage from "../assets/icons/reviewcharge.svg"; // Default images
import analysisImage from "../assets/icons/pay-customer-invoice.svg";
import reconciliationImage from "../assets/icons/reconciliation.svg";
import nounDollar from "../assets/icons/noun-dollar-812724 1.svg";
import nounDashboard from "../assets/icons/noun-dashboard-6200761 1.svg";
import nounCheckmark from "../assets/icons/noun-checkmark-5488666 2.svg";

const cards: CardData[] = [
  {
    title: "Review Charges",
    description:
      "Nimbey AI analyzes invoice charges for accuracy based on specific vendor agreements, freight rates, surge charges, additional services, and more.",
    titleFontSize: "22px", // Correct format
    titleFontWeight: "bold",
    imgSrc: reviewchargeImage,
    size: "large", // Ensure this is one of the allowed values
    imageWidth: "22.14px",
    imageHeight: "23.13px",
  },
  {
    title: "Pay Customer Invoice",
    description:
      "Nimbey presents the final payment for approval and processes the customer invoice using the specified payment method.",
    imgSrc: analysisImage,
    size: "large", 
    imageWidth: "35.8px",
    imageHeight: "36.8px",
  },
  {
    title: "Reconcile with Finance",
    description:
      "Automatically record payments with integration to financial platforms, including Quickbooks and Netsuite.",
    imgSrc: reconciliationImage,
    size: "large", // Correct size
    imageWidth: "26px",
    imageHeight: "28.87px",
  },
];

const cardsTwo = [
  {
    title: "Substantial Cost Savings",
    description:
      "Ditch manual processes to drastically reduce cost and speed up accounts payable.",
    titleFontSize: "22",
    titleFontWeight: "bold",
    imgSrc: nounDollar,
    imageWidth: "42px", // Include "px" for proper width
    imageHeight: "55px", // Include "px" for proper height
    size: "large",
  },
  {
    title: "Higher Accuracy = savings",
    description:
      "Human errors can result in discrepancies and duplicates. Nimbey AI delivers higher accuracy, meaning more savings.",
    imgSrc: nounCheckmark,
    imageWidth: "45px",
    imageHeight: "56px",
    size: "large",
  },
  {
    title: "End-to-End Visibility",
    description:
      "Track all your invoices and payments for improved transparency and cash flow.",
    imgSrc: nounDashboard,
    size: "large",
  },
];

const AP: React.FC = () => (
  <div className="w-full flex flex-col items-center">
    {/* Wrap components with motion.div to apply scroll animations */}
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Start from this position
      whileInView={{ opacity: 1, y: 0 }} // Animate to this position when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth easing
      viewport={{ once: true }} // Play animation only once
    >
      <HeroSection
        mainHeading="Nimbey AI.  <br /> Your Accounts Payable Co-polit."
        highlightColor="#8FCC2C"
        imageSrc={apDashboardImage}
      />
    </motion.div>

    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Removed x axis, using y for vertical animation
      whileInView={{ opacity: 1, y: 0 }} // Animate to original y position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Play animation only once
    >
      <AutomatedDeductionManagement
        mainHeading="Automate your Accounts Payable."
        subText1="Nimbey is the first fully automated accounts payable platform built for distribution leaders in food and beverage."
        subText2="It speeds up the whole process, from gathering data to making payments, saving teams time and cutting costs."
        imageSrc={apImage1}
      />
    </motion.div>

    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Play animation only once
    >
      <DraftClaimsWithAI
        imageSrc={apNimbeyAiImage}
        mainHeading="100s of carrier and vendor contracts?"
        mainDescription="Nimbey AI effortlessly pulls invoices from any source and cross-references them with relevant documents for quick validation. No matter how many documents you have or what format they’re in, Nimbey gets the job done."
        feature1Text="AI recognizes and captures invoice info coming through email, EDI, and other systems."
        feature2Text="AI matches invoice to contract, BOL, PO, Proof of delivery and other documentation."
        feature3Text="Expert Humans in the loop review payments before they are made."
      />
    </motion.div>

    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Start 50px below
      whileInView={{ opacity: 1, y: 0 }} // Move to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Play animation only once
    >
      <HowItWorks cards={cards} />
    </motion.div>

    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Play animation only once
    >
      <Integrations />
    </motion.div>

    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Play animation only once
    >
      <WhyChooseNimbey cards={cardsTwo} />
    </motion.div>

    <motion.div
      className="w-full flex justify-center overflow-hidden relative z-10 mb-[-1px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Play animation only once
    >
      <SuperchargeSection
        title="Supercharge your AP."
        subtitle="Boost Efficiency, cut costs. It’s nimble and easy."
      />
    </motion.div>
  </div>
);

export default AP;
