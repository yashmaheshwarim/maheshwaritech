import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SoftwareHero from "@/components/SoftwareHero";
import SoftwareFeatures from "@/components/SoftwareFeatures";
import SoftwareScreenshots from "@/components/SoftwareScreenshots";
import SoftwareBenefits from "@/components/SoftwareBenefits";
import DemoForm from "@/components/DemoForm";
import { useEffect } from "react";
import { motion } from "framer-motion";

const ClinicManagement = () => {
  // Ensure the page scrolls to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    "Patient Management & Records",
    "Appointment Scheduling & Calendars",
    "Digital Prescription Management",
    "Integrated Billing & Invoicing",
    "Doctor & Staff Dashboard",
    "Comprehensive Reports & Analytics",
  ];

  const screenshots = [
    { title: "Doctor Dashboard", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" },
    { title: "Patient Records", image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop" },
    { title: "Billing System", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" },
    { title: "Reports & Analytics", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" },
  ];

  const benefits = [
    "Save Time on Administrative Tasks",
    "Improve Patient Care and Management",
    "Reduce Paperwork to Zero",
    "Better Analytics and Financial Reports",
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <SoftwareHero 
          badge="Healthcare Solution"
          title="Clinic Management System"
          subtitle="Smart software to manage Patients, Appointments, Billing, and Reports seamlessly from one unified dashboard."
        />
        <SoftwareFeatures 
          title="Clinic Management System Features" 
          features={features} 
        />
        <SoftwareScreenshots screenshots={screenshots} />
        <SoftwareBenefits benefits={benefits} />
        
        {/* Demo Section */}
        <section className="py-20 bg-background" id="demo-form">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Want a Demo?
              </h2>
              <p className="text-muted-foreground">
                Get in touch with us at <a href="tel:+918511923811" className="text-primary hover:underline font-medium">+91 8511923811</a> or fill out the form below to experience the system.
              </p>
            </motion.div>
            <DemoForm defaultSoftware="Clinic Management System" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ClinicManagement;
