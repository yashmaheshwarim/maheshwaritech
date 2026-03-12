import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RecentProjectsSection from "@/components/RecentProjectsSection";
import StandardsSection from "@/components/StandardsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BootAnimation from "@/components/BootAnimation";

const Index = () => {
  const [booted, setBooted] = useState(false);
  const handleComplete = useCallback(() => setBooted(true), []);

  return (
    <>
      {!booted && <BootAnimation onComplete={handleComplete} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: booted ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RecentProjectsSection />
        <StandardsSection />
        <WhyChooseSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
