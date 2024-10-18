import React from "react";
import { motion } from "framer-motion"; // Import motion

import HeroSection from "../components/HeroSection";
import AutomatedDeductionManagement from "../components/AutomatedDeductionManagement";
import DraftClaimsWithAI from "../components/DraftClaimsWithAI";
import HowItWorks from "../components/HowItWorks";
import Integrations from "../components/IntegrationCard";
import WhyChooseNimbey from "../components/WhyChooseNimbey";

const Home: React.FC = () => (
  <div className="w-full flex flex-col items-center">
    {" "}
    {/* Parent Container */}
    {/* Wrap components with motion.div and centering wrapper */}
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Start from this position
      whileInView={{ opacity: 1, y: 0 }} // Animate to this position when in view
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation plays only once
    >
      <HeroSection />
    </motion.div>
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Change x to y for up-down animation
      whileInView={{ opacity: 1, y: 0 }} // Animate to original y position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation plays only once
    >
      <AutomatedDeductionManagement />
    </motion.div>
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Start 50px below
      whileInView={{ opacity: 1, y: 0 }} // Move to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation plays only once
    >
      <DraftClaimsWithAI />
    </motion.div>
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Start 50px below
      whileInView={{ opacity: 1, y: 0 }} // Move to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation plays only once
    >
      <HowItWorks />
    </motion.div>
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Start 50px below
      whileInView={{ opacity: 1, y: 0 }} // Move to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation plays only once
    >
      <Integrations />
    </motion.div>
    <motion.div
      className="w-full flex justify-center"
      initial={{ opacity: 0, y: 50 }} // Start 50px below
      whileInView={{ opacity: 1, y: 0 }} // Move to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // Ensures animation plays only once
    >
      <WhyChooseNimbey />
    </motion.div>
  </div>
);

export default Home;
