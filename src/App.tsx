import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import SuperchargeSection from "./components/SuperchargeSection";
// Lazy loaded pages
const Home = React.lazy(() => import("./pages/Home"));
const AP = React.lazy(() => import("./pages/AP"));
// const HowItWorks = () => (
//   <h2 className="text-center mt-16">How it works Page</h2>
// );
const Pricing = () => <h2 className="text-center mt-16">Pricing Page</h2>;
const FAQs = () => <h2 className="text-center mt-16">FAQs Page</h2>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Navbar should not push footer */}
        {/* added another div which will ensure that for width 1280px- 1536px the contnet will centred and aligned properly */}
        <div className="max-w-[1280px] w-full mx-auto px-4">
          <Navbar />

          {/* Main Content without any extra margins or padding */}
          <div className="flex-grow">
            {/* Wrap Routes with React.Suspense */}
            <React.Suspense
              fallback={<div className="text-center mt-16">Loading...</div>}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ap" element={<AP />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faqs" element={<FAQs />} />
              </Routes>
            </React.Suspense>
          </div>

          {/* Footer without any top margin or padding */}
        </div>
      </div>
      <SuperchargeSection />
      <Footer />
    </Router>
  );
};

export default App;
